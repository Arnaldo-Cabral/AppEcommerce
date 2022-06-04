import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar =() => {
  return (
    <nav>
       <Link to='/'>
            <h1>Ecommerce</h1>
            </Link>
            <div className="navBar">
                {/* <button className="boton">Inicio</button>
                <button className="boton">Celulares</button>
                <button className="boton">Tablets</button>
                <button className="boton">Notebooks</button>
                <button className="boton">Logearse</button> */}
                <NavLink to='/category/celular'className={({isActive}) => isActive? 'Activeboton' : 'boton'}>Celular</NavLink>
                <NavLink to='/category/notebook'className={({isActive}) => isActive? 'Activeboton' : 'boton'}>Notebook</NavLink>
                <NavLink to='/category/tablet'className={({isActive}) => isActive? 'Activeboton' : 'boton'}>Tablet</NavLink>
                <NavLink to='/about'className={({isActive}) => isActive? 'Activeboton' : 'boton'}>About</NavLink>
                <CartWidget />
            </div>
      
    </nav>
  )
} 

export default NavBar