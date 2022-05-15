import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar =() => {
  return (
    <nav>
      <h1>Ecommerce</h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Inicio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Celulares</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Tablets</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Notebooks</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Logearse</a>
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