'use client'
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import { HiIdentification } from 'react-icons/hi'
import SweetAlertService from '../../components/SweetAlertService';
const buscarxdni = async (id: any) => {
  const apiUrl = process.env.apiurl;
  const data = await fetch(`${apiUrl}totem/dni/${id}`)
    .then(
      res => res.json()
    );
  return data;
}



type FormInput = {
  dni: string,
}

export default function Totemticket() {


  const [nearest, setNearest] = useState<any>(null);
  const [dateTime, setDateTime] = useState('');
  useEffect(() => {
    let msj = ""
    if (nearest) {
      switch (nearest.FuentesFinanciamiento.Descripcion) {
        case "SIS":
          msj = "Dirigirse a consultorios externos.";
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
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    setDateTime(formattedDateTime);
    const { dni } = data;
    const datos = await buscarxdni(dni)

    console.log(datos)

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
      console.log("entro cuando no hay citas")
    }
    reset();
  }



  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)} className="d-print-none vh-100 d-flex align-items-center justify-content-center bg-slate-400">
        <div className="container text-center">
          <div className="row justify-content-md-center">

            <div className="col-sm-4 bg-slate-300 rounded p-3">
              DNI:
              <div className="input-group mb-3">
                <span className="input-group-text"><HiIdentification /></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder='dni'
                  autoFocus={true}
                  {...register('dni', { required: true })}
                />

              </div>
              {errors.dni && <span className='text-red-500'>Este Campo es requerido</span>}
              <input type="submit" value="buscar" className='btn btn-primary w-full ' />

            </div>
          </div>

        </div>
      </form>

      {nearest && (
        <div className='container'>
          <div className="row text-center  text-xs">
            <div className="col-sm-12 font-bold">
              Hospital Regional Hermilio Valdizan
            </div>
            <div className="col-sm-12 text-xs">
              RUC : 20146038329
            </div>
            <div className="col-sm-12" style={{ fontSize: '8px' }}>
              JIRON HERMILIO VALDIZAN NUMERO 950 DISTRITO HUANUCO
            </div>
            <div className="col-sm-12 text-xs">
              Telef: (062)
            </div>
            <div className="col-sm-12 font-bold text-xs">
              TICKET DE CITA
            </div>
          </div>
          <div className="row text-sm">
            <div className="col-sm-12 font-bold">
              Cupo: 1
            </div>
            <div className="col-sm-12 font-bold">
              Fecha: {nearest.fecha_formate_ticket} Hr: {nearest.HoraIngreso}
            </div>
            <div className="col-sm-12">
              Servicio : {nearest.Servicio.Nombre}
            </div>
            <div className="col-sm-12">
              {nearest.Medico.Empleado.TiposEmpleado.Descripcion} - {nearest.Medico.Empleado.nombresCompletos}
            </div>
            <div className="col-sm-12">
              <div className="border-b w-full"></div>
            </div>
            <div className="col-sm-12 font-bold">
              <span>N° Historia : {nearest.Paciente.NroHistoriaClinica}</span>
            </div>
            <div className="col-sm-12 font-bold">
              <span>N° Cuenta : {nearest.IdAtencion}</span>
            </div>
            <div className="col-sm-12 font-bold">
              <span>Paciente : {nearest.Paciente.ApellidosyNombres}</span>
            </div>
            <div className='col-sm-12 font-bold'>
              {nearest.FuentesFinanciamiento.Descripcion}
            </div>
            <div>
              Interconsulta: Si( )  No ( )
            </div>
            <div className="col-sm-12">
              <div className="border-b w-full"></div>
            </div>
            <div className="col-sm-12">
              Terminal: GALENOS
            </div>
            <div className="col-sm-12 text-center font-bold">
              CONSERVE SU TICKET-CENTRAL DE EMERGENCIAS LLAME AL 106 SAMU RECUERDE LLEGAR 30 MIN ANTES DE LA CITA O PERDERA LA MISMA
            </div>
            <div className="col-sm-12 text-xs">
              Fecha de Impresion: {dateTime}
            </div>
            <div>

            </div>

          </div>
        </div>
      )}
    </>
  )
}
