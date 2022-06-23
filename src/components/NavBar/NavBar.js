import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import Formulario from '../Form/Form'



const NavBar =() => {

  const { getQuantity }=useContext(CartContext)
  const quantity = getQuantity()

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
                <NavLink to='/formulario'className={({isActive}) => isActive? 'Activeboton' : 'boton'}>Formulario</NavLink>
                {quantity > 0 && <CartWidget />}
            </div>
      
    </nav>
  )
} 

export default NavBar