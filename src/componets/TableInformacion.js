import React, { Component } from 'react';

class TableInformacion extends Component {

  render() {

    return (


      <table class="talbe table-hover">
        <div className="form-group col-md-8" >
        <thead>
          <tr>
            <th scope="col">id_persona</th>
            <th scope="col">nombre</th>
            <th scope="col">apellido</th>
            <th scope="col">edad</th>
            <th scope="col">sexo</th>
            <th scope="col">correo</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <th scope="row">1</th>
            <td>mmmmm</td>
            <td>Thornton</td>
            <td>12</td>
            <td>m</td>
            <td>@fat</td>
          </tr>


        </tbody>
    
        </div>
        </table>

    )
  }


}
export default TableInformacion;