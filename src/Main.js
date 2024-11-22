import './css/Main.css';
import './css/mobile.css';
import React, { useState, useRef, useEffect, Component } from 'react';
import * as Reactbootstrap from 'react-bootstrap';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
    useRouteMatch,
    useLocation
} from 'react-router-dom';
import img from './img/Recmark.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Intro from'./components/intro';
import Info from'./components/info';
import Skills from'./components/skills';
import Works from './components/works';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {
    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 767 ? true : false;
    const [NavMobileHeight, setNavMobileHeight] = useState(0);
    const mobNavRef = useRef(null);
    
    useEffect(() => {
        if (isMobile) {
            setNavMobileHeight(mobNavRef.current.clientHeight);
        }
    }, []);

    const NavLinks = () => (
        <Reactbootstrap.Container className="flex-column">
            <Reactbootstrap.Nav className="me-3 flex-column">
                <Reactbootstrap.Nav.Link className="fs-4 fw-lighter d-flex flex-row align-middle justify-content-center  " onClick={() => setVisible(!visible)}>{visible}
                    <FontAwesomeIcon className="arrow" icon={faCaretRight} />
                    <MenuLink to="/" activeOnlyWhenExact={true} label="Intro" className="m-2" />
                </Reactbootstrap.Nav.Link>
                <Reactbootstrap.Nav.Link className="fs-4 fw-lighter d-flex flex-row align-middle justify-content-center  " onClick={() => setVisible(!visible)}>{visible}
                    <FontAwesomeIcon className="arrow " icon={faCaretRight} />
                    <MenuLink to="/info" label="About" className="m-2" /> 
                </Reactbootstrap.Nav.Link>
                <Reactbootstrap.Nav.Link className="fs-4 fw-lighter d-flex flex-row align-middle justify-content-center " onClick={() => setVisible(!visible)}>{visible}
                    <FontAwesomeIcon className="arrow " icon={faCaretRight} />
                    <MenuLink to="/skills" label="Skills" className="m-2" />
                </Reactbootstrap.Nav.Link>
                <Reactbootstrap.Nav.Link className="fs-4 fw-lighter d-flex flex-row align-middle justify-content-center  " onClick={() => setVisible(!visible)}>{visible}
                    <FontAwesomeIcon className="arrow" icon={faCaretRight} />
                    <MenuLink to="/works" label="Works" className="m-2" />
                </Reactbootstrap.Nav.Link>
            </Reactbootstrap.Nav>
            <Reactbootstrap.Container id="SocialLinks" className="d-flex flex-row justify-content-center mt-5 mb-3">
                <a href="https://www.linkedin.com/in/reyna-elaine-cagape-a13803179/" className="linkedin mx-2" target="_blank">
                    <FontAwesomeIcon  size="xl" icon={faLinkedin} />
                </a>
                <a href="https://github.com/RaineCagape" className="github mx-2" target="_blank">
                    <FontAwesomeIcon  size="xl" icon={faGithub} />
                </a>
                <a href="https://www.behance.net/rainestuffs" className="behance mx-2" target="_blank">
                    <FontAwesomeIcon   size="xl" icon={faBehance} />
                </a>
            </Reactbootstrap.Container>
        </Reactbootstrap.Container>
    )

    const PCMenu = () => (
        <Reactbootstrap.Navbar className="flex-column p-2 ">
            <Reactbootstrap.Navbar.Brand className="mt-2 mb-5 p-3" href="/">
                <img src={img} href="/" alt="Logo" className="img-thumbnail border-0" />
            </Reactbootstrap.Navbar.Brand>
            <NavLinks />
        </Reactbootstrap.Navbar>
    )

    const MobMenu = () => (
        <Reactbootstrap.Container id="NavMobile" className="bg-white d-flex flex-row p-3 border-0 z-2 fixed-top" ref={mobNavRef}>
            <Reactbootstrap.Button variant="outline-light" onClick={() => setVisible(!visible)}>{visible}
                <FontAwesomeIcon className="text-dark" id="bars" size="xl" icon={faBars} />
            </Reactbootstrap.Button>
            <a className="mx-3 col-9 d-flex justify-content-center" href="/">
                <img src={img} alt="Logo" className="img-fluid border-0 img-sm" style={{ width: "15%" }} />
            </a>
        </Reactbootstrap.Container>
    )

    const MobLink = () => (
        <Reactbootstrap.Container className="bg-white min-vh-100 d-flex py-5 justify-content-center align-items-center z-2 opacity-75 position-fixed">
             <NavLinks />
        </Reactbootstrap.Container>
    )


    return (
        <Router>
            <Reactbootstrap.Container fluid className="bg-dark">
                <Reactbootstrap.Row>
                    <Reactbootstrap.Col id="NavMenu" sm={12} md={3} lg={3} className="bg-white p-0 d-flex justify-content-center align-items-center z-3 position-relative">
                        {isMobile ? <MobMenu /> : <PCMenu />}
                        {isMobile}
                    </Reactbootstrap.Col>
                    {isMobile && visible ? <MobLink /> : ""}
                    <Reactbootstrap.Col id="PageContainer" sm={12} md={9} lg={9} className={ "p-0 bg-dark " + (isMobile && visible ? "position-fixed" : "position-relative")} style={{ marginTop: isMobile ? `${NavMobileHeight}px` : `` }}>
                        <Switch>
                            <Route exact path="/">
                                <Intro />
                            </Route>
                            <Route path="/info">
                                <Info />
                            </Route>
                            <Route path="/skills">
                                <Skills />
                            </Route>
                            <Route path="/works">
                                <Works />
                            </Route>
                        </Switch>
                    </Reactbootstrap.Col>
                </Reactbootstrap.Row>
            </Reactbootstrap.Container>
        </Router>
  );
}

function MenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && ""}
      <Link to={to}>{label}</Link>
    </div>
  );
}



