import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar =() => {
  return (
    <nav className="nav">
       <Link to='/'>
            <h1>Tu Ecommerce</h1>
            </Link>
            <div className="navBar">
                <NavLink to='/category/celular'className={({isActive}) => isActive? 'Activeboton' : 'boton'}>Celular</NavLink>
                <NavLink to='/category/notebook'className={({isActive}) => isActive? 'Activeboton' : 'boton'}>Notebook</NavLink>
                <NavLink to='/category/tablet'className={({isActive}) => isActive? 'Activeboton' : 'boton'}>Tablet</NavLink>
                <NavLink to='/category/consola'className={({isActive}) => isActive? 'Activeboton' : 'boton'}>Consola</NavLink>
                <CartWidget />
            </div>
      
    </nav>
  )
} 

export default NavBar