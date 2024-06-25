import { useEffect, useState } from "react";


export const TicketImpresion = ({ dato }: any) => { 
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('es-PE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    const formattedTime = now.toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    setCurrentDate(formattedDate);
    setCurrentTime(formattedTime);
  }, [dato?.IdAtencion]);
  return (
    <>
      {dato && (
        <div className='container d-none d-print-block'>
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
              Fecha: {dato.fecha_formate_ticket} Hr: {dato.HoraIngreso}
            </div>
            <div className="col-sm-12">
              Servicio : {dato.Servicio.Nombre}
            </div>
            <div className="col-sm-12">
              {dato.Medico.Empleado.TiposEmpleado.Descripcion} - {dato.Medico.Empleado.nombresCompletos}
            </div>
            <div className="col-sm-12">
              <div className="border-b w-full"></div>
            </div>
            <div className="col-sm-12 font-bold">
              <span>N° Historia : {dato.Paciente.NroHistoriaClinica}</span>
            </div>
            <div className="col-sm-12 font-bold">
              <span>N° Cuenta : {dato.IdAtencion}</span>
            </div>
            <div className="col-sm-12 font-bold">
              <span>Paciente : {dato.Paciente.ApellidosyNombres}</span>
            </div>
            <div className='col-sm-12 font-bold'>
              {dato.FuentesFinanciamiento.Descripcion}
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
            <div className="col-sm-12">
              Fecha  de Impresión:{currentDate} {currentTime}

            </div>       
          </div>
        </div>
      )}
    </>
  )
}
