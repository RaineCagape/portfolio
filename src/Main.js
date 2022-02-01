import './css/Main.css';
import './css/mobile.css';
import React,{ useState }  from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import img from './img/Recmark.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Intro from'./components/intro';
import Info from'./components/info';
import Skills from'./components/skills';
import Works from'./components/works';

export default function CustomLinkExample() {

  const [visible, setVisible] = useState(false);
  
  return (
    <Router>
      <div className='container container-mob'>
          <div className="col-one">
              <div className='image-container'>
                <img className='image' src={img} href="https://rainecagape.github.io/portfolio" alt="Logo" style={{width: 95, height: 130, borderRadius: 127/ 2}} />
                <div className="nav-list"> 
                 <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><MenuLink activeOnlyWhenExact={true} to="/" label="Intro"/></p>
                 <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><MenuLink to="/info" label="About" /></p>
                 <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><MenuLink to="/skills" label="Skills" /></p>
                 <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><MenuLink to="/works" label="Works" /></p>
               </div>
               <div className="social-bar">
                <a href="https://www.linkedin.com/in/reyna-elaine-cagape-a13803179/" target="_blank"><FontAwesomeIcon className="linkedin" icon={faLinkedin}/></a>
                <a href="https://github.com/RaineCagape" target="_blank"><FontAwesomeIcon className="github" icon={faGithub} /></a>
               </div>
              </div>
          </div>
          {visible && <NavMob/>}
          <div className="col-one-mobile">
              <div className='image-container'>
                <div className='bars-container'><button className="button" onClick={() => setVisible(!visible)}>{visible} <FontAwesomeIcon className="bars-icon" id="bars" icon={faBars} /></button></div>
                <div className='logo-container'> <img className='image-mob' href="https://rainecagape.github.io/portfolio" src={img} alt="Logo"/></div>
          </div>
              
          </div>

          
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
      </div>  
    </Router>
  );
}

function refreshPage(e) {
  e.preventDefault();
  window.location.reload();
}

const NavMob = () => (
  
  <div className='nav-list-mob'> 
                 <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><a onClick={refreshPage} href='https://rainecagape.github.io/portfolio' target="_top">Intro</a></p>
                 <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><a onClick={refreshPage} href='https://rainecagape.github.io/portfolio/#/info' target="_top">About</a></p>
                 <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><a onClick={refreshPage} href='https://rainecagape.github.io/portfolio/#/skills' target="_top">Skills</a></p>
                 <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><a onClick={refreshPage} href='https://rainecagape.github.io/portfolio/#/works' target="_top">Works</a></p>
                 <div className="social-bar-mob">
                  <a href="https://www.linkedin.com/in/reyna-elaine-cagape-a13803179/" target="_blank"><FontAwesomeIcon className="linkedin" icon={faLinkedin}/></a>
                  <a href="https://github.com/RaineCagape" target="_blank"><FontAwesomeIcon className="github" icon={faGithub} /></a>
                </div>
          </div>
)

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

