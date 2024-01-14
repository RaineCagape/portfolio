import '../css/Main.css';
import '../css/works.css';
import React, { Component }  from 'react';
import lps from '../img/lpscannr.png'; 
import ius from '../img/intermed.png'; 
import slp from '../img/lp.png'; 
import wh from '../img/westpointeheights.png'; 


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
                <div className='work'>
                  <a  href="https://rainecagape.github.io/LIPScanner_Live_Map_Pest_Infestation_Web/web/web/" target="_blank">
                    <img className='web-img lps' src={lps} />
                  </a>
                  <a className="works highlight" href="https://rainecagape.github.io/LIPScanner_Live_Map_Pest_Infestation_Web/web/web/" target="_blank">LPS Live Map Test</a>
                </div>
                <div className='work'>
                   <a  href="https://intermed-usa.com/" target="_blank">
                    <img className='web-img lps' src={ius} />
                  </a>
                  <a className="works highlight" href="https://intermed-usa.com/" target="_blank">Intermed Test</a>
                </div>
              </div>
              <div className='second-set'>
                <div className='work'>
                  <a href="https://rainelandpage.x10.mx/" target="_blank">
                    <img className='web-img lp' src={slp} />
                  </a>
                  <a className="works highlight" href="https://rainelandpage.x10.mx/" target="_blank" >Sample Landing Page</a>
                </div>
                <div className='work'>
                   <a  href="https://westpointeheights.com/" target="_blank">
                    <img className='web-img lps' src={wh} />
                  </a>
                  <a className="works highlight" href="https://westpointeheights.com/" target="_blank">Westpointe Heights</a>
                </div>
              </div> 
            </div>  
        </div>
        <div className="col-two-works-mob">
          <div className="works-content-mob" id="works">
             <div className='first-set-mob'>
               <div className='work'>
                 <a  href="https://rainecagape.github.io/LIPScanner_Live_Map_Pest_Infestation_Web/web/web/" target="_blank">
                   <img className='web-img lps' height="100" src={lps} />
                 </a>
                 <a className="works highlight" href="https://rainecagape.github.io/LIPScanner_Live_Map_Pest_Infestation_Web/web/web/" target="_blank">LPS Live Map</a>
               </div>
               <div className='work'>
                  <a  href="https://intermed-usa.com/" target="_blank">
                   <img className='web-img lps' src={ius} />
                 </a>
                 <a className="works highlight" href="https://intermed-usa.com/" target="_blank">Intermed</a>
               </div>
             </div>
             <div className="second-set-mob">
               <div className='work'>
                 <a href="https://rainelandpage.x10.mx/" target="_blank">
                   <img className='web-img lp' src={slp} />
                 </a>
                 <a className="works highlight" href="https://rainelandpage.x10.mx/" target="_blank" >Sample Landing Page</a>
               </div>
               <div className='work'>
                  <a  href="https://westpointeheights.com/" target="_blank">
                   <img className='web-img lps' src={wh} />
                 </a>
                 <a className="works highlight" href="https://westpointeheights.com/" target="_blank">Westpointe Heights</a>
               </div>
            </div>
          </div> 
        </div>
      </div>
      );
    }
  }
    
  export default Works;