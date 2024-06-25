
import { buscarxnombre } from '@/services/TotemServices';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TicketImpresion } from './ticketImpresion';
import SweetAlertService from '../../../components/SweetAlertService';
type FormInput = {
  apellidopaterno: string,
  apellidomaterno: string,
  primernombre: string,
}
export const TicketNombre = () => {
  const now: any = new Date();
  const [ticketdata, setTicketdata] = useState()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInput>();
  const [datosTable, setDatosTable] = useState<any>(null);
  const onSubmitNombre: SubmitHandler<FormInput> = async (data: FormInput) => {
    const { apellidopaterno, apellidomaterno, primernombre } = data;
    const datos = await buscarxnombre(apellidopaterno, apellidomaterno, primernombre)
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
      setDatosTable([nearest])
    } else {
      SweetAlertService.showError("No se encontro resultados");
    }


  }

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
    
    print()
    SweetAlertService.showAlert(msj, 'success');
  }
  const limpiar = () => {
    reset()
    setDatosTable('')
  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmitNombre)} className='d-print-none'>
        <div className="form-floating mb-3">
          <p className='text-slate-700'>Ingrese todos los datos:</p>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" {...register('apellidopaterno', { required: true })} />
          <label>Apellido Paterno</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" {...register('apellidomaterno', { required: true })} />
          <label>Apellido Materno</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" {...register('primernombre', { required: true })} />
          <label>Primer Nombre</label>
        </div>
        <div className='flex flex-col sm:flex-row sm:space-x-4 '>

          <button type="submit" className="bg-blue-500 w-full sm:flex-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ">Buscar</button>

          <button className="bg-red-500 w-full sm:flex-1 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            onClick={() => limpiar()}>
            Limpiar</button>
        </div>

      </form>


      {datosTable ? (
        <div className="overflow-x-auto mt-6 d-print-none bg-white border" >
          <table className="table-auto border-collapse w-full ">
            <thead className='border-b'>
              <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{ fontSize: '0.9674rem' }}>
                <th className="px-4 py-2 bg-gray-200" style={{ backgroundColor: '#f8f8f8' }} >Ap. Paterno</th>
                <th className="px-4 py-2" style={{ backgroundColor: '#f8f8f8' }} >Ap. Materno</th>
                <th className="px-4 py-2" style={{ backgroundColor: '#f8f8f8' }} >Nombre</th>
                <th className="px-4 py-2" style={{ backgroundColor: '#f8f8f8' }} >DNI</th>
                <th className="px-4 py-2" style={{ backgroundColor: '#f8f8f8' }} >Opcion</th>
              </tr>
            </thead>
            <tbody className="text-sm font-normal text-gray-700">
              {datosTable.map((item: any) => (
                <tr key={item.IdAtencion} className="hover:bg-gray-100 border-b border-gray-200 py-10">
                  <td className="px-4 py-4">{item.Paciente.ApellidoPaterno}</td>
                  <td className="px-4 py-4">{item.Paciente.ApellidoMaterno}</td>
                  <td className="px-4 py-4">{item.Paciente.NombresCompletos}</td>
                  <td className="px-4 py-4">{item.Paciente.NroDocumento}</td>
                  <td className="px-4 py-4">
                    <input type="submit" value="Imprimir" className='btn btn-primary w-full' onClick={() => imprimirTicket(item)} />

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) :
        <div></div>
      }

      <TicketImpresion dato={ticketdata} />

    </>
  )
}
