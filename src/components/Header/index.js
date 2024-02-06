// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  console.log(props)
  return (
    <div>
      <nav className="header-nav-container">
        <div>
          <img
            className="header-img1"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
        </div>
        <div className="header-display">
          <img
            className="logout-img"
            alt="nav logout"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          />
        </div>
        <ul className="header-con1">
          <Link to="/" className="text">
            <li className="header-p1">Home</li>
          </Link>
          <Link className="text" to="/products">
            <li className="header-p1">Products</li>
          </Link>
          <Link className="text" to="/cart">
            <li className="header-p1">Cart</li>
          </Link>
          <button className="header-btn" type="button">
            Logout
          </button>
        </ul>
      </nav>
      <div className="nav-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-img"
        />
      </div>
    </div>
  )
}

export default Header
