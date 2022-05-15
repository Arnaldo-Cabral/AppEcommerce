import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <h1>Ecommerce</h1>
            <div className="navBar">
                <button className="boton">Inicio</button>
                <button className="boton">Celulares</button>
                <button className="boton">Tablets</button>
                <button className="boton">Notebooks</button>
                <button className="boton">Logearse</button>
            </div>
        </nav>
    )
}

export default NavBar