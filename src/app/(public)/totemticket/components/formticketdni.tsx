'use client'
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import { HiIdentification } from 'react-icons/hi'
import SweetAlertService from '../../../components/SweetAlertService';
import { buscarxdni } from '@/services/TotemServices';
import { TicketImpresion } from './ticketImpresion';


type FormInput = {
    dni: string,
}

export const TicketDniPage = () => {

    const [nearest, setNearest] = useState<any>(null);


  
    useEffect(() => {
        let msj = ""
        if (nearest) {
            switch (nearest.FuentesFinanciamiento.Descripcion) {
                case "SIS":
                    msj = "Dirigirse a consultorios.";
                    break;
                case "SALUDPOL":
                    msj = "Dirigirse a modulo de SALUDPOL.";
                    break;
                case "PARTICULAR":
                    msj = "Dirigirse a caja.";
                case "ESTRATEGIA":
                    msj = "Dirigirse a consultorios.";
                    break;
            }
            
            print();
            SweetAlertService.showAlert(msj, 'success');
        }
    }, [nearest]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> = async (data: FormInput) => {
        const now: any = new Date();
        const { dni } = data;
        const datos = await buscarxdni(dni)

        const atencionesFuturas = datos.map((atencion: any) => {
            const [hours, minutes] = atencion.HoraIngreso.split(':');
            const ingresoDate = new Date();
            ingresoDate.setHours(hours);
            ingresoDate.setMinutes(minutes);
            ingresoDate.setSeconds(0);
            return {
                ...atencion,
                IngresoDate: ingresoDate
            };
        }).filter((atencion: any) => atencion.IngresoDate > now);


        if (atencionesFuturas.length > 0) {
            const nearest = atencionesFuturas.reduce((prev: any, curr: any) => {
                const prevDifference = prev.IngresoDate - now;
                const currDifference = curr.IngresoDate - now;
                return (currDifference > 0 && (currDifference < prevDifference || prevDifference < 0)) ? curr : prev;
            });
            setNearest(nearest);
        } else {
            SweetAlertService.showError("No se encontro resultados");
        }
        reset();
    }



    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className="d-print-none d-flex align-items-center justify-content-center ">
                <div className="container text-center">
                    <div className="row justify-content-md-center">

                        <div className="col-sm-12">
                            DNI:
                            <div className="input-group mb-3">
                                <span className="input-group-text"><HiIdentification /></span>
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder='dni'
                                    autoFocus={true}
                                    {...register('dni', { required: true })}
                                />

                            </div>
                            {errors.dni && <span className='text-red-500'>Este Campo es requerido</span>}
                            <div className="flex">
                                <input type="submit" value="Buscar" className='btn btn-primary w-full' />
                                                           
                            </div>
                    

                        </div>
                    </div>

                </div>
            </form>

          
              <TicketImpresion dato={nearest} />
          
        </>
    )
}

