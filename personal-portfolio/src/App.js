import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import { Hotels } from './components/Hotels';
import { HotelsGallery } from './components/HotelsGallery';
import LanguageSelector from './assets/components/LanguageSelector';


function App() {
  return (
    <div className="App">
      
      <NavBar /> 
      {/* <Hotels /> */}
      {/* <HotelsGallery /> */}
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <LanguageSelector />
    </div>
  );
}

export default App;
