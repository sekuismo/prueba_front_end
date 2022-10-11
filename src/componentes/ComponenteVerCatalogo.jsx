import React from 'react'
import './vercatalogo.css'
import clavos from '/assets/clavos.jpg'
import electroshock from '/assets/electroshock.jpg'
import miguelitos from '/assets/miguelitos.jpg'
import napoleon from '/assets/napoleon.jpg'
import pasamontanas from '/assets/pasamonta.jpg'
import serrucho from '/assets/serrucho.jpg'
import sirenaFalsa from '/assets/sirena_falsa.jpg'
import wd40 from '/assets/wd40.jpg'
function ComponenteVerCatalogo() {
  return (
    <div>
        <div className="container">
            <br />
            <br />
            <div className="row">
                <div className="col-3">
                    <img src={clavos} alt="" width="200px" height="200px" /> <br />
                    Clavos <br /> $2000
                </div>
                <div className="col-3">
                    <img src={electroshock} alt="" width="200px" height="200px" /> <br />
                    Electroshock  <br />$30.000
                </div>
                <div className="col-3">
                    <img src={miguelitos} alt="" width="200px" height="200px" /> <br />
                    Miguelitos <br /> $5000

                </div>
                <div className="col-3">
                    <img src={napoleon} width="200px" height="200px" alt="" /> <br />
                    Napoleón <br /> $35.000
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-3">
                    <img src={pasamontanas} alt="" width="200px" height="200px" /> <br />
                    Pasamontañas <br /> $10000
                </div>
                <div className="col-3">
                    <img src={serrucho} alt="" width="200px" height="200px" /> <br />
                    serrucho <br /> $10.000
                </div>
                <div className="col-3">
                    <img src={wd40} alt="" width="200px" height="200px" /> <br />
                    WD-40 <br /> $14.990

                </div>
                <div className="col-3">
                    <img src={sirenaFalsa} width="200px" height="200px" alt="" /> <br />
                    Sirena hechiza <br /> $200.000
                </div>
            </div>
        </div>



    </div>
  )
}

export default ComponenteVerCatalogo