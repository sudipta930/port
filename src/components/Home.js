import React from 'react'
import Logo from './assets/copy.jpeg'
import './Home.css'

export default function Home() {
  return (
    <div className="main-section col-13">
          <div className="d-flex flex-wrap container col-8">
              <div className="pt-5 col-lg-7 col-12 d-lg-none text-center">
                  <img src={Logo} alt="sUDIPTA sAMAL" width="100%" height="100%" />
              </div>
              <div className="my-5 col-lg-6 col-10 d-lg-block d-none text-center">
                  <img src={Logo} alt="Sudipta Samal" width="80%" height="80%" />
              </div>
              <div className="col-lg-6 mt-5 text-center pt-5">
                  {/* <h3>Welcome</h3> */}
                  <h1>I'm <br />
                  <marquee behavior="alternate" direction="left">
                    <span style={{fontsize: 72,color: `#0000ff`}}>Sudipta<br /> Samal</span>
                  </marquee></h1>
                  <p className="pt-3 title">Web Developer, Programmer <br /> UI/UX Designer</p>
                  <div className="nav-icon py-3">
                      <a href="https://www.linkedin.com/in/sudipta-samal-11b117219/" target="_blank" rel="noreferrer" className="text-white p-2">
                          <i className="fab fa-linkedin"></i></a>
                      <a href="https://www.facebook.com/sudipta.samal.520?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="text-white p-2 ml-3">
                          <i className="fab fa-facebook"></i></a>
                      <a href="https://www.instagram.com/sudipta_rani/" target="_blank" rel="noreferrer" className="text-white p-2 ml-3">
                          <i className="fab fa-instagram"></i></a>
                      <a href="https://github.com/sudipta930" target="_blank" rel="noreferrer" className="text-white w-5 p-2 ml-3">
                          <i className="fab fa-github"></i></a>
                  </div>
              </div>
            </div>
        </div>
  )
}
