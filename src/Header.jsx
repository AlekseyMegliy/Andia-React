import { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./assets/img/logo.png";
import home_img from './assets/ico//home-sm.png';
import portfolio_img from './assets/ico//portfolio-sm.png';
import blog_img from './assets/ico//blog-sm.png';
import services_img from './assets/ico//services-sm.png';
import about_img from './assets/ico//about-sm.png';
import contact_img from './assets/ico//contact-sm.png';


function Header(props){
    const[open, setOpen]=useState(false);


    return (
        <div className="container header" style={open? {height:"410px"}:undefined } id="header"  >
        <div className="row">
            <Link  to="/" className="col-3 col-sm-3 col-lg-2 offset-sm-1 offset-0 align-items-center logo">
                <img className="col-10 col-sm-12" alt="Andia logo" width="165px"  src={logo} />
            </Link>
            <button className="offset-4 offset-sm-6 header-button" onClick={( )=> setOpen((open)=>open = !open)} > 
                <svg>
                    <rect x="10" y="6" width="15" height="2"/>
                    <rect x="10" y="11" width="15" height="2"/>
                    <rect x="10" y="16" width="15" height="2"/>
                </svg>
            </button>
            <div className="col-sm-11 offset-sm-1 col-lg-6 col-xl-6 offset-lg-2 offset-xl-3 nav">
                <Link className={props.page===1 ? 'current': undefined} to="/" >
                    <img alt="Home" src={home_img} />
                    <p>HOME</p>
                </Link>
                <Link className={props.page===2 ? 'current': undefined}  to="/" >
                    <img alt="Portfolio" src={portfolio_img} />
                    <p>PORTFOLIO</p>
                </Link>
                <Link className={props.page===3 ? 'current': undefined}  to="/" >
                    <img alt="Blog" src={blog_img} />
                    <p>BLOG</p>
                </Link>
                <Link className={props.page===4 ? 'current': undefined} to="/"  >
                    <img  alt="Services" src={services_img} />
                    <p>SERVICES</p>
                </Link>
                <Link className={props.page===5 ? 'current': undefined} to="/about"  >
                    <img alt="About" src={about_img} />
                    <p>ABOUT</p>
                </Link>
                <Link className={props.page===6 ? 'current': undefined} to="/"  >
                    <img alt="Contact" src={contact_img} />
                    <p>CONTACT</p>
                </Link>
            </div>
            <span className="col-1"></span>
        </div>
    </div>
    )
}
export default Header