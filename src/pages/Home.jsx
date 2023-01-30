import '../styles/App.css'
import Header from '../components/HeaderComponenet.jsx'
import Slider from '../components/SliderComponenet.jsx'
import Benefits from '../components/BenefitsComponent.jsx'
import Latest from '../components/LatestComponent.jsx'
import Testimonials from '../components/TestimonialsComponent.jsx'

function App() {
 
  
  return (
    <div className="App">
      <Header page={1}/>
      <Slider />
      <Benefits />
      <Latest />
      <Testimonials />
    </div>
  )
}

export default App
