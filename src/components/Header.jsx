import React from 'react'

const Header = (props) => (
  <header>
      <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <img className="img-responsive logo-academy" src="/public/img/logo.png" />
                  <div className="intro-text">
                      <span className="name">{props.title}</span>
                      <hr className="star-light" />
                      <span className="skills">Books to help you unleash the power of JavaScript and the ReactJS ecosystem</span>
                  </div>
              </div>
          </div>
      </div>
  </header>
)

export default Header
