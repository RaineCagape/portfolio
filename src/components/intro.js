import '../css/Main.css';
import '../css/intro.css';
import img from '../img/intro-bg.jpg';
import React, {Component } from 'react';
import * as Reactbootstrap from 'react-bootstrap';


class Intro extends Component {

  constructor() {
    super();
    
    this.state = {
      name: "React"
    };  

 }  

  render() {
      return (
          <Reactbootstrap.Container fluid style={{ height: "100vh",overflow: "auto"  }} className="transition-container p-0 m-0 d-flex justify-content-center align-items-center position-relative">
              <Reactbootstrap.Image id="intro-background" src={img}
                style={{height: "100vh", width: "100%"}} className="opacity-50 position-fixed z-0"/>
                <Reactbootstrap.Container className="px-5 py-2 position-absolute top-50 start-50 translate-middle">
                   <p style={{ fontSize: "450%" }} className="text-light fw-medium">
                   Howdy!<br></br>
                      I'm <a id="name-intro" className="highlight fw-medium">Raine Cagape</a> and I'm a Web Developer.
                  </p>
                </Reactbootstrap.Container>
         </Reactbootstrap.Container >
    );
  }

}

export default Intro;


