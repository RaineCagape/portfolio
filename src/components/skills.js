import '../css/Main.css';
import * as Reactbootstrap from 'react-bootstrap';
import React, { Component } from 'react';
import bh from '../img/bh.png';
import gd from '../img/gd.png';

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
              <Reactbootstrap.Row xs={1} md={2} lg={2} className="p-2">

                  <Reactbootstrap.Col id="Languages" className="skill-set mt-2 mb-5 px-4">
                        <Reactbootstrap.Container className='d-flex align-items-center justify-content-center m-0 p-0'>
                            <Reactbootstrap.Image src="https://emoji.discadia.com/emojis/62051a31-17cf-48a6-b391-3391a0778664.GIF" className="mx-2 matrix-gif"  />
                            <h4 className="highlight fw-bold text-pixel" >Languages: </h4> 
                        </Reactbootstrap.Container>
                      <Reactbootstrap.Container id="PHP" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">PHP</h6>
                          <Reactbootstrap.ProgressBar className="fw-medium" label={`80%`} style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated className="fw-semibold" now={50} label={`50%`} style={{backgroundColor: "#787cb5" }} />
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
                      <Reactbootstrap.Container id="SQL" className="my-3 p-0">
                          <h6 className="fw-medium text-white mb-1">SQL</h6>
                          <Reactbootstrap.ProgressBar style={{ height: "25px" }}>
                              <Reactbootstrap.ProgressBar animated now={25} style={{ backgroundColor: "#027289" }} key={1} />
                              <p className="fw-semibold text-white z-3" style={{ margin: (this.isMobile ? "7px -10px" : "5px -25px")}} >50%</p>
                              <Reactbootstrap.ProgressBar animated now={25} style={{ backgroundColor: "#dd9530" }} key={2}  />
                          </Reactbootstrap.ProgressBar>
                      </Reactbootstrap.Container>

                      <Reactbootstrap.Col id="Libraries&Frameworks" className="skill-set mt-5 ">
                            <Reactbootstrap.Container className='d-flex align-items-center justify-content-center m-0 p-0'>
                                <Reactbootstrap.Image src="https://emoji.discadia.com/emojis/90aed840-17c0-4150-8f9c-431737737521.GIF" className="mx-2 mt-0 books-gif" />
                                <h4 className="highlight fw-bold text-pixel" >Libraries & Frameworks: </h4> 
                            </Reactbootstrap.Container>
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
                            <Reactbootstrap.Container className='d-flex align-items-center justify-content-center m-0 p-0'>
                                <Reactbootstrap.Image src="https://emoji.discadia.com/emojis/36ff126c-cc29-4575-9d40-3d2456fad630.gif" className="mx-2 mt-0 books-gif" />
                                <h4 className="highlight fw-bold text-pixel" >CMS Platforms: </h4> 
                            </Reactbootstrap.Container>
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
                        <Reactbootstrap.Container className='d-flex align-items-center justify-content-center m-0 p-0'>
                            <Reactbootstrap.Image src="https://cdn3.emoji.gg/emojis/48134-bmodancing.gif" className="mx-2 gif"  />
                            <h4 className="highlight fw-bold text-pixel" >Automation Platforms: </h4> 
                        </Reactbootstrap.Container>
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

            <Reactbootstrap.Container className="p-1 pb-3">
                    <Reactbootstrap.Container className='d-flex align-items-center justify-content-center m-0 p-0'>
                        <Reactbootstrap.Image src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenZxeW80dm52YzNyYmN0YXJ4dm44ZGtmMmRzNGdlMG5tbzF5ZGlsOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9igGG6KxpY0eY0Sr5u/giphy.gif" className="mx-3 server-gif"  style={{height: "35px"}} />
                        <h4 className="highlight fw-bold text-pixel" >Web Hosting: </h4> 
                    </Reactbootstrap.Container>
                    <Reactbootstrap.Container fluid>
                        <Reactbootstrap.Row xs={12} md={3} lg={12} className=' justify-content-md-center align-items-center'>
                            <Reactbootstrap.Col xs={12} md={4} lg={1} className='my-5  mx-3' align="center">
                                <Reactbootstrap.OverlayTrigger overlay={<Reactbootstrap.Tooltip>BlueHost</Reactbootstrap.Tooltip>}>
                                    <Reactbootstrap.Image src={bh} style={{height: "75px"}} alt="BlueHost"/>
                                </Reactbootstrap.OverlayTrigger>
                            </Reactbootstrap.Col>
                            <Reactbootstrap.Col  xs={12} md={4} lg={1} className='my-5  mx-3'  align="center">
                                <Reactbootstrap.OverlayTrigger overlay={<Reactbootstrap.Tooltip>Hostinger</Reactbootstrap.Tooltip>}>
                                    <Reactbootstrap.Image src="https://upload.wikimedia.org/wikipedia/commons/0/03/Hostinger_Logo.png"   style={{height: "55px"}} alt="Hostinger"/>
                                </Reactbootstrap.OverlayTrigger>
                            </Reactbootstrap.Col>
                            <Reactbootstrap.Col  xs={12} md={4} lg={1} className='my-5  mx-3'  align="center">
                                <Reactbootstrap.OverlayTrigger overlay={<Reactbootstrap.Tooltip>SiteGround</Reactbootstrap.Tooltip>}>
                                    <Reactbootstrap.Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsS0NvguexKVwZozbMRyfDUFllYcMDtE0j5zM22wK7Sd_P8sZjwIajw2Rkfx11F_Y7JCQ&usqp=CAU"  style={{height: "90px"}}   alt="SiteGround"/>
                                </Reactbootstrap.OverlayTrigger>
                            </Reactbootstrap.Col>
                            <Reactbootstrap.Col  xs={12} md={4} lg={1} className='my-5  mx-3'  align="center">
                                <Reactbootstrap.OverlayTrigger overlay={<Reactbootstrap.Tooltip>CrazyDomains</Reactbootstrap.Tooltip>}>
                                    <Reactbootstrap.Image src="https://framework.dreamscape.cloud/design_framework/images/crazy/logo/crazy_logo_com.svg" style={{width: "115px"}} alt="CrazyDomains"/>
                                </Reactbootstrap.OverlayTrigger>
                            </Reactbootstrap.Col>
                            <Reactbootstrap.Col  xs={12} md={4} lg={1} className='my-5  mx-3'  align="center">
                                <Reactbootstrap.OverlayTrigger overlay={<Reactbootstrap.Tooltip>Namecheap</Reactbootstrap.Tooltip>}>
                                    <Reactbootstrap.Image src="https://ninjateam.org/wp-content/uploads/2020/07/Namecheap-Logo.png" style={{height: "55px"}} alt="Namecheap"/>
                                </Reactbootstrap.OverlayTrigger>
                            </Reactbootstrap.Col>
                            <Reactbootstrap.Col  xs={12} md={4} lg={1} className='my-5 mx-3'  align="center">
                                <Reactbootstrap.OverlayTrigger overlay={<Reactbootstrap.Tooltip>GoDaddy</Reactbootstrap.Tooltip>}>
                                    <Reactbootstrap.Image src={gd} style={{height: "55px"}} alt="GoDaddy"/>
                                </Reactbootstrap.OverlayTrigger>
                            </Reactbootstrap.Col>
                        </Reactbootstrap.Row>
                    </Reactbootstrap.Container>
            </Reactbootstrap.Container>

          </Reactbootstrap.Container>
    );
  }
}
  
export default Skills;