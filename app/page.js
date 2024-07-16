import Image from "next/image";
import Slider from "./components/Slider";
import Property from "./components/Property";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Slider />
      <Hero/>
      <Property/>
      <div className="h-[300vh]"></div>
      <Footer/>
    </>
  );
}
