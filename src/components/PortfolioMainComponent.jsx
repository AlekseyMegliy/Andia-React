import React, {useState, useEffect, useRef } from 'react'
import { Link, Route } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import '../styles/PortfolioMain.css'
import plateImg from "../assets/ico/portfolio.png"
import JsonInfo from '../../jsoninform.json'
import zoomico from "../assets/ico/zoom2.png"
import linkico from "../assets/ico/link2.png"
import work1 from "../assets/img/portfolio/work1.jpg"
import work2 from "../assets/img/portfolio/work2.jpg"
import work3 from "../assets/img/portfolio/work3.jpg"
import work4 from "../assets/img/portfolio/work4.jpg"
import work5 from "../assets/img/portfolio/work5.jpg"
import work6 from "../assets/img/portfolio/work6.jpg"
import work7 from "../assets/img/portfolio/work7.jpg"
import work8 from "../assets/img/portfolio/work8.jpg"
import work9 from "../assets/img/portfolio/work9.jpg"
import work10 from "../assets/img/portfolio/work10.jpg"
import work11 from "../assets/img/portfolio/work11.jpg"
import work12 from "../assets/img/portfolio/work12.jpg"


function PortfolioMain(){
    const[zoom, setZoomer] = useState(0)
    const[type, setType] = useState('all')
    const works = [work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12]
    const nodeRef = useRef(null)
   
    return(
        <div>
            <div class="plate">    
                <div class="container">
                    <div class="row">
                        
                        <img alt="Portfolio icon" class=" offset-sm-1 offset-0 " src={plateImg} />
                        <p class=" offset-0" >Portfolio / </p> 
                        <p class=" plate-italic offset-sm-1 offset-lg-0 ">Here is the work we've done so far</p>
                    </div>

                </div>
            </div>
            <div class="portfolio"> 
                <div class="container">
                    <div class="row">
                        <span class="offset-sm-1 offset-0 col-10 portfolio-filter">
                            <p onClick={()=> setType('all')} style={type ==='all'? {color: '#9d426b'} : undefined} >All / </p>
                            <p onClick={()=> setType('web')} style={type ==='web'? {color: '#9d426b'} : undefined}>WEB DESIGN / </p>
                            <p onClick={()=> setType('logo')} style={type ==='logo'? {color: '#9d426b'} : undefined}>LOGO DESIGN / </p>
                            <p onClick={()=> setType('print')} style={type ==='print'? {color: '#9d426b'} : undefined}>PRINT DESIGN </p>
                        </span>
                    </div>
                    <div class="row offset-sm-0 offset-md-1 col-sm-12 col-md-10">
                        {Object.keys(JsonInfo.worksinfo).map((item, index) => (
                            <div className="col-sm-12 col-md-3 latest" key={JsonInfo.worksinfo[index].id} style={ type==='all'? undefined : JsonInfo.worksinfo[index].type===type ? undefined : {display:'none'}}>
                                <div>
                                    <img  className="col-12" src={works[index]}  onClick={()=>setZoomer(index+1)}/>
                                    <h4>{JsonInfo.worksinfo[index].header}</h4>
                                    <p>{JsonInfo.worksinfo[index].mainText} </p>
                                    <a ><img className="col-10" src={zoomico} onClick={()=>setZoomer(index+1)}/></a>
                                    <Link to="/"><img className="col-10" src={linkico} /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                <CSSTransition  nodeRef={nodeRef} in={Boolean(zoom)} timeout={500}  classNames="transition"  >
                    <div ref={nodeRef} className="transition-zoom">
                        {Object.keys(JsonInfo.worksinfo).map((item, index) => (
                        
                            <div key={index}  className="col-8 zoom"  style={JsonInfo.worksinfo[index].id===zoom ? undefined : {display:'none'}}>
                                <img  className="col-12" src={works[index]} />
                                <span className=" col-1 remove-zoom" onClick={()=>setZoomer(0)}>
                                    <svg>
                                        <rect x="10" y="6" width="17" height="3"/>
                                        <rect x="10" y="6" width="17" height="3"/>
                                    </svg>
                                </span>
                            </div>  
                        
                    ))}
                    </div>
                </CSSTransition>
                <div className={zoom ? "backdrop": undefined}  onClick={()=>setZoomer(0)}></div>
                </div>
            </div>
        </div>
    )
}
export default PortfolioMain