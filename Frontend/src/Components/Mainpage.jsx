import NavigationBar from './NavigationComponent'
import HeroSection from './HeroSection'
import Footer from './Footer'

const MainPage = ({ stateChanger }) => {
  return (
    <div className="min-h-screen bg-transparent">
      <NavigationBar stateChanger={stateChanger} />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default MainPage