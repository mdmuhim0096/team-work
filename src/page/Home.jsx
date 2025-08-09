import Nav from "../component/Nav";
import Hero from "../component/Hero";
import About from "../component/About";
import OurPeople from "../component/OurPeople";
import We from "../component/We";
import Team from "../component/Team";
import FAQ from "../component/FAQ";
import Subscribe from "../component/Subscribe";
import Footer from "../component/Footer";
import ContactSummary from "../component/ContactSummary";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <div className="w-full h-auto overflow-hidden pt-12">
        <About />
      </div>
      <div className="w-full h-auto overflow-hidden pt-12">
        <OurPeople />
      </div>
      <We />
      <Team />
      <FAQ />
      <ContactSummary/>
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home;