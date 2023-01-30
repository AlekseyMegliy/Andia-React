import React, {useState} from 'react'
import '../styles/Testimonials.css'
import testimonial1 from "../assets/img/testimonials/1.jpg"
import testimonial2 from "../assets/img/testimonials/1.jpg"
import testimonial3 from "../assets/img/testimonials/3.png"
import testimonial4 from "../assets/img/testimonials/3.png"

function Testimonials(){
const[testi, setTesti] = useState(1)
    return(
        <div className="container block-testimonials">
        <div className="h1">
            <h1>Testimonials</h1>
        </div>
        <div className="row">
            <span className="col-1"></span>
            <div className="testimonial testimonial-one col-9" style={testi===1 ? undefined : {display:'none'}}>

                <img alt="Testimonial 1" className="col-2 col-md-1" src={testimonial1} />

                <span className="col-sm-8 col-md-9 col-lg-10">
                    <p className="response">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae possimus tempora ab obcaecati fuga atque esse! Similique illum, tempora, hic cumque vitae debitis delectus, molestiae cupiditate praesentium illo ea eligendi."</p>
                    <p className="mail">sit_ame_consectetur.com</p>
                </span>

            </div>

            <div className="testimonial testimonial-two  col-9" style={testi===2 ? undefined : {display:'none'}}>

                <img alt="Testimonial 2" className="col-2 col-md-1" src={testimonial2} />

                <span className="col-sm-8 col-md-9 col-lg-10">
                    <p className="response">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, in rem? Molestias perferendis veritatis, eos perspiciatis, natus esse nihil molestiae a ipsam quo odit facere quis praesentium, porro iste doloribus?"</p>
                    <p className="mail">perferendis_veritati.ua</p>
                </span>

            </div>

            <div className="testimonial testimonial-three col-9" style={testi===3 ? undefined : {display:'none'}}>

                <img alt="Testimonial 3" className="col-2 col-md-1" src={testimonial3} />

                <span className="col-sm-8 col-md-9 col-lg-10">
                    <p className="response">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis expedita neque modi voluptatem. Molestiae, ex quod voluptates aliquam et, distinctio dignissimos, omnis qui repudiandae quaerat quos repellat sunt!"</p>
                    <p className="mail">expedita_neque_modi.uk</p>
                </span>

            </div>

            <div className="testimonial testimonial-four col-9" style={testi===4 ? undefined : {display:'none'}}>

                <img alt="Testimonial 4" className="col-2 col-md-1" src={testimonial4} />

                <span className="col-sm-8 col-md-9 col-lg-10">
                    <p className="response">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem commodi cumque eos non quas sunt culpa nostrum, obcaecati, recusandae dolorum ipsam accusamus nisi alias quo laborum nam fugit aspernatur est."</p>
                    <p className="mail">quas_sunt_culpa.com</p>
                </span>

            </div>
        </div>
        <div className="testimonial-buttons row">
            <div className="testimonial-buttons col-3">
                <input className="col-1 buttons" onClick={()=> setTesti(1)} style={testi===1 ?  {backgroundColor: '#9d426b'} : undefined} type="button" id="testimonials" />
                <input className="col-1 buttons" onClick={()=> setTesti(2)} style={testi===2 ?  {backgroundColor: '#9d426b'} : undefined} type="button" id="testimonials" />
                <input className="col-1 buttons" onClick={()=> setTesti(3)} style={testi===3 ?  {backgroundColor: '#9d426b'} : undefined} type="button" id="testimonials" />
                <input className="col-1 buttons" onClick={()=> setTesti(4)} style={testi===4 ?  {backgroundColor: '#9d426b'} : undefined} type="button" id="testimonials" />
            </div>
            <span className="col-2"></span>
        </div>
    </div>
    )
   
}

export default Testimonials