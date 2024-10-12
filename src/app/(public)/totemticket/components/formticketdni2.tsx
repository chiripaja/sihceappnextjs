'use client'
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import { HiIdentification } from 'react-icons/hi'
import SweetAlertService from '../../../components/SweetAlertService';
import { buscarxdni, findnombrepx } from '@/services/TotemServices';
import { TicketImpresion } from './ticketImpresion';
import Swal from 'sweetalert2';


type FormInput = {
    dni: string,
}

export const TicketDniPage2 = () => {
    const [datosTable, setDatosTable] = useState<any[]>([]);
    const [nearest, setNearest] = useState<any>(null);
    const [px, setPx] = useState();

    const [ticketdata, setTicketdata] = useState<any>(null);
    useEffect(() => {
        setFocus('dni');
    }, []);

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

            Swal.fire({
                html: `<h5>${msj}</h5>`,
                timer: 5000,
                timerProgressBar: true,
                icon: 'success',
            });
        }
    }, [nearest]);
    const { register, handleSubmit, setFocus, reset, formState: { errors } } = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> = async (data: FormInput) => {
        setDatosTable([]);
        const now: any = new Date();
        const { dni } = data;
        try {
            const pxdatos = await findnombrepx(dni);
            if (pxdatos) {
                setPx(pxdatos);
                const datos = await buscarxdni(dni);

                if (datos && datos.length > 0) {
                    const atencionesFuturastablas = datos.filter((atencion: any) => {
                        const today = new Date();
                        today.setUTCHours(0, 0, 0, 0);
                        if (!atencion.FechaIngreso) {
                            throw new Error("FechaIngreso no está presente en la atencion");
                        }
                        const ingresoDate = new Date(atencion.FechaIngreso);
                        ingresoDate.setUTCHours(0, 0, 0, 0);
                        const isToday = today.getTime() < ingresoDate.getTime();

                        return isToday;
                    });

                    setDatosTable(atencionesFuturastablas);

                    const atencionesFuturas = datos
                        .map((atencion: any) => {
                            if (!atencion.HoraIngreso) {
                                throw new Error("HoraIngreso no está presente en la atencion");
                            }

                            const [hours, minutes] = atencion.HoraIngreso.split(":");
                            const ingresoDate = new Date();
                            ingresoDate.setHours(hours);
                            ingresoDate.setMinutes(minutes);
                            ingresoDate.setSeconds(0);

                            return {
                                ...atencion,
                                IngresoDate: ingresoDate,
                            };
                        })
                        .filter((atencion: any) => {
                            const today = new Date();
                            today.setUTCHours(0, 0, 0, 0);
                            const ingresoDate = new Date(atencion.FechaIngreso);
                            ingresoDate.setUTCHours(0, 0, 0, 0);
                            const isToday = today.getTime() === ingresoDate.getTime();
                            return isToday;
                        });

                    if (atencionesFuturas.length > 0) {
                        const nearestAtencion = atencionesFuturas.reduce((prev: any, curr: any) => {
                            const prevDifference = prev.IngresoDate - now;
                            const currDifference = curr.IngresoDate - now;
                            return currDifference > 0 && (currDifference < prevDifference || prevDifference < 0) ? curr : prev;
                        });
                        setNearest(nearestAtencion);
                    } else {
                        Swal.fire({
                            title: `<span>${pxdatos.ApellidosyNombres}</span>`,
                            html: `<h5>No se encontraron citas para hoy</h5>`,
                            timer: 5000,
                            timerProgressBar: true,
                            icon: "error",
                        });
                    }
                } else {
                    Swal.fire({
                        title: `<span>${pxdatos.ApellidosyNombres}</span>`,
                        html: `<h5>No se encontraron citas.</h5>`,
                        timer: 5000,
                        timerProgressBar: true,
                        icon: "error",
                    });
                }
            } else {
                SweetAlertService.showError("Paciente no se encuentra registrado.");
            }
        } catch (error: any) {
            SweetAlertService.showError(error?.message || "Ocurrió un error inesperado");
        }
        reset();
    };

    const imprimirTicket = async (data: any) => {
        await setTicketdata(data)
        let msj = ""
        if (data) {
            switch (data.FuentesFinanciamiento.Descripcion) {
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
        }

        await print();
        setTicketdata(null);
        SweetAlertService.showAlert(msj, 'success');
        Swal.fire({
            title: `<span>Atencion</span>`,
            html: `<h5>${msj}</h5>`,
            timer: 5000,
            timerProgressBar: true,
            icon: 'success',
        });
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
                                    type="number"
                                    className="form-control "
                                    placeholder='dni'
                                    autoFocus={true}
                                    {...register('dni', { required: true })}
                                />
                                <style jsx>{`
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`}</style>
                            </div>
                            {errors.dni && <span className='text-red-500'>Este Campo es requerido</span>}
                            <div className="flex">
                                <input type="submit" value="Buscar" className='btn btn-primary w-full' />

                            </div>


                        </div>
                    </div>

                </div>
            </form>



            {datosTable && datosTable.length > 0 && (
                <div className="overflow-x-auto mt-6 d-print-none bg-white border">
                    <label className='text-slate-700 text-2xl border-rose-950 text-center w-full'>Atenciones Futuras</label>
                    <table className="table-auto border-collapse w-full">
                        <thead className='border-b'>
                            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{ fontSize: '0.9674rem' }}>
                                <th className="px-4 py-2" style={{ backgroundColor: '#f8f8f8' }}>Nombres</th>
                                <th className="px-4 py-2" style={{ backgroundColor: '#f8f8f8' }}>DNI</th>
                                <th className="px-4 py-2" style={{ backgroundColor: '#f8f8f8' }}>Fecha</th>
                                <th className="px-4 py-2" style={{ backgroundColor: '#f8f8f8' }}>Servicio</th>
                                <th className="px-4 py-2" style={{ backgroundColor: '#f8f8f8' }}>Imprimir</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-normal text-gray-700">
                            {datosTable.map((item: any) => (
                                <tr key={item.IdAtencion} className="hover:bg-gray-100 border-b border-gray-200 py-10">
                                    <td className="px-4 py-4">{item.Paciente.ApellidoPaterno} {item.Paciente.ApellidoMaterno} {item.Paciente.NombresCompletos}</td>
                                    <td className="px-4 py-4">{item.Paciente.NroDocumento}</td>
                                    <td className="px-4 py-4">{item.fecha_formate_ticket} {item.HoraIngreso}</td>
                                    <td className="px-4 py-4">
                                        {item.Servicio.Nombre}
                                    </td>
                                    <td className="px-4 py-4">
                                        <input type="submit" value="Imprimir" className='btn btn-primary w-full' onClick={() => imprimirTicket(item)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}



            <TicketImpresion dato={nearest} />
            {ticketdata && (
                <TicketImpresion dato={ticketdata} />
            )}

        </>
    )
}

