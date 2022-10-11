import React from 'react'

function ComponenteIniciarSesion() {
  return (
    <div>
        
        <p className="display-1 m-3 " > Ingrese su usuario</p>
      <form className='needs-validation'  >
      
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
          <label htmlFor="rut" className="   col-form-label " >Contraseña</label>
        </div>
        <div className="col-auto">
          <input type="password" id="rut" className="form-control "  required aria-describedby="passwordHelpInline"/>
          <div className="valid-feedback">
            Rut válido! 🎅
          </div>
          <div className="invalid-feedback">
            ingrese un rut válido
           </div>
        </div>
        
      </div>
      <br />
      <div className="col-auto mt-3 ">
        <button className='btn btn-primary  ' type="submit" >Agregar</button>
        </div>
        </form>

    </div>
  )
}

export default ComponenteIniciarSesion