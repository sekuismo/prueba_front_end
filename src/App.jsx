import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import './App.css'
import banner from '../assets/banner.png'
import ComponenteIngreso from './componentes/ComponenteIngreso'
import ComponenteNotFound from './componentes/ComponenteNotFound'
import ComponenteMantenedor from './componentes/ComponenteMantenedor'
import ComponenteProducto from './componentes/ComponenteProducto'
import ComponenteGestion from './componentes/ComponenteGestion'


function App() {
  

  return (
    <BrowserRouter> 
    <div className="App">
      <img src={banner} alt="" width="100%" height="100%" />
      <nav className="navbar navbar-expand-lg  bg-light">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          
        </li>
   
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de Usuarios
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="usuario">Mantenedor usuarios</a></li>
            <li><a className="dropdown-item" href="ingreso">Ingreso usuario</a></li>
            
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav">
        
   
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de productos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="ingreso-productos">Ingreso de Productos</a></li>
            <li><a className="dropdown-item" href="gestion-productos">Gestión de productos</a></li>
            
          </ul>
        </li>
      </ul>
      <ul className="navbar-nav">
        
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Gestión de Ventas</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


      <Routes>
        <Route path='/ingreso' element={<ComponenteIngreso/>} ></Route>
        <Route path='/usuario' element={<ComponenteMantenedor/>}  ></Route>
        <Route path='/ingreso-productos' element={<ComponenteProducto/>}  > </Route>
        <Route path='/gestion-productos' element={<ComponenteGestion/> }></Route>
        <Route path ="*" element={<ComponenteNotFound/>}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>

  )
}

export default App
