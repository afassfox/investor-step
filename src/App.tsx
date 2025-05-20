import Navbar from "./components/elements/Navbar";
import Hero from "./components/sections/Hero";
import Logos from "./components/sections/Logos";
import OurJourney from "./components/sections/OurJourney";
import Services from "./components/sections/Services";
import Testimonial from "./components/sections/Testimonial";
import Solutions from "./components/sections/Solutions";
import JoinUs from "./components/sections/JoinUs";
import Motivation from "./components/sections/Motivation";
import OurTeam from "./components/sections/OurTeam";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/elements/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <Services />
      <OurJourney />
      <Testimonial />
      <Solutions />
      <JoinUs />
      <Motivation />
      <OurTeam />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
