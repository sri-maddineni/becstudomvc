import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>

      <footer className="text-center text-lg-start bg-light text-muted">

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>


          <div>

            <a href="https://www.itkonnects.com" target="_blank" className="me-4 text-danger" style={{ textDecoration: " none" }}>
              <i className="fa-brands fa-google me-3 fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/bec_startup/" target="_blank" className="me-4 text-danger" style={{ textDecoration: " none" }}>
              <i className="fa-brands fa-instagram me-3 fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/company/95768956/" target="_blank" className="me-4 text-danger" style={{ textDecoration: " none" }}>
              <i className="fa-brands fa-linkedin me-3 fa-2x"></i>
            </a>

          </div>

        </section>



        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <pre><h6 className="text-uppercase fw-bold mb-4">
                  <i className="fa-solid fa-building"></i> iTKonnects
                </h6></pre>
                <p>
                  A service oriented non-profit organisation to make it easier connecting with technology
                </p>
              </div>


              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fa fa-home me-3"></i> Bapatla, 522102, A.P</p>
                <p>
                  <i className="fa fa-envelope me-3"></i>
                  itkonnects@gmail.com
                </p>
                <p><i className="fa fa-phone me-3"></i> +91 63042 14514</p>

              </div>

            </div>

          </div>
        </section>



        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://www.itkonnects.com/">iTKonnects.com</a>
        </div>

      </footer>

    </>
  )
}
