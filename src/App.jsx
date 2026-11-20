import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import LoveGuidance from "./pages/LoveGuidance";
import LostLove from "./pages/LostLove";
import MoneyProsperity from "./pages/MoneyProsperity";
import LuckSuccess from "./pages/LuckSuccess";
import SpiritualCleansing from "./pages/SpiritualCleansing";
import SpiritualProtection from "./pages/SpiritualProtection";
import TraditionalHealing from "./pages/TraditionalHealing";
import SouthAfrica from "./pages/SouthAfrica";
import Germany from "./pages/Germany";
import USA from "./pages/USA";
import Zimbabwe from "./pages/Zimbabwe";
import Namibia from "./pages/Namibia";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/love-spells" element={<LoveGuidance />} />
          <Route path="/lost-love" element={<LostLove />} />
          <Route path="/money-spells" element={<MoneyProsperity />} />
          <Route path="/luck-success" element={<LuckSuccess />} />
          <Route
  path="/spiritual-cleansing"
  element={<SpiritualCleansing />}
/>
<Route
  path="/protection"
  element={<SpiritualProtection />}
/>
<Route
  path="/traditional-healing"
  element={<TraditionalHealing />}
/>
<Route
  path="/traditional-healer-south-africa"
  element={<SouthAfrica />}
/>
<Route
  path="/traditional-healer-germany"
  element={<Germany />}
/>
<Route
  path="/traditional-healer-usa"
  element={<USA />}
/>
<Route
  path="/traditional-healer-zimbabwe"
  element={<Zimbabwe />}
/>
<Route
  path="/traditional-healer-namibia"
  element={<Namibia />}
/>
<Route
  path="/testimonials"
  element={<Testimonials />}
/>
<Route
  path="/contact"
  element={<Contact />}
/>
<Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>

          {/* Pages will be added progressively */}
        </Routes>
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;