import NavigationBar from "./NavigationComponent";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const MainPage = ( {stateChanger} ) => {

    return (

        <div>

            <NavigationBar  stateChanger={stateChanger}/>
            <HeroSection />
            <Footer/>

        </div>


    )

}

export default MainPage