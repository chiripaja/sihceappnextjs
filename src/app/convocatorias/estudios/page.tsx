import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
export default function page() {
    return (
        <>


            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <span className="font-bold">Estudios</span>
                    </div>
                    <div className="col-sm-12">
                        <button className="btn btn-danger">Nuevo Estudio</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table  shadow-2xl table-bordered mt-4">
                            <thead className="table-danger">
                                <tr >
                                    <th scope="col">#</th>
                                    <th scope="col">TITULO O GRADO</th>
                                    <th scope="col">ESPECIALIDAD</th>
                                    <th scope="col">FECHA DE EXPEDICION DEL TITULO</th>
                                    <th scope="col">INSTITUCION</th>
                                    <th scope="col">CIUDAD / PAIS</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>TECNICO SUPERIOR (de 3 a 4 años)</td>
                                    <td>COMPUTACION E INFORMATICA</td>
                                    <td>JUNIO / 2015</td>
                                    <td>Universidad</td>
                                    <td>LIMA / PERU</td>
                                    <td><GrEdit />
                                    
                                    </td>
                                    <td><MdDeleteForever /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="card shadow-2xl" style={{ width: '43rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Estudios</h5>
                        <hr />
                        <div className="card-text container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className=" font-bold">Titulo o Grado : </label>
                                </div>
                                <div className="col-sm-8">
                                    <select name="" className='form-control'>
                                        <option value="">- SELECCIONAR - </option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-sm-4">
                                    <label className=" font-bold">
                                        Especialidad:
                                    </label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="row mt-3">

                                <div className="col-sm-8 offset-sm-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label text-red-500 font-bold" >
                                            No tiene titulo
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-sm-4">
                                    <label className=" font-bold">
                                        Fecha de Expedición del titulo:
                                    </label>
                                </div>
                                <div className="col-sm-4">
                                    <select name="" className='form-control'>
                                        <option value="">ENERO</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                    <select name="" className='form-control'>
                                        <option value="">2017</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-sm-4">
                                    <label className=" font-bold">
                                        Institución:
                                    </label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col-sm-4">
                                    <label className=" font-bold">
                                        Fecha de Expedición del titulo:
                                    </label>
                                </div>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control"  />
                                </div>
                                <div className="col-sm-4">
                                    <select className='form-control'>
                                        <option value="">PERÚ</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-2 offset-sm-7">
                                    <button className="btn btn-danger w-full">Grabar</button>

                                </div>
                                <div className="col-sm-3">
                                    <button className="btn btn-secondary">Cancelar</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>




            <div className="container mt-3">
                <div className="card shadow-2xl" style={{ width: '43rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Experiencia Laboral</h5>
                        <hr />
                        <div className="card-text container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <label className=" font-bold">
                                        Tipo Entidad o Empresa:
                                    </label>
                                </div>
                                <div className="col-sm-8">
                                    <select name="" className='form-control'>
                                        <option value="">- SELECCIONAR - </option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-sm-4 font-bold">
                                Nombre de la Entidad o Empresa:
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-sm-4 font-bold">
                                Cargo Desempeñado:
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col-sm-4 font-bold">
                                Fecha Inicio:
                                </div>
                                <div className="col-sm-4">
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-sm-4">
                                    <label className="text-red-500 font-bold">(dd/mm/yyyy)</label>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col-sm-4 font-bold">
                                Fecha Fin:
                                </div>
                                <div className="col-sm-4">
                                    <input type="date" className="form-control" />
                                </div>
                                <div className="col-sm-4">
                                    <label className="text-red-500 font-bold">(dd/mm/yyyy)</label>
                                </div>
                            </div>

                         
                     
                            <div className="row mt-3">
                                <div className="col-sm-4 font-bold">
                                Descripción del trabajo:
                                </div>
                                <div className="col-sm-8">
                                    <textarea  className="form-control" style={{height:'100px'}} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-8 offset-4">
                                    <label className="text-red-500 font-bold">Maximo 1000 caracteres</label>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col-sm-2 offset-sm-7">
                                    <button className="btn btn-danger w-full">Grabar</button>

                                </div>
                                <div className="col-sm-3">
                                    <button className="btn btn-secondary">Cancelar</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>





            <div className="container mt-3">
                <div className="card shadow-2xl" style={{ width: '43rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Cambio de Clave</h5>
                        <hr />
                        <div className="card-text container">
                       

                            <div className="row mt-3">
                                <div className="col-sm-4 font-bold">
                                DNI:
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-sm-4 font-bold">
                                Actual Clave:
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-sm-4 font-bold">
                                Nueva Clave:
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-sm-4 font-bold">
                                Repetir Nueva Clave:
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>


                         
                     
                    


                            <div className="row mt-3">
                                <div className="col-sm-3 offset-sm-9">
                                    <button className="btn btn-danger ">Cambiar Clave</button>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
