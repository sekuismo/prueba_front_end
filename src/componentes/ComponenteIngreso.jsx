import React from 'react'

function ComponenteIngreso() {

  (() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  /*
  mt-3 es el padding top 
  */
  return (
    <div>
      <p className="display-1 m-3 " > Ingreso de usuario</p>
      <form className='needs-validation' noValidate >
      
       <div className="row justify-content-md-center mt-3 ">
        
        
        <div className="col-2">
          <label htmlFor="rut" className="   col-form-label " >Rut</label>
        </div>
        <div className="col-auto">
          <input type="text" id="rut" className="form-control "  required aria-describedby="passwordHelpInline"/>
          <div className="valid-feedback">
            Rut válido! 🎅
          </div>
          <div className="invalid-feedback">
            ingrese un rut válido
           </div>
        </div>
        
      </div>

      <div className="row justify-content-md-center mt-3 ">
        
        <div className="col-2">
          <label htmlFor="name" className="   col-form-label">Nombre </label>
        </div>
        <div className="col-auto">
          <input type="text" id="nombre" className="form-control " required  aria-describedby="passwordHelpInline"/>
          <div className="valid-feedback">
            Nombre válido! 🛠
          </div>
          <div className="invalid-feedback">
            Ingrese un nombre 😖
          </div>
        </div>
        
      </div>
      <div className="row justify-content-md-center mt-3 ">
        
        <div className="col-2">
          <label htmlFor="paterno" className="   col-form-label">Apellido Paterno </label>
        </div>
        <div className="col-auto">
          <input type="text" id="paterno" className="form-control " required />
          <div className="invalid-feedback">
            nonono
          </div>
       
         
          
        </div>
        
      </div>
      <div className="row justify-content-md-center mt-3 ">
        
        <div className="col-2">
          <label htmlFor="materno" className=" col-form-label">Apellido Materno </label>
        </div>
        <div className="col-auto">
          <input type="text" id="materno" className="form-control " required />
          <div className="valid-feedback">
            Apellido Válido! 
          </div>
          <div className="invalid-feedback">
            Apellido inválido 😿
          </div>
          
          
       
          
        </div>
        
      </div>

      <div className="row justify-content-md-center mt-3 ">
        
        <div className="col-2">
          <label htmlFor="rol" className="   col-form-label">Rol </label>
        </div>
        <div className="col-auto">
        <select className="form-select" aria-label="Default select example">
               <option >Seleccione cual Rol......</option>
                <option value="1">Uno</option>
                <option value="2">Dos</option>
              <option value="3">Tresssssss</option>
            </select>
        </div>
        
      </div>
      <div className="row justify-content-md-center mt-3 ">
        
        <div className="col-2">
          <label htmlFor="rol" className="   col-form-label">Sucursal </label>
        </div>
        <div className="col-auto">
          <select  className="form-select" aria-label="Default select example" >
            <option defaultValue="">Seleccione la sucursal</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
            <option value="3">Tres</option>
          </select>
        </div>
        
      </div>


















      <div className="row justify-content-md-center mt-3 ">
        
        <div className="col-2">
          <label htmlFor="inputPassword" className="  col-form-label">Contraseña</label>
        </div>
        <div className="col-auto">
          <input type="password" id="inputPassword" className=" form-control  "  required aria-describedby="passwordHelpInline"/>
          <div className="valid-feedback">
            Contraseña válida 🧠
          </div>
          <div className="invalid-feedback">
            Ingrese una contraseña  👮‍♂️
          </div>
        </div>
        
      </div>
      
      <div className="row justify-content-md-center mt-3 ">
        
        <div className="col-2">
          <label htmlFor="confirmpassword" className="  col-form-label">Repita Contraseña</label>
        </div>
        <div className="col-auto">
          <input type="password" id="confirmpassword" className=" form-control  " required aria-describedby="passwordHelpInline"/>
          <div className="valid-feedback">
            Contraseña confirmada! 🆗
          </div>
          <div className="invalid-feedback">
            Re ingrese su contraseña 😡😡😡
          </div>
        </div>
        
      </div>
      <div className="row justify-content-md-center mt-3 ">
        
        <div className="col-auto mt-3 ">
        <button className='btn btn-primary  ' type="submit" >Agregar</button>
        </div>
        
      </div>
      
      </form>
    </div>
  )
}

export default ComponenteIngreso