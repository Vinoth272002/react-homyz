import "./App.css";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Getstared from "./components/Getstared";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Residencies from "./components/Residencies";
import Value from "./components/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Getstared />
      <Footer />
    </div>
  );
}

export default App;
