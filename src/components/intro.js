import '../css/Main.css';
import '../css/intro.css';
import React, { Component }  from 'react';

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  
  render() {
    return (
      <div>
      <div className="col-two-intro">
        <div className="intro-content" id="intro">
          <p>Howdy!</p>
          <p>I'm <a className="highlight" >Raine Cagape</a> and I'm a Web Developer.</p>
        </div>  
      </div>  
      <div className="col-two-intro-mob">
        <div className="intro-content-mob" id="intro">
          <p>Howdy!</p>
          <p>I'm <a className="highlight-mob">Raine Cagape</a> and I'm a Web Developer. </p>
        </div>  
      </div> 
    </div>
    );
  }
}
  
export default Intro;


