import Image from "next/image";
import Hero from "./components/Hero";
import FirstSection from "./components/FirstSection";
import WhyUs from "./components/WhyUs";
import Introduction from "./components/Introduction";
import OurProducts from "./components/OurProducts";
import Ethical from "./components/Ethical";
import ContactUs from "./components/ContactUs";
import GlobalReach from "./components/GlobalReach";
import Certifications from "./components/Certifications";
export default function Home() {
  return (

    <>
      <Hero />
      <Introduction />
      <WhyUs />
      <OurProducts />
      <Ethical />
      <GlobalReach />
      <Certifications />
      <ContactUs />
    </>
  );
}
