import React, {useState, useEffect, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import '../styles/Slider.css'
import slide1 from '../assets/img/slider/1.jpg'
import slide2 from '../assets/img/slider/2.jpg'
import slide3 from '../assets/img/slider/3.jpg'
import slide4 from '../assets/img/slider/4.jpg'

function Slider(){
    const[slide, setSlide] = useState(1)
    const slides = [slide1, slide2, slide3, slide4]
    const inviz={
      left: "-100%",
      display:"none"
    }
    const thisImg={
      opacity: '1'
    }

    function left(){
      if(slide===1){
        return ()=>setSlide(4)
      } else{
        return ()=>setSlide(slide-1)
      }
    }
    function right(){
      if(slide===4){
        return ()=>setSlide(1)
      } else{
        return ()=>setSlide(slide+1)
      }
    }
  //   function interval(){
  //     return setInterval(right, 2000);
  //  }
  //  interval()
  useEffect(() => {
    const interval = setInterval(right, 1000);
    return () => clearInterval(interval);
  }, []);
  const nodeRef = [useRef(null),useRef(null),useRef(null),useRef(null)]
    return (
      <div className="block-slider">
        <div className="container">
          <div className="row">
            <div className="slider col-sm-12 col-md-9"  id="slider">
              <div className="big-slider " >
                <span className="slider-button-left" onClick={left()} ></span>   
                  
                  <SwitchTransition mode={'out-in'}>
                    <CSSTransition
                     key={slide} 
                    in={slide===1} 
                    nodeRef={nodeRef[slide-1]} 
                    timeout={500}  
                    classNames="slide" 
                    addEndListener={(done) => {nodeRef[slide-1].current.addEventListener("transitionend", done, false);}} >
                      
                      <img alt="Slide 1" ref={nodeRef[slide-1]} className=" big-img"   src={slides[slide-1]} />
                    
                    </CSSTransition>  
                  </SwitchTransition>
                  <p className=" slider-text"  style={slide===1? undefined : inviz  }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et obcaecati, illo porro ex provident nisi ipsam cupiditate quo! Quam, impedit veniam commodi dolores </p>
                  <p className=" slider-text"  style={slide===2? undefined : inviz  }>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste magnam eum suscipit accusantium explicabo illum voluptatibus nisi pariatur deleniti, ipsa  </p>
                  <p className=" slider-text"  style={slide===3? undefined : inviz  }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet aspernatur repellendus minus error voluptatum nostrum velit, cupiditate architecto adipisci dolorem  </p>
                  <p className=" slider-text" style={slide===4? undefined : inviz  }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus spernatur repellendus minus error voluptatum nostrum velit, cupiditate architecto </p>
                
                <span className="slider-button-right" onClick={right()}></span>
              </div>
              <div className="col-12 sm-imgs " id="sm-imgs">
                  <img alt="Slide 1" className="col-3 sm-img" style={slide===1? thisImg : undefined  } src={slide1} onClick={()=>setSlide((slide)=>slide=1)}/>
                  <img alt="Slide 2" className="col-3 sm-img" style={slide===2? thisImg : undefined  } src={slide2} onClick={()=>setSlide((slide)=>slide=2)}/>
                  <img alt="Slide 3" className="col-3 sm-img" style={slide===3? thisImg : undefined  } src={slide3} onClick={()=>setSlide((slide)=>slide=3)}/>
                  <img alt="Slide 4" className="col-3 sm-img" style={slide===4? thisImg : undefined  } src={slide4} onClick={()=>setSlide((slide)=>slide=4)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Slider