import React from 'react'

function ComponenteGestion() {
  return (
    <div>
       <p className="display-1 m-3 " > Gestión de productos</p>
      <div className="container m-3">
            <div className="row g-3 align-items-center">
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label">Código producto</label>
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
          <button className='btn btn-danger' >➕ Nuevo Producto</button>
        </div>
      </div>
    </div>
      
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Código</th>
      <th scope="col">Nombre  producto</th>
      <th scope="col">Marca</th>
      <th scope="col">Stock</th>
      <th scope="col">Precio unitario</th>
      <th scope="col">Ubicación</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">00054</th>
      <td>Clavo corriente 4" 1kg</td>
      <td>inchalam</td>
      <td>56</td>
      <td>$2500</td>
      <td>sucursal 1</td>
    </tr>
    <tr>
    <th scope="row">00054</th>
      <td>Clavo corriente 4" 1kg</td>
      <td>inchalam</td>
      <td>56</td>
      <td>$2500</td>
      <td>sucursal 1</td>
    </tr>
    <tr>
    <th scope="row">00054</th>
      <td>Clavo corriente 4" 1kg</td>
      <td>inchalam</td>
      <td>56</td>
      <td>$2500</td>
      <td>sucursal 1</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default ComponenteGestion