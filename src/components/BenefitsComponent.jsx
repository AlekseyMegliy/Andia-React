import { Link, Route } from 'react-router-dom'
import '../styles/Benefits.css'
import JsonInfo from '../../jsoninform.json'
import eye from '../assets/ico/eye.png'
import layout from '../assets/ico/layout.png'
import awesome from '../assets/ico/awesome.png'
import print from '../assets/ico/print.png'


function Benefits(){
    const benefImgs = [eye, layout, awesome, print]
    return (
        <div className="container block-benefits">
            <h1>We are <span>Andia</span>, a super cool design agency.</h1>
            <h3>We design beautiful websites, logos and prints. Your project is safe with us.</h3>
            <div className="row">
                <span className="col-sm-0 col-md-1 "></span>
                <div className="row col-sm-12 col-md-10">

                     {Object.keys(JsonInfo.benefitInfos).map((item, index) => (
                        <div className="col-sm-12 col-md-3 benefits" key={index}>
                            <div>
                            <img class="col-2 col-sm-1 col-md-4  col-lg-3" src={benefImgs[index]}/>
                            <h4>{JsonInfo.benefitInfos[index+1].header}</h4>
                            <p>{JsonInfo.benefitInfos[index+1].mainText}</p>
                            <Link to='/'>Read more</Link>
                            </div>
                        </div>
                    ))}

                </div>
                <span className="col-sm-5 col-md-1 "></span>
            </div>
        </div>
    )
}

export default Benefits