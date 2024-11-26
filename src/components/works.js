import '../css/Main.css';
import React, {Component}  from 'react';
import lps from '../img/lpscannr.png'; 
import im from '../img/intermed.png'; 
import pd from '../img/project-d.png'; 
import wh from '../img/westpointeheights.png';
import ior from '../img/ipassonlinerev.png';
import iw from '../img/iw.png';
import * as Reactbootstrap from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


class Works extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
        };
    }

  
    render() {
      return  (
          <Reactbootstrap.Container fluid style={{ height: "100vh", overflow: "auto" }} className="transition-container p-3 m-0 position-relative">
              <Reactbootstrap.Row xs={1} md={2} lg={2} className="p-3 ">
                    
                  <Reactbootstrap.Col className="my-3">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                              <a href="https://rainecagape.github.io/LIPScanner_Live_Map_Pest_Infestation_Web/web/web/" target="_blank">
                                <Reactbootstrap.Image src={lps} className="web-img-hover card-img-top" alt="..." />
                                <Reactbootstrap.Container Fade className="web-link m-0 z-2 d-flex position-absolute rounded top-0 start-0 bg-white opacity-75 d-flex justify-content-center align-items-center h-100">
                                    <FontAwesomeIcon className="text-black fs-1" icon={faExternalLinkAlt} />
                                </Reactbootstrap.Container>
                              </a>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap ">
                              <Reactbootstrap.Container className="p-0 m-0">
                                  <h5 class="card-title fw-bold highlight text-pixel">LPS Live Map </h5>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">A thesis website project with the acronym Lanzones Pest Scanner System. It displays a pin mark that points the location with the pest infested lanzones tree from the lanzones pest identifier mobile app.
                                      Sad to say the pest infestation markers no longer appears on the map since our Google Maps API subscription is long due.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">HTML & CSS</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">PHP</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">JavaScript</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">BootStrap</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Google Firebase</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                           </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                              <a href="https://ipassprocessing.com/" target="_blank">
                                  <Reactbootstrap.Image src={iw} className="web-img-hover card-img-top" alt="..." />
                                  <Reactbootstrap.Container Fade className="web-link m-0 z-2 d-flex position-absolute rounded top-0 start-0 bg-white opacity-75 d-flex justify-content-center align-items-center h-100">
                                      <FontAwesomeIcon className="text-black fs-1" icon={faExternalLinkAlt} />
                                  </Reactbootstrap.Container>
                              </a>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                  <h5 class="card-title fw-bold highlight text-pixel">IPASS Website v2 </h5>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">A revamped informative website project at my previous company with its new design, eliminated redundant and unecessary plugins, unified font systems, optimized images, and improved payment experience than its previous state.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container fixed="bottom" className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WooCommerce</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Elementor</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                              <a href="https://intermed-usa.com//" target="_blank">
                                  <Reactbootstrap.Image src={im} className="web-img-hover card-img-top" alt="..." />
                                  <Reactbootstrap.Container Fade className="web-link m-0 z-2 d-flex position-absolute rounded top-0 start-0 bg-white opacity-75 d-flex justify-content-center align-items-center h-100">
                                      <FontAwesomeIcon className="text-black fs-1" icon={faExternalLinkAlt} />
                                  </Reactbootstrap.Container>
                              </a>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                  <h5 class="card-title fw-bold highlight text-pixel">Intermed Website</h5>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">An informative website at my previous company's digital marketing client. Email configurations on SMTP plugin since the email hosting was on Google Workspace.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container fixed="bottom" className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Elementor</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                  </Reactbootstrap.Col>

                   <Reactbootstrap.Col className="my-3">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                              <a href="https://westpointeheights.com/" target="_blank">
                                  <Reactbootstrap.Image src={wh} className="web-img-hover card-img-top" alt="..." />
                                  <Reactbootstrap.Container Fade className="web-link m-0 z-2 d-flex position-absolute rounded top-0 start-0 bg-white opacity-75 d-flex justify-content-center align-items-center h-100">
                                      <FontAwesomeIcon className="text-black fs-1" icon={faExternalLinkAlt} />
                                  </Reactbootstrap.Container>
                              </a>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                  <h5 class="card-title fw-bold highlight text-pixel">WestPointe Heights Website</h5>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">Another informative website at my previous company's digital marketing client.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container fixed="bottom" className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Elementor</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                              <a href="https://ngnipassonlineacademy.com/login.php" target="_blank">
                                  <Reactbootstrap.Image src={ior} className="web-img-hover card-img-top" alt="..." />
                                  <Reactbootstrap.Container Fade className="web-link m-0 z-2 d-flex position-absolute rounded top-0 start-0 bg-white opacity-75 d-flex justify-content-center align-items-center h-100">
                                      <FontAwesomeIcon className="text-black fs-1" icon={faExternalLinkAlt} />
                                  </Reactbootstrap.Container>
                              </a>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                  <h5 class="card-title fw-bold highlight text-pixel">IPASS Online Academy v2</h5>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">A web application v.2 project of my previous company.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container fixed="bottom" className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">FullStack</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">GitHub</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                              <a href="https://prujekuto-d.vercel.app/" target="_blank">
                                  <Reactbootstrap.Image src={pd} className="web-img-hover card-img-top" alt="..." />
                                  <Reactbootstrap.Container Fade className="web-link m-0 z-2 d-flex position-absolute rounded top-0 start-0 bg-white opacity-75 d-flex justify-content-center align-items-center h-100">
                                      <FontAwesomeIcon className="text-black fs-1" icon={faExternalLinkAlt} />
                                  </Reactbootstrap.Container>
                              </a>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                  <h5 class="card-title fw-bold highlight text-pixel">Project D </h5>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">It's a website based on the anime series, Initial D. It displays the interactive racing location with blinking infos. Still work-in-progress project since I'm at hiatus in watching the 5th stage.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Next Js</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">React Js</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Tailwind CSS</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Google Firebase</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                  </Reactbootstrap.Col>

              </Reactbootstrap.Row>
          </Reactbootstrap.Container>
      );
    }
  }
    
  export default Works;