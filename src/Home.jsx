import './App.css'
import'./HeaderComponenet.jsx'
import './SliderComponenet'
import Header from './HeaderComponenet.jsx'
import Slider from './SliderComponenet'
import Benefits from './BenefitsComponent'



function App() {
 
  
  return (
    <div className="App">
      <Header page={1}/>
      <Slider></Slider>
      <Benefits></Benefits>
    </div>
  )
}

export default App
