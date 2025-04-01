import '../css/Main.css';
import React, {Component}  from 'react';
import * as Reactbootstrap from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import lps from '../img/lpscannr.png'; 
import im from '../img/intermed.png'; 
import pd from '../img/project-d.png'; 
import wh from '../img/westpointeheights.png';
import ior from '../img/ipassonlinerev.png';
import iw from '../img/iw.png';
import cmt from '../img/cosmarketing.png';
import p4p from '../img/p4p.png';
import lhh from '../img/lhh.png';
import ipg from '../img/ipg.png';
import k2yh from '../img/k2yh.png';
import cos from '../img/cos.png';


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
                  <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://rainecagape.github.io/LIPScanner_Live_Map_Pest_Infestation_Web/web/web/" target="_blank">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                            <Reactbootstrap.Image src={lps} className="web-img-hover card-img-top" alt="..." />
                          </Reactbootstrap.Container> 
                          <Reactbootstrap.CardBody className="bg-dark web-info p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap ">
                              <Reactbootstrap.Container className="p-0 m-0">
                                <a href="https://rainecagape.github.io/LIPScanner_Live_Map_Pest_Infestation_Web/web/web/" target="_blank">
                                    <h5 class="card-title fw-bold highlight text-pixel">LPS Live Map 
                                        <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} />
                                    </h5>
                                </a> 
                                    <p class="card-text text-xxs text-white fw-lighter mb-2">A thesis website project with the acronym Lanzones Pest Scanner. It displays a pin mark that points the location with the pest infested lanzones tree from the lanzones pest identifier mobile app.
                                      Sad to say, the pest infestation markers no longer appearing on the map since the Google Maps API free subscription has ended years ago.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">PHP</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">JavaScript</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">BootStrap</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Google Firebase</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">GitHub Pages</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                           </Reactbootstrap.CardBody>
                        </Reactbootstrap.Card>
                      </a>
                    </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://ipassprocessing.com/" target="_blank">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                              <a href="https://ipassprocessing.com/" target="_blank">
                                  <Reactbootstrap.Image src={iw} className="web-img-hover card-img-top" alt="..." />
                              </a>
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                <a href="https://ipassprocessing.com/" target="_blank">
                                    <h5 class="card-title fw-bold highlight text-pixel">IPASS Website v2 
                                        <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} />
                                    </h5>
                                </a>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">A revamped informative website of the previous employment with its new design, eliminated redundant and unecessary plugins, unified font systems, optimized images, and improved payment experience than its previous state.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container fixed="bottom" className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WooCommerce</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Elementor</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">PayPal Gateway</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">UPay Gateway</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">CyberSource Gateway</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                    </a>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://intermed-usa.com//" target="_blank">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                            <Reactbootstrap.Image src={im} className="web-img-hover card-img-top" alt="..." />
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">  
                                <a href="https://intermed-usa.com//" target="_blank">
                                  <h5 class="card-title fw-bold highlight text-pixel">Intermed Website
                                    <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} /> 
                                  </h5>
                                </a>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">An informative website of my previous employment's digital marketing client.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container fixed="bottom" className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Elementor</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">OnePress Theme</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Google Workspace Admin</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                      </a>
                  </Reactbootstrap.Col>
    
                   <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://westpointeheights.com/" target="_blank">
                        <Reactbootstrap.Card className="border border-0 h-100">
                            <Reactbootstrap.Container className="position-relative p-0">
                                    <Reactbootstrap.Image src={wh} className="web-img-hover card-img-top" alt="..." />
                            </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                <a href="https://westpointeheights.com/" target="_blank">
                                  <h5 class="card-title fw-bold highlight text-pixel">WestPointe Heights Website
                                    <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} />
                                    </h5>
                                </a>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">Another informative website of my previous company's digital marketing client.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container fixed="bottom" className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Elementor</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">OnePress Theme</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                      </a>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://ngnipassonlineacademy.com/login.php" target="_blank">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                            <Reactbootstrap.Image src={ior} className="web-img-hover card-img-top" alt="..." />
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                <a href="https://ngnipassonlineacademy.com/login.php" target="_blank">
                                    <h5 class="card-title fw-bold highlight text-pixel">IPASS Online Academy v2
                                        <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} />
                                    </h5>
                                </a>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">A web application v.2 project of my previous employment.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container fixed="bottom" className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">BootStrap</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">JavaScript Lib</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">PHP</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">GitHub</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                    </a>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://prujekuto-d.vercel.app/" target="_blank">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                            <Reactbootstrap.Image src={pd} className="web-img-hover card-img-top" alt="..." />
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                <a href="https://prujekuto-d.vercel.app/" target="_blank">
                                    <h5 class="card-title fw-bold highlight text-pixel">Project D 
                                        <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} />
                                    </h5>
                                </a>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">It's a small web application of mine based on Initial D anime series. It displays the interactive racing location with blinking infos. Still work-in-progress project since I'm at hiatus in watching the 5th stage.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Next Js</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">React Js</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Tailwind CSS</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Google Firebase</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">GitHub Pages</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                    </a>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://cosmarketing.team/" target="_blank">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                            <Reactbootstrap.Image src={cmt} className="web-img-hover card-img-top" alt="..." />
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                <a href="https://cosmarketing.team/" target="_blank">
                                    <h5 class="card-title fw-bold highlight text-pixel">COS Marketing Team
                                        <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} />
                                    </h5>
                                </a>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">An Australian Digital Marketing Agency where I revamped most of their web pages, fixing its mobile responsiveness compared to its previous static html files, and do most of their landing pages.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Elementor</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">GoHighLevel</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">DNS Management</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Custom Theme</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Technical SEO (Google Tools + Yoast SEO)</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Google My Business Updates Posting</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                      </a>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://poniesforparties.com.au/" target="_blank">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                            <Reactbootstrap.Image src={p4p} className="web-img-hover card-img-top" alt="..." />
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                <a href="https://poniesforparties.com.au/" target="_blank">
                                    <h5 class="card-title fw-bold highlight text-pixel">Ponies for parties
                                        <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} />
                                    </h5>
                                </a>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">A Party booking site on web migration from an Autralian hosting to Site Ground Hosting + Crazy Domain.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Web Migration</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Custom Theme</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">DNS Management</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                      </a>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://landhar.com.au/" target="_blank">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                            <Reactbootstrap.Image src={lhh} className="web-img-hover card-img-top" alt="..." />
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                <a href="https://landhar.com.au/" target="_blank">
                                    <h5 class="card-title fw-bold highlight text-pixel">Landhar Homes
                                        <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} />
                                    </h5>
                                </a>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">A website for home build company in Greater Sydney which focuses on marketing campaign and blog contents.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Landing Pages</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Elementor</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">GoHighLevel</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Google Search Console</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                      </a>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://inspiredpg.com.au/" target="_blank">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                            <Reactbootstrap.Image src={ipg} className="web-img-hover card-img-top" alt="..." />
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                <a href="https://inspiredpg.com.au/" target="_blank">
                                    <h5 class="card-title fw-bold highlight text-pixel">Inspired Property Group
                                        <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} />
                                    </h5>
                                </a>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">A company focuses on Property Management.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Divi Page Builder</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">GoHighLevel</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                      </a>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://keystoyourhealth.org/" target="_blank">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                            <Reactbootstrap.Image src={k2yh} className="web-img-hover card-img-top" alt="..." />
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                <a href="https://keystoyourhealth.org/" target="_blank">
                                    <h5 class="card-title fw-bold highlight text-pixel">Keys to your Health
                                        <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} />
                                    </h5>
                                </a>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">A  website project currently on work-in-progress for a client that promotes healthcare products.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Elementor Pro</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">GoHighLevel</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">On Maintenance Page</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                      </a>
                  </Reactbootstrap.Col>

                  <Reactbootstrap.Col className="my-3 web-card">
                    <a href="https://craigosullivan.com/" target="_blank">
                      <Reactbootstrap.Card className="border border-0 h-100">
                          <Reactbootstrap.Container className="position-relative p-0">
                            <Reactbootstrap.Image src={cos} className="web-img-hover card-img-top" alt="..." />
                          </Reactbootstrap.Container>
                          <Reactbootstrap.CardBody className="bg-dark p-3 border border-top-0 rounded-bottom d-flex align-content-between flex-wrap">
                              <Reactbootstrap.Container className="p-0 m-0">
                                <a href="https://craigosullivan.com/" target="_blank">
                                    <h5 class="card-title fw-bold highlight text-pixel">Craig O'Sullivan Site
                                        <FontAwesomeIcon className="text-white text-xxs mx-3" icon={faExternalLinkAlt} />
                                    </h5>
                                </a>
                                  <p class="card-text text-xxs text-white fw-lighter mb-2">A website for a keynote speaker client.</p>
                              </Reactbootstrap.Container>
                              <Reactbootstrap.Container className="p-0 mt-2">
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Web Layout</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">WordPress</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">Spectra</Reactbootstrap.Badge>
                                  <Reactbootstrap.Badge className="bg-transparent border border-1 rounded-5 m-1 pixel-font">GoHighLevel</Reactbootstrap.Badge>
                              </Reactbootstrap.Container>
                          </Reactbootstrap.CardBody>
                      </Reactbootstrap.Card>
                      </a>
                  </Reactbootstrap.Col>

              </Reactbootstrap.Row>
          </Reactbootstrap.Container>
      );
    }
  }
    
  export default Works;