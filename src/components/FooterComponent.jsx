import '../styles/Footer.css'
import teamImg from "../assets/img/testimonials/1.jpg"
import gpsIco from "../assets/ico/gps.png"
import phoneIco from "../assets/ico/phone.png"
import aboutIco from "../assets/ico/about-sm.png"
import contactIco from "../assets/ico/contact-sm.png"
import emailIco from "../assets/img/social-icons/email.png"
import facebookIco from "../assets/img/social-icons/facebook.png"
import skypeIco from "../assets/img/social-icons/skype.png"
import twitterIco from "../assets/img/social-icons/twitter.png"

function Footer(){

    return(
        <div id="footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-10 row">
                    <div className="col-sm-12 col-md-3 footer">
                        <h4>about us</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, eius repellendus saepe molestiae quisquam eaque doloribus fuga sit deserunt! Nam doloribus nihil animi voluptas unde vero corrupti sint voluptates et.</p>
                        <a href="#">Read more...</a>
                    </div>
                    <div className="col-sm-12 col-md-3 footer">
                        <h4>LATEST TWEETS</h4>
                        <p>Loading...</p>
                    </div>
                    <div className="col-sm-12 col-md-3 footer">
                        <h4>our team</h4>
                        <img alt="Team" className="col-sm-1 col-md-4 col-lg-3" src={teamImg} />
                        <img alt="Team" className="col-sm-1 col-md-4 col-lg-3" src={teamImg} />
                        <img alt="Team" className="col-sm-1 col-md-4 col-lg-3" src={teamImg} />
                        <img alt="Team" className="col-sm-1 col-md-4 col-lg-3" src={teamImg} />
                        <img alt="Team" className="col-sm-1 col-md-4 col-lg-3" src={teamImg} />
                        <img alt="Team" className="col-sm-1 col-md-4 col-lg-3" src={teamImg} />
                    </div>
                    <div className="col-sm-12 col-md-3 footer contact">
                        <h4>CONTACT US</h4>
                        <div>
                            <img alt="Gps" className="col-md-2 col-lg-1" src={gpsIco} width="20px" />
                            <p className="col-9 col-lg-10"> Address: Lorem city, Ipsum street, 123 </p>
                        </div>
                        <div>
                            <img alt="Phone" className="col-md-2 col-lg-1" src={phoneIco} width="20px" />
                            <p className="col-9 col-lg-10">Phone: 123456789012 </p>
                        </div>
                        <div>
                            <img alt="About" className="col-md-2 col-lg-1" src={aboutIco} />
                            <p className="col-9 col-lg-10">Skype: Lorem_ipsum</p>
                        </div>
                        <div>
                            <img alt="Contact" className="col-md-2 col-lg-1" src={contactIco} />
                            <p className="col-9 col-lg-10">Email: quas_sunt_culpa.com </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="container copyright">
            <div className="row">
                <p className="col-sm-6  ">Copyright 2012 Andia - All rights reserved. Template by Azmind.</p>
                <span className="col-sm-5 col-md-4 col-lg-3">
                    <a href="#"><img alt="Em" className="col-sm-1" src={emailIco} /></a>
                    <a href="#"><img alt="Fb" className="col-sm-1" src={facebookIco} /></a>
                    <a href="#"><img alt="Sk" className="col-sm-1" src={skypeIco} /></a>
                    <a href="#"><img alt="Tw" className="col-sm-1" src={twitterIco} /></a>
                </span>
            </div>
        </div>
    </div>
   
    )
}

export default Footer