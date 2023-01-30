import React, {useState, useEffect, useRef } from 'react'
import { Link, Route } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import "../styles/Latest.css"
import JsonInfo from '../../jsoninform.json'
import zoomico from "../assets/ico/zoom2.png"
import linkico from "../assets/ico/link2.png"
import work1 from "../assets/img/portfolio/work1.jpg"
import work2 from "../assets/img/portfolio/work2.jpg"
import work3 from "../assets/img/portfolio/work3.jpg"
import work4 from "../assets/img/portfolio/work4.jpg"

function Latest(){
const[zoom, setZoomer] = useState(0)
const works = [work1, work2, work3, work4]
const nodeRef = useRef(null)
    return(
        <div className="container block-latest">
        <div className="h1">
            <h1>Our Latest Work</h1>
        </div>
        <div className="row">
            <span className="col-sm-0 col-md-1 "></span>
            <div className="row col-sm-12 col-md-10">
            {Object.keys(JsonInfo.worksinfo).map((item, index) => (
                <div className="col-sm-12 col-md-3 latest" key={index} style={JsonInfo.worksinfo[index].id<5 ? undefined : {display:'none'}}>
                    <div>
                        <img  className="col-12" src={works[index]}  onClick={()=>setZoomer(index+1)}/>
                        <h4>{JsonInfo.worksinfo[index].header}</h4>
                        <p>{JsonInfo.worksinfo[index].mainText} </p>
                        <a ><img className="col-10" src={zoomico} onClick={()=>setZoomer(index+1)}/></a>
                        <Link to="/"><img className="col-10" src={linkico} /></Link>
                    </div>
                </div>
                ))}
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
                    
                ))}</div></CSSTransition>
                <div className={zoom ? "backdrop": undefined}  onClick={()=>setZoomer(0)}></div>
            </div>
            <span className="col-sm-5 col-md-1 "></span>
        </div>
    </div>
    )

}
export default Latest