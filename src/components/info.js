import '../css/Main.css';
import img from '../img/rec.jpg';
import carve_logo from '../img/carve_logo.jpg'; 
import React, {Component }  from 'react';
import * as Reactbootstrap from 'react-bootstrap';

class Info extends Component {

  constructor() {
    super();
    this.state = {
      name: "React"
      };
    this.isMobile = window.innerWidth <= 767 ? true : false;
  }

  render() {
    return  ( 
      <Reactbootstrap.Container fluid style={{ height: "100vh",overflow: "auto"  }} className=" info-con transition-container p-3 m-0 position-relative">
            <Reactbootstrap.Row id="summary" className="d-flex justify-content-center align-items-center">
                <Reactbootstrap.Col sm={3} md={6} lg={2} className="d-flex justify-content-center align-items-center position-relative">
                    <Reactbootstrap.Image className="img-thumbnail border-0 bg-transparent " src={img} style={{ height: this.isMobile ? "160px" : "100%" }} roundedCircle />
                    <Reactbootstrap.Image className="img-thumbnail border-0 bg-transparent web-link position-absolute" src="https://avatars.githubusercontent.com/u/31531825?v=4" style={{ height: this.isMobile ? "160px" : "100%" }} roundedCircle />
                </Reactbootstrap.Col>
                <Reactbootstrap.Col sm={12} md={12} lg={10} className="p-3 " >
                    <h1 id="name-title" className="highlight fw-medium mob-center-align mb-3 web-img-hover" style={{ fontSize: "370%" }}>Reyna Elaine G. Cagape</h1>
                    <h6 className="fw-light text-white mob-center-align"> Born and raised in Davao. Spent mostly of my time on building website applications by utilizing CMS platforms or through Hand coding.</h6>
                </Reactbootstrap.Col>
            </Reactbootstrap.Row>
            <Reactbootstrap.Row id="education-experience" >
                <Reactbootstrap.Col sm={12} md={12} lg={2} className="d-flex justify-content-center align-items-center">
                </Reactbootstrap.Col >
                <Reactbootstrap.Col sm={12} md={12} lg={10} className="p-0">
                    <Reactbootstrap.Container  className="p-3">
                        <h4 className="highlight fw-bold mob-center-align mb-1" >Education:</h4>
                        <Reactbootstrap.Container className="p-0 d-flex  flex-column flex-sm-row justify-content-between">
                            <Reactbootstrap.Container className="d-flex flex-column flex-sm-row p-0 m-0">
                                <Reactbootstrap.Image src="https://www.usep.edu.ph/wp-content/themes/usep-website/favicon.ico" className='usep-logo my-1 mx-2'/>
                                <Reactbootstrap.Container className='m-0 p-0 h-auto'>
                                    <h5 className="fw-semibold text-white mob-center-align pixel-plain-shadow"> University of Southeastern Philippines</h5>
                                    <h6 className="fw-light text-white mob-center-align"> Bachelor of Science in Information Technology | September 2020</h6>
                                </Reactbootstrap.Container>
                            </Reactbootstrap.Container>
                        </Reactbootstrap.Container>
                    </Reactbootstrap.Container>
                    <Reactbootstrap.Container className="p-3">
                        <h4 className="highlight fw-bold mob-center-align mb-1 " >Experience:</h4>

                        <Reactbootstrap.Container className="worklist my-3 p-0">
                                <Reactbootstrap.Container className="p-0 d-flex flex-sm-row flex-column justify-content-between">
                                    <Reactbootstrap.Container className="d-flex flex-column flex-sm-row p-0 m-0">
                                        
                                    <Reactbootstrap.Image src="https://cdn3.emoji.gg/emojis/4297-pepe-hacker.gif"className='fl-logo my-1 mx-2'/>
                                    <Reactbootstrap.Container className='m-0 p-0 h-auto'>
                                    <h5 className="fw-semibold text-white mob-center-align pixel-plain-shadow">Freelancer</h5>
                                         <h6 className="fw-light text-white mob-center-align">Web Developer (CMS/CRM/SaaS) | December 2024 - Ongoing</h6>
                                    </Reactbootstrap.Container>
                                </Reactbootstrap.Container>
                            </Reactbootstrap.Container>
                        </Reactbootstrap.Container>

                        <Reactbootstrap.Container className="worklist my-3 p-0">
                                <Reactbootstrap.Container className="p-0 d-flex flex-sm-row flex-column justify-content-between">
                                    <Reactbootstrap.Container className="d-flex flex-column flex-sm-row p-0 m-0">
                                    <Reactbootstrap.Image src="https://ipassprocessing.com/wp-content/uploads/2024/04/IPASS_Logo_-150x150.png" className='usep-logo my-1 mx-2'/>
                                    <Reactbootstrap.Container className='m-0 p-0 h-auto'>
                                    <h5 className="fw-semibold text-white mob-center-align pixel-plain-shadow">IPASS Business Processing Services</h5>
                                         <h6 className="fw-light text-white mob-center-align">Web Developer | February 2022 - September 2024</h6>
                                    </Reactbootstrap.Container>
                                </Reactbootstrap.Container>
                            </Reactbootstrap.Container>
                        </Reactbootstrap.Container>
                        
                        <Reactbootstrap.Container className="worklist my-3 p-0">
                            <Reactbootstrap.Container className="p-0 d-flex flex-sm-row flex-column justify-content-between">
                                <Reactbootstrap.Container className="p-0 d-flex flex-sm-row flex-column justify-content-between">
                                    <Reactbootstrap.Container className="d-flex flex-column flex-sm-row p-0 m-0">
                                    <Reactbootstrap.Image src={carve_logo} className='usep-logo my-1 mx-2'/>
                                    <Reactbootstrap.Container className='m-0 p-0 h-auto'>
                                    <h5 className="fw-semibold text-white mob-center-align pixel-plain-shadow">Carve Business Management Services</h5>
                                         <h6 className="fw-light text-white mob-center-align">Junior Web Developer | January 2021 - January 2022</h6>
                                    </Reactbootstrap.Container>
                                </Reactbootstrap.Container>
                            </Reactbootstrap.Container>
                        </Reactbootstrap.Container>
                    </Reactbootstrap.Container>

                     </Reactbootstrap.Container>
                </Reactbootstrap.Col>
            </Reactbootstrap.Row>
      </Reactbootstrap.Container >
    );
  }
}
  
export default Info;