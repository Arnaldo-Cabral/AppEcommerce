import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar =() => {
  return (
    <nav>
      <h1>Ecommerce</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Inicio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Celulares</a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Tablets</a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Notebooks</a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Logearse</a>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </nav>
  )
} 

export default NavBar