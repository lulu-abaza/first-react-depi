import React, { Component } from 'react'
import arrow from '../assets/arrowdown.svg'

  class Categories extends Component {
    render() {
      return (
        <section className="p-5 mt-5 mb-3">
          <div className="container p-5" id="CategoriesCont">
            <div className="row g-4 text-center categories">
              <div className="rowCont col-md-4 col-lg-2">
                <h5 className="fw-bold">Houses</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fa-regular fa-bookmark me-2"></i>
                  <p className="mb-0">6.4K offers</p>
                </div>

              </div>
              <div className="rowCont col-md-4 col-lg-2">
                <h5 className="fw-bold">Apartments</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fa-regular fa-bookmark me-2"></i>
                  <p className="mb-0">12.8K offers</p>
                </div>
              </div>
              <div className="rowCont col-md-4 col-lg-2">
                <h5 className="fw-bold">Commercial</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fa-regular fa-bookmark me-2"></i>
                  <p className="mb-0">9.3K offers</p>
                </div>

              </div>
              <div className="rowCont col-md-4 col-lg-2">
                <h5 className="fw-bold">Daily rental</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fa-regular fa-bookmark me-2"></i>
                  <p className="mb-0">42.4K offers</p>
                </div>

              </div>
              <div className="rowCont col-md-4 col-lg-2">
                <h5 className="fw-bold">New buildings</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fa-regular fa-bookmark me-2"></i>
                  <p className="mb-0">22.5K offers</p>
                </div>

              </div>
              <div className="col-md-4 col-lg-2">
                <h5 className="fw-bold">More</h5>
                <img src={arrow} alt=" downarrow" />
              </div>
            </div>
          </div>
        </section>

      )
    }
  }

export default Categories