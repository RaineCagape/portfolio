import '../css/Main.css';
import '../css/info.css';
import img from '../img/rec.jpg';
import img1 from '../img/black.png';  
import React, { Component }  from 'react';

class Info extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  
  render() {
    return  ( 
      <div>
        <div className="col-two-info">
          <div className="info-content" id="info">
            <div className='first-sec'>
              <img className='image' src={img} alt="Logo" style={{width: 200, height: 200, borderRadius: 200/ 2}} />
              <div className='sub-div'>
                <p className='title'>Reyna Elaine G. Cagape</p>
                <p className='info-intro'>Born and raised in <span title="Purok 10, Talisay St. Barangay 76-A Bucana" > Davao</span>. I'm into building websites by utilizing CMS platforms or Hand coding. Even tries digital graphics on my personal projects.</p>
              </div>
            </div>
            <div className='second-sec'>
            <img className='image'  src={img1} style={{width: 200, height: 200, borderRadius: 200/ 2}} />
              <div className='sub-div'>
                <div className='details-div'>
                  <a className="info highlight">Experience:</a>
                  <div className='details-div'>
                    <p className='info-desc'><b className='detail-title'>Carve Business Management Service</b><br/><i>Junior Web Developer I </i>• Jan 2022 - Jan 2021  </p>
                    <br/> 
                  </div>
                </div>
                <div className='details-div'>
                  <a className="info highlight">Education:</a>
                  <div className='details-div'>
                    <p className='info-desc'><b className='detail-title'>University of Southeastern Philippines</b><br/><i>Bachelor of Science in Information Technology </i>• Sep 2020  </p>
                    <br/>  
                    <p className='info-desc'>You can reach me via email @ <a className="link" href="mailto:rainecagape@gmail.com" >rainecagape@gmail.com</a> or mobile no. <a className="link" href="telno:09460101390">09460101390</a>. </p>
                  </div>
                </div>  
                </div>
            </div>
          </div>
        </div>
        <div className="col-two-info-mob">
          <div className="info-content-mob" id="info">
            <div className='first-sec-info-mob'>
              <img className='image-info-mob' src={img} alt="Logo" style={{width: 200, height: 200, borderRadius: 200/ 2}} />
              <div className='sub-div-mob'>
                <p className='title-mob'>Reyna Elaine G. Cagape</p>
                <p className='info-intro-mob'>Born and raised in <span title="Purok 10, Talisay St. Barangay 76-A Bucana" > Davao</span>. I'm into building websites by utilizing CMS platforms or Hand coding. Even tries digital graphics on my personal projects.</p>
              </div>
            </div>
            <div className='second-sec-mob'>
            {/* <img className='image-info-mob'  src={img1} style={{width: 200, height: 200, borderRadius: 200/ 2}} /> */}
              <div className='sub-div-mob'>
                <div className='details-div-mob'>
                  <a className="info-mob highlight-mob">Experience:</a>
                  <div className='details-div-mob'>
                    <p className='info-desc-mob'><b className='detail-title-mob'>Carve Business Management Service</b><br/><i>Junior Web Developer I </i>• Jan 2022 - Jan 2021  </p>
                    <br/> 
                  </div>
                </div>
                <div className='details-div-mob'>
                  <a className="info-mob highlight-mob">Education:</a>
                  <div className='details-div-mob'>
                    <p className='info-desc-mob'><b className='detail-title-mob'>University of Southeastern Philippines</b><br/><i>Bachelor of Science in Information Technology </i>• Sep 2020  </p>
                    <br/>  
                    <p className='info-contact-mob'>You can reach me via email @ <a className="link" href="mailto:rainecagape@gmail.com" >rainecagape@gmail.com</a> or mobile no. <a className="link" href="telno:09460101390">09460101390</a>. </p>
                  </div>
                </div>  
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Info;