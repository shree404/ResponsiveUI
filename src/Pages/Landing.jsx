import Nav from "../Component/LandingPage/Nav";
import Hero from "../Component/LandingPage/Hero";
import Makemoney from "../Component/LandingPage/Makemoney";
import HowItWorks from "../Component/LandingPage/HowITWorks";
import Featured from "../Component/LandingPage/Featured";
import Review from "../Component/LandingPage/Review";
import ReviewSlider from "../Component/LandingPage/ReviewSlider";
import EndSection from "../Component/LandingPage/End";
import Footer from "../Component/LandingPage/Footer";

function LandingPage(){
    return(
        <>
        <Nav/>
        <Hero/>
        <Makemoney/>
        <HowItWorks/>
        <Featured/>
        <Review/>
        <ReviewSlider/>
        <EndSection/>
        <Footer/>
        </>
    )
}

export default LandingPage;