import { Route, Routes } from "react-router-dom";
import Header from "../Components/header";
import HeroSection from "../Components/heroSection";
import Frame from "../Components/Frame";
import PowerfullAifeature from "../Components/powerfullAifeature";
import LinkdinStratigy from "../Components/LinkdinStratigy";
import Footer from "../Components/footer";

const Homepage=()=>{
   return(<div className="bg-slate-100">
   <Header/>
   <HeroSection/>
   <Frame/>
   <PowerfullAifeature/>
   <LinkdinStratigy/>
   <Footer/>
   </div>
   )
}
export default Homepage