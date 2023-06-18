import React from 'react'
import './Education.css'

export default function Education() {
  return (
    <section className="education text-white py-5" id='education'>
          <div className='container colo-13'>
            <h1>Education</h1>
            <ul className='pt-5'>
              <li className='d-flex col-12'>
                <div className='col-6 ml-auto'>
                  <h4>Board Of Secondary Education,Odisha</h4>Matric <br />74.16%
                </div>
                <div className='col-5'>
                  <h5>2017</h5>
                </div>
              </li>
              <li className='d-flex col-12 pt-3'>
                <div className='col-6 ml-auto'>
                  <h4>Counsil of Higher Education,Odisha</h4>Intermediate<br />78.5%
                </div>
                <div className='col-5'>
                  <h5>2019</h5>
                </div>
              </li>
              <li className='d-flex col-12 pt-3'>
                <div className='col-6 ml-auto'>
                  <h4>Gurugram University</h4>Bca <br />73.6%
                </div>
                <div className='col-5'>
                  <h5>2022</h5>
                </div>
              </li>
              <li className='d-flex col-12 pt-3'>
                <div className='col-6 ml-auto'>
                  <h4>GD Goenka University</h4>Mca <br />-
                </div>
                <div className='col-5'>
                  <h5>2022-present</h5>
                </div>
              </li>
            </ul>
          </div>
    </section>
  )
}
