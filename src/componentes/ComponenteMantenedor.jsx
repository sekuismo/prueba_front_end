import React from 'react'

function ComponenteMantenedor() {
  return (
    <div>
      <p className="display-1 m-3 " > Gestión de usuarios</p>
      <div className="container m-3">
            <div className="row g-3 align-items-center">
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label">Rut</label>
        </div>
        <div className="col-5">
          <input type="text" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
        </div>
        <div className="col-4">
          <span id="passwordHelpInline" className="form-text">
            <button className='btn btn-primary'>🔍 Buscar</button>
          </span>
        </div>
        <div className="col-2">
          <button className='btn btn-danger' >➕ Nuevo usuario</button>
        </div>
      </div>
    </div>
      
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Rut</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido Paterno</th>
      <th scope="col">Apellido Materno</th>
      <th scope="col">Rol</th>
      <th scope="col">Sucursal</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">19.239.872-k</th>
      <td>María</td>
      <td>Jiménez</td>
      <td>Rosales</td>
      <td>Vendedor</td>
      <td>Sucursal 1</td>
    </tr>
    <tr>
    <th scope="row">19.239.872-k</th>
      <td>María</td>
      <td>Jiménez</td>
      <td>Rosales</td>
      <td>Vendedor</td>
      <td>Sucursal 1</td>
    </tr>
    <tr>
    <th scope="row">19.239.872-k</th>
      <td>María</td>
      <td>Jiménez</td>
      <td>Rosales</td>
      <td>Vendedor</td>
      <td>Sucursal 2</td>
    </tr>
  </tbody>
</table>
</div>
    
  )
}

export default ComponenteMantenedor