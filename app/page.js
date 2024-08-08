import Slider from "./components/Slider";
import Property from "./components/Property";
import Hero from "./components/Hero";
import Fearures from "./components/Fearures";
import Steps from "./components/Steps";
import Video from "./components/Video";

export default function Home() {
  return (
    <>
      <Slider />
      <Fearures />
      <Hero />
      <Steps />
      <Property />
      <Video />
    </>
  );
}
