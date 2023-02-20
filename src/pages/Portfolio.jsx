
import Header from '../components/HeaderComponenet.jsx'
import PortfolioMain from '../components/PortfolioMainComponent.jsx'
import Footer from '../components/FooterComponent.jsx'

function Portfolio() {
 
  
  return (
    <div className="App">
      <Header page={2}/>
      <PortfolioMain />
      <Footer />
    </div>
  )
}

export default Portfolio