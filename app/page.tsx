import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourthSection from "./components/FourthSection/FourthSection";
import FifthSection from "./components/FifthSection/FifthSection";
import SisthSection from "./components/SisthSection/SisthSection";
import SeventhSection from "./components/SeventhSection/SeventhSection";
import EigthSection from "./components/EigthSection/EigthSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
 
    <>
    <Navbar />
    <Banner/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <SisthSection/>
    <SeventhSection/>
    <EigthSection/>
    <Footer/>
    </>
  );
}
