import '../css/Main.css';
import '../css/works.css';
import React, { Component }  from 'react';
import lps from '../img/lpscannr.png'; 
import slp from '../img/lp.png'; 


class Works extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
    
    render() {
      return  (
        <div>
        <div className="col-two-works">
            <div className="works-content" id="works">
            <div className='first-set'>
              <a  href="https://rainecagape.github.io/LIPScanner_Live_Map_Pest_Infestation_Web/web/web/" target="_blank">
                <img className='web-img lps' src={lps} />
              </a>
              <a className="works highlight" href="https://rainecagape.github.io/LIPScanner_Live_Map_Pest_Infestation_Web/web/web/" target="_blank">LPS Live Map</a>
              </div>
              <div className='second-set'>
              <a href="https://rainelandpage.x10.mx/" target="_blank">
                <img className='web-img lp' src={slp} />
              </a>
              <a className="works highlight" href="https://rainelandpage.x10.mx/" target="_blank" >Sample Landing Page</a>
              </div>
            </div> 
        </div>  
        <div className="col-two-works-mob">
          <div className="works-content-mob" id="works">
            <div className='first-set-mob'>
              <a  href="https://rainecagape.github.io/LIPScanner_Live_Map_Pest_Infestation_Web/web/web/" target="_blank">
                <img className='web-img-mob lps-mob' src={lps} />
              </a>
              <a className="works-mob highlight-mob" href="https://rainecagape.github.io/LIPScanner_Live_Map_Pest_Infestation_Web/web/web/" target="_blank">LPS Live Map</a>
              </div>
              <div className="second-set-mob">
              <a href="https://rainelandpage.x10.mx/" target="_blank">
                <img className='web-img-mob lp-mob' src={slp} />
              </a>
              <a className="works-mob highlight-mob" href="https://rainelandpage.x10.mx/" target="_blank" >Sample Landing Page</a>
            </div>
          </div> 
        </div>  
    </div>
      );
    }
  }
    
  export default Works;