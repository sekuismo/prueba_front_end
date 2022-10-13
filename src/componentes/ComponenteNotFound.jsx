import React from 'react'
import comp404 from '/assets/404.jpg'

function ComponenteNotFound() {
  return (
    <div>
      <p className="display-1 m-3 " >Aquí no hay nada </p>
      <a href="/"> volver al inicio</a> <br />
        <img src={comp404} alt="" /> 
        
    </div>
  )
}

export default ComponenteNotFound