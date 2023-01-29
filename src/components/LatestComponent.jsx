import React, {useState, useEffect, useRef } from 'react'
import { Link, Route } from 'react-router-dom'
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
    return(
        <div className="container block-latest">
        <div className="h1">
            <h1>Our Latest Work</h1>
        </div>
        <div className="row">
            <span className="col-sm-0 col-md-1 "></span>
            <div className="row col-sm-12 col-md-10">
            {Object.keys(JsonInfo.worksinfo).map((item, index) => (
                <div class="col-sm-12 col-md-3 latest" key={index} style={JsonInfo.worksinfo[index].id<5 ? undefined : {display:'none'}}>
                    <div>
                        <img  class="col-12" src={works[index]} />
                        <h4>{JsonInfo.worksinfo[index].header}</h4>
                        <p>{JsonInfo.worksinfo[index].mainText} </p>
                        <a ><img class="col-10" src={zoomico}/></a>
                        <Link to="/"><img class="col-10" src={linkico} /></Link>
                    </div>
                </div>
                ))}
                {/* <WorkZoom 
                    
                    v-for="item in worksinfo"
                    v-bind:worksinfo="item"
                    v-bind:key="item.id"
                    
                />  */}
                
                <div className={zoom ? backdrop: undefined} ></div>
            </div>
            <span className="col-sm-5 col-md-1 "></span>
        </div>
    </div>
    )

}
export default Latest