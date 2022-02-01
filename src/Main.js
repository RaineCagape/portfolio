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
  const NavMob = () => (
  
    <div className='nav-list-mob'> 
                   <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><button href='https://rainecagape.github.io/portfolio' onClick={() => setVisible(!visible)}>{visible}Intro</button></p>
                   <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><button href='https://rainecagape.github.io/portfolio/#/info' onClick={() => setVisible(!visible)}>{visible}About</button></p>
                   <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><button href='https://rainecagape.github.io/portfolio/#/skills' onClick={() => setVisible(!visible)}>{visible}Skills</button></p>
                   <p className="list" ><FontAwesomeIcon className="arrow" icon={faCaretRight} /><button href='https://rainecagape.github.io/portfolio/#/works' onClick={() => setVisible(!visible)}>{visible}Works</button></p>
                   <div className="social-bar-mob">
                    <a href="https://www.linkedin.com/in/reyna-elaine-cagape-a13803179/" target="_blank"><FontAwesomeIcon className="linkedin" icon={faLinkedin}/></a>
                    <a href="https://github.com/RaineCagape" target="_blank"><FontAwesomeIcon className="github" icon={faGithub} /></a>
                  </div>
            </div>
  )
  
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
      {visible && <NavMob/>}
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

