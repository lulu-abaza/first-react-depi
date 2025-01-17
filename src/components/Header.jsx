import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import '../App.css'

class Header extends Component {
  state = {
    count:0
  }
  addtocart(){
return this.setState({count:this.state.count+1})
  }
  removefromcart(){
  return this.setState({ count: this.state.count - 1 });
  }
  disappear() {
   return this.state.count<=0 ? "remove" : "";
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light px-4">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} className="me-2" height="30" width="30" alt="logo" /> Finder
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 p-2">
              <li className="nav-item dropdown px-3">
                <a className="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">Home</a>
              </li>
              <li className="nav-item dropdown px-3">
                <a className="nav-link dropdown-toggle" href="#" id="listingsDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">Listings</a>

              </li>
              <li className="nav-item dropdown px-3">
                <a className="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">Account</a>

              </li>
              <li className="nav-item dropdown px-3">
                <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">Pages</a>

              </li>
              <li className="nav-item  px-3">
                <a className="nav-link" href="#">Docs</a>
              </li>
              <li className="nav-item  px-3">
                <a className="nav-link" href="#">Components</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button className='btn btn-danger' onClick={()=>this.removefromcart()}>-</button>
              <div className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <p className={this.disappear()}>{this.state.count}</p>
              </div>
              <button className='btn btn-success' onClick={()=>this.addtocart()}>+</button>
              <button className="btn btn-light border me-3">
                <span>Ar</span>
              </button>
              <button id="darkModeToggle" className="btn btn-light border me-3">
                <i className="fa-solid fa-moon"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

    )
  }
}

export default Header