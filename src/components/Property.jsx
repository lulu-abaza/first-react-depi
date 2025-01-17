import React, { Component } from 'react'
import img1 from "../assets/01.png"
import img11 from "../assets/download (11).svg"
import img21 from'../assets/02 (1).png'
import img10 from '../assets/download (10).svg'
import img03 from '../assets/03.png'
import img9 from '../assets/download (9).svg'
import "../App.css"

export default class Property extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row g-4 position-relative">
            <div className="col-md-4 text-center">
              <div className="card shadow-sm position-relative border-0">
                <img src={img1} className="card-img-top position-absolute" alt="Property Image"/>
                  <div className="card-body position-absolute">
                    <img src={img11} className="d-inline-block align-text-top me-2 h-25" alt=""/>
                      <h6 className="card-title fw-bold text-center p-2">Buy a property</h6>
                      <a href="#" className="btn btn-primary p-2">Find a home</a>
                  </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div id="gray" className="card  shadow-sm position-relative border-0">
                <img src={img21} className="card-img-top position-absolute" alt="Property Image"/>
                  <div className="card-body position-absolute">
                    <img src={img10} className="d-inline-block align-text-top me-2 h-25" alt=""/>
                      <h6 className="card-title fw-bold text-center p-2">Sell a property</h6>
                      <a href="#" className="btn btn-primary p-2">Place an ad</a>
                  </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card shadow-sm position-relative  border-0">
                <img src={img03} className="card-img-top position-absolute" alt="Property Image"/>
                  <div className="card-body position-absolute">
                    <img src={img9} className="d-inline-block align-text-top me-2 h-25" alt=""/>
                      <h6 className="card-title fw-bold text-center p-2">Rent a property</h6>
                      <a href="#" className="btn btn-primary p-2">Find a rental</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
