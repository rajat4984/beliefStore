import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import bannerImage_1 from "./assets/images/poster_3.png";
import banner1_m from "./assets/images/poster_3_m.jpg";
import banner2_m from "./assets/images/poster_2_m.jpg";
import bannerImage_2 from "./assets/images/poster_2.png";
import bannerImage_3 from "./assets/images/poster.png";
import banner3_m from "./assets/images/poster_m.jpg";
import CategoryGrid from "./components/Category";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import whatsapp from "./assets/images/whatsapp.png";

function App() {
  return (
    <>
      <a href="https://wa.me/+919910871770" target="_blank">
        <img src={whatsapp} className="whatsapp" />
      </a>
      <Navbar />
      <Banner bannerImage={bannerImage_1} mobileBanner={banner1_m} />
      <CategoryGrid />
      <Banner bannerImage={bannerImage_2} mobileBanner={banner2_m} />
      <AboutUs />
      <Banner bannerImage={bannerImage_3} mobileBanner={banner3_m} />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
