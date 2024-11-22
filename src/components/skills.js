import '../css/Main.css';
import * as Reactbootstrap from 'react-bootstrap';
import React, { Component } from 'react';


class Skills extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
      };
      this.isMobile = window.innerWidth <= 767 ? true : false;
  }
  
  render() {
      return (
          <Reactbootstrap.Container fluid style={{ height: "100vh", overflow: "auto" }} className="transition-container p-3 m-0 position-relative">
              <Reactbootstrap.Row xs={1} md={2} lg={2} className="p-3">

                  <Reactbootstrap.Col id="Languages" className="skill-set mt-2 mb-5 px-4">
                      <h4 className="highlight fw-bold mob-center-align mb-2 text-pixel" >Languages:</h4>
                      <Reactbootstrap.Container id="PHP" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">PHP</h6>
                          <Reactbootstrap.ProgressBar className="fw-medium" label={`80%`} style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated className="fw-semibold" now={70} label={`60%`} style={{backgroundColor: "#787cb5" }} />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>
                      <Reactbootstrap.Container id="HTML & CSS" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">HTML & CSS</h6>
                          <Reactbootstrap.ProgressBar style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated now={40} style={{ backgroundColor: "#e34f26" }} key={1} />
                              <p className="fw-semibold text-white z-3" style={{ margin: (this.isMobile ? "7px -10px" : "5px -25px")}} >80%</p>
                              <Reactbootstrap.ProgressBar animated now={40} style={{ backgroundColor: "#214ce5"}} key={2}  />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>
                      <Reactbootstrap.Container id="JavaScript" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">JavaScript</h6>
                          <Reactbootstrap.ProgressBar className="fw-medium " label={`80%`} style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated className="fw-semibold text-dark" now={70} label={`60%`} style={{ backgroundColor: "#f7df1e" }} />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>
                      <Reactbootstrap.Container id="Python" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">Python</h6>
                          <Reactbootstrap.ProgressBar style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated now={10} style={{ backgroundColor: "#ffde57" }} key={1} />
                              <p className="fw-semibold text-dark z-3" style={{ margin: (this.isMobile ? "7px -10px" : "5px -25px")}} >15%</p>
                              <Reactbootstrap.ProgressBar animated now={5} style={{ backgroundColor: "#4584b6" }} key={2}  />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>

                      <Reactbootstrap.Col id="Libraries&Frameworks" className="skill-set mt-5 ">
                          <h4 className="highlight fw-bold mob-center-align mb-2 text-pixel" >Libraries & Frameworks:</h4>
                          <Reactbootstrap.Container id="JQuery_JQueryUI" className="my-3 p-0">
                              <h6 className="fw-medium text-white mb-1">JQuery & JQueryUI</h6>
                              <Reactbootstrap.ProgressBar style={{ height: "25px" }}>
                                  <Reactbootstrap.ProgressBar animated now={15} style={{ backgroundColor: "#71c9ed" }} key={1} />
                                  <p className="fw-semibold text-dark z-3" style={{ margin: (this.isMobile ? "7px -10px" : "5px -25px") }} >30%</p>
                                  <Reactbootstrap.ProgressBar animated now={15} style={{ backgroundColor: "#faa624" }} key={2} />
                              </Reactbootstrap.ProgressBar>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.Container id="ReactJS" className="my-3 p-0">
                              <h6 className="fw-medium text-white mb-1">React JS</h6>
                              <Reactbootstrap.ProgressBar className="fw-medium "  style={{ height: "25px" }}>
                                  <Reactbootstrap.ProgressBar animated className="fw-semibold text-black" now={30} label={`30%`} style={{ backgroundColor: "#00d8ff" }} />
                              </Reactbootstrap.ProgressBar>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.Container id="NextJS" className="my-3 p-0">
                              <h6 className="fw-medium text-white mb-1">Next JS</h6>
                              <Reactbootstrap.ProgressBar className="fw-medium " style={{ height: "25px" }}>
                                  <Reactbootstrap.ProgressBar animated className="fw-semibold text-white" now={30} label={`30%`} style={{ backgroundColor: "#000000" }} />
                              </Reactbootstrap.ProgressBar>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.Container id="BootStrap" className="my-3 p-0">
                              <h6 className="fw-medium text-white mb-1">Bootstrap</h6>
                              <Reactbootstrap.ProgressBar className="fw-medium " style={{ height: "25px" }}>
                                  <Reactbootstrap.ProgressBar animated className="fw-semibold text-white" now={75} label={`75%`} style={{ backgroundColor: "#6f2cf5" }} />
                              </Reactbootstrap.ProgressBar>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.Container id="ReactBootstrap" className="my-3 p-0">
                              <h6 className="fw-medium text-white mb-1">React Bootstrap</h6>
                              <Reactbootstrap.ProgressBar style={{ height: "25px" }}>
                                  <Reactbootstrap.ProgressBar animated now={30} style={{ backgroundColor: "#00d8ff" }} key={1} />
                                  <p className="fw-semibold text-black z-3" style={{ margin: (this.isMobile ? "7px -10px" : "5px -25px") }} >60%</p>
                                  <Reactbootstrap.ProgressBar animated now={30} style={{ backgroundColor: "#6f2cf5" }} key={2} />
                              </Reactbootstrap.ProgressBar>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.Container id="Tailwind CSS" className="my-3 p-0">
                              <h6 className="fw-medium text-white mb-1">Tailwind CSS</h6>
                              <Reactbootstrap.ProgressBar className="fw-medium " style={{ height: "25px" }}>
                                  <Reactbootstrap.ProgressBar animated className="fw-semibold text-white" now={20} label={`20%`} style={{ backgroundColor: "#3fbcfc" }} />
                              </Reactbootstrap.ProgressBar>
                          </Reactbootstrap.Container>
                      </Reactbootstrap.Col>

                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col id="CMS_Platforms" className="skill-set mt-2 mb-5 px-4">
                      <h4 className="highlight fw-bold mob-center-align mb-2 text-pixel" >CMS Platforms:</h4>
                      <Reactbootstrap.Container id="WordPress" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">WordPress</h6>
                          <Reactbootstrap.ProgressBar className="fw-medium" label={`70%`} style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated className="fw-semibold" now={70} label={`70%`} style={{ backgroundColor: "#0087be" }} />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>
                      <Reactbootstrap.Container id="WooCommerce" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">WooCommerce</h6>
                          <Reactbootstrap.ProgressBar className="fw-medium" style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated className="fw-semibold" now={45} label={`45%`} style={{ backgroundColor: "#96588a" }} />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>
                      <Reactbootstrap.Container id="Webflow" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">Webflow</h6>
                          <Reactbootstrap.ProgressBar className="fw-medium" style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated className="fw-semibold" now={40} label={`40%`} style={{ backgroundColor: "#323ed1" }} />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>
                      <Reactbootstrap.Container id="Shopify" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">Shopify</h6>
                          <Reactbootstrap.ProgressBar className="fw-medium" style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated className="fw-semibold" now={25} label={`25%`} style={{ backgroundColor: "#96bf48" }} />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>
                      <Reactbootstrap.Container id="Wix" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">Wix</h6>
                          <Reactbootstrap.ProgressBar className="fw-medium" style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated className="fw-semibold text-black" now={25} label={`25%`} style={{ backgroundColor: "#bdc1be" }} />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>
                      <Reactbootstrap.Container id="Squarespace" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">Squarespace</h6>
                          <Reactbootstrap.ProgressBar className="fw-medium" style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated className="fw-semibold text-white" now={35} label={`35%`} style={{ backgroundColor: "#000000" }} />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>
                      <Reactbootstrap.Container id="Kajabi" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">Kajabi</h6>
                          <Reactbootstrap.ProgressBar className="fw-medium" style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated className="fw-semibold text-white" now={40} label={`40%`} style={{ backgroundColor: "#ff757a" }} />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>


                      <Reactbootstrap.Col id="AutomationPlatforms" className="skill-set mt-5 ">
                          <h4 className="highlight fw-bold mob-center-align mb-2 text-pixel" >Automation Platforms:</h4>
                          <Reactbootstrap.Container id="ClickFunnels" className="my-3 p-0">
                              <h6 className="fw-medium text-white mb-1">ClickFunnels</h6>
                              <Reactbootstrap.ProgressBar style={{ height: "25px" }}>
                                  <Reactbootstrap.ProgressBar animated now={15} style={{ backgroundColor: "#1e74ff" }} key={1} />
                                  <p className="fw-semibold text-white z-3" style={{ margin: (this.isMobile ? "7px -10px" : "5px -25px") }} >30%</p>
                                  <Reactbootstrap.ProgressBar animated now={15} style={{ backgroundColor: "#f14634" }} key={2} />
                              </Reactbootstrap.ProgressBar>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.Container id="MailChimp" className="my-3 p-0">
                              <h6 className="fw-medium text-white mb-1">Mailchimp</h6>
                              <Reactbootstrap.ProgressBar className="fw-medium " style={{ height: "25px" }}>
                                  <Reactbootstrap.ProgressBar animated className="fw-semibold text-black" now={20} label={`20%`} style={{ backgroundColor: "#fce222" }} />
                              </Reactbootstrap.ProgressBar>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.Container id="HubSpot" className="my-3 p-0">
                              <h6 className="fw-medium text-white mb-1">HubSpot</h6>
                              <Reactbootstrap.ProgressBar className="fw-medium " style={{ height: "25px" }}>
                                  <Reactbootstrap.ProgressBar animated className="fw-semibold text-white" now={20} label={`20%`} style={{ backgroundColor: "#f6553b" }} />
                              </Reactbootstrap.ProgressBar>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.Container id="Zapier" className="my-3 p-0">
                              <h6 className="fw-medium text-white mb-1">Zapier</h6>
                              <Reactbootstrap.ProgressBar className="fw-medium " style={{ height: "25px" }}>
                                  <Reactbootstrap.ProgressBar animated className="fw-semibold text-white" now={15} label={`15%`} style={{ backgroundColor: "#ff5206" }} />
                              </Reactbootstrap.ProgressBar>
                          </Reactbootstrap.Container>
                      </Reactbootstrap.Col>

                  </Reactbootstrap.Col>


                  
              </Reactbootstrap.Row>
          </Reactbootstrap.Container>
    );
  }
}
  
export default Skills;