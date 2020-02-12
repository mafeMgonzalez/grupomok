import React, { Component } from 'react';
class Datos extends Component {

    busquedaDatosref = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        console.long(this.busquedaDatosref.current.value);
    }
    render() {


        return (
            <form onSubmit={this.obtenerDatos}>
                <div className ="row">
                    {this.props.mensaje}
                    <div className="form-group col-md-8" >

                        <div className="nombre">
                            <label htmlFor="Nombre">Registro Nombre</label>
                            <input ref={this.busquedaDatosref} name="Nombre" type=" text"
                                className="form-control form-control-lg" placeholder="Agregar Nombre"
                            />
                        </div>
                        <div className="Apellido">
                            <label htmlFor="Apellido">Registro Apellido</label>
                            <input ref={this.busquedaDatosref} name="Apellido" type="text" className="form-control form-control-lg" placeholder="Agrege Apelldio" />
                        </div>
                        <div className="Edad">
                            <label htmlFor="Edad">Edad</label>
                            <input ref={this.busquedaDatosref} name="edad" type="number" className="form-control form-control-lg" placeholder="@edad" />

                        </div>
                        <div className="Sexo">
                            <label htmlFor="Sexo">Sexo</label>
                            <input ref={this.busquedaDatosref} name="sexo" type="text" className="form-control form-control-lg" placeholder="" />
                        </div>
                        <div className="Correo">
                            <label htmlFor="Correo">Correo</label>
                            <input ref={this.busquedaDatosref} nambe="Correo" type="text" className="form-control form-control-lg" placeholder="correo@m_ail" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="submit" className="btn btn-lg btn-danger btn-block" value="agregar" />
                        </div>
                    </div>

                </div>

            </form>



        );
    }

}
export default Datos;