import Nav from "../Component/Nav";
import Hero from "../Component/Hero";
import Makemoney from "../Component/Makemoney";
import HowItWorks from "../Component/HowITWorks";
import Featured from "../Component/Featured";
import Review from "../Component/Review";
import ReviewSlider from "../Component/ReviewSlider";
import EndSection from "../Component/End";
import Footer from "../Component/Footer";

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