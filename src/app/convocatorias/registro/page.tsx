import { titlefont } from '@/config/font'
import React from 'react'
import { Montserrat_Alternates } from 'next/font/google';

function page() {
    return (
        <>

            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-sm-10">
                        <div className="card mt-5">

                            <div className="card-body shadow-2xl">

                                <div className="row ">
                                    <div className="col-sm-12">
                                        Registro Postulante
                                    </div>
                                    <div className="col-sm-12">
                                        <p>
                                            hola mundo
                                        </p>
                                        <p className={titlefont.className}>
                                            hola mundo
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <hr />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Nombres</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Direccion (Lugar de Domicilio)</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Apellido Paterno</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Departamento (Lugar de Domicilio)</label>
                                            <select name="" className='form-control'>
                                                <option value="">- SELECCIONAR -</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Apellido Materno</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Provincia (Lugar de Domicilio)</label>
                                            <select name="" className='form-control'>
                                                <option value="">- SELECCIONAR -</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Fecha Nacimiento <label className='text-red-500'>(dd/mm/yyyy)</label></label>
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Distrito (Lugar de Domicilio)</label>
                                            <select name="" className='form-control'>
                                                <option value="">- SELECCIONAR -</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>




                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Departamento (Lugar de Nacimiento)</label>
                                            <select name="" className='form-control'>
                                                <option value="">- SELECCIONAR -</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Correo Electronico</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>





                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Provincia (Lugar de Nacimiento)</label>
                                            <select name="" className='form-control'>
                                                <option value="">- SELECCIONAR -</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Celular</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>




                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Distrito (Lugar de Nacimiento)</label>
                                            <select name="" className='form-control'>
                                                <option value="">- SELECCIONAR -</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Telefono</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>



                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Sexo</label>
                                            <select name="" className='form-control'>
                                                <option value="">Soltero(a)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Colegio Profesional (N° de Colegiatura)</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>





                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">DNI</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Clave</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">RUC</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Repetir Clave</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label className="form-label font-bold">Distrito (Lugar de Nacimiento)</label>
                                            <select name="" className='form-control'>
                                                <option value="">Soltero(a) </option>
                                            </select>
                                        </div>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-sm-3 offset-sm-9">
                                        <button className='btn btn-danger'>Grabar Datos</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page