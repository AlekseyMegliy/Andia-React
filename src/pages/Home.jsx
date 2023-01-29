import '../styles/App.css'
import Header from '../components/HeaderComponenet.jsx'
import Slider from '../components/SliderComponenet.jsx'
import Benefits from '../components/BenefitsComponent.jsx'
import Latest from '../components/LatestComponent.jsx'


function App() {
 
  
  return (
    <div className="App">
      <Header page={1}/>
      <Slider />
      <Benefits />
      <Latest />
    </div>
  )
}

export default App
