import '../css/Main.css';
import '../css/skills.css';
import React, { Component }  from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  
  render() {
    return  (
      <div>
        <div className="col-two-skills">
          <div className="skills-content" id="info">
          <div className='first-set-skills'>
              <p className='main-title'>Languages: </p>
              <div className='detail-div'>
                <b className='skill-title'>PHP</b>
                <ProgressBar className="bars first"  now={70} label={`70%`}  />
              </div> 
              <div className='detail-div'>
                <b className='skill-title'>HTML & CSS</b>
                <ProgressBar className="bars second"  now={80} label={`80%`}/>
              </div>
              <div className='detail-div'>
                <b className='skill-title'>JavaScript</b>
                <ProgressBar className="bars third"  now={50} label={`50%`}/>
              </div>
              <div className='detail-div'>
                <b className='skill-title'>React JS</b>
                <ProgressBar className="bars fourth" now={35} label={`35%`}/>
              </div>
              <div className='detail-div'>
                <b className='skill-title'>Python</b>
                <ProgressBar className="bars fifth" now={20} label={`20%`}/>
              </div>
            </div>
            <div className='second-set-skills'>
              <p className='main-title'>CMS Platforms:</p>
              <div className='detail-div'>
                <b className='skill-title'>Wordpress</b>
                <ProgressBar className="bars sixth"  now={85} label={`85%`}  />
              </div> 
              <div className='detail-div'>
                <b className='skill-title'>Woocommerce</b>
                <ProgressBar className="bars seventh"  now={50} label={`50%`}/>
              </div>
              <div className='detail-div'>
                <b className='skill-title'>Webflow</b>
                <ProgressBar className="bars eight"  now={70} label={`70%`}/>
              </div>
              <div className='detail-div'>
                <b className='skill-title'>Shopify</b>
                <ProgressBar className="bars ninth" now={20} label={`20%`}/>
              </div>
              <div className='detail-div'>
                <b className='skill-title'>Wix</b>
                <ProgressBar className="bars tenth" now={80} label={`80%`}/>
              </div>
            </div>
          </div> 
        </div>
        <div className="col-two-skills-mob">
          <div className="skills-content-mob" id="info">
          <div className='first-set-skills-mob'>
              <p className='main-title-mob'>Languages: </p>
              <div className='detail-div-mob'>
                <b className='skill-title-mob'>PHP</b>
                <ProgressBar className="bars first"  now={70} label={`70%`}  />
              </div> 
              <div className='detail-div-mob'>
                <b className='skill-title-mob'>HTML & CSS</b>
                <ProgressBar className="bars second"  now={80} label={`80%`}/>
              </div>
              <div className='detail-div-mob'>
                <b className='skill-title-mob'>JavaScript</b>
                <ProgressBar className="bars third"  now={50} label={`50%`}/>
              </div>
              <div className='detail-div-mob'>
                <b className='skill-title-mob'>React JS</b>
                <ProgressBar className="bars fourth" now={35} label={`35%`}/>
              </div>
              <div className='detail-div-mob'>
                <b className='skill-title-mob'>Python</b>
                <ProgressBar className="bars fifth" now={20} label={`20%`}/>
              </div>
            </div>
            <div className='second-set-skills-mob'>
              <p className='main-title-mob'>CMS Platforms:</p>
              <div className='detail-div-mob'>
                <b className='skill-title-mob'>Wordpress</b>
                <ProgressBar className="bars sixth"  now={85} label={`85%`}  />
              </div> 
              <div className='detail-div-mob'>
                <b className='skill-title-mob'>Woocommerce</b>
                <ProgressBar className="bars seventh"  now={50} label={`50%`}/>
              </div>
              <div className='detail-div-mob'>
                <b className='skill-title-mob'>Webflow</b>
                <ProgressBar className="bars eight"  now={70} label={`70%`}/>
              </div>
              <div className='detail-div-mob'>
                <b className='skill-title-mob'>Shopify</b>
                <ProgressBar className="bars ninth" now={20} label={`20%`}/>
              </div>
              <div className='detail-div-mob'>
                <b className='skill-title-mob'>Wix</b>
                <ProgressBar className="bars tenth" now={80} label={`80%`}/>
              </div>
            </div>
          </div> 
        </div>   
      </div>
    );
  }
}
  
export default Skills;