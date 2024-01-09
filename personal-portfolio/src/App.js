import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import LanguageSelector from './assets/components/LanguageSelector';
import cookies from 'js-cookie'
// import { Hotels } from './components/Hotels';
// import { HotelsGallery } from './components/HotelsGallery';




function App() {
  // const currentLanguageCode = cookies.get('i18next') || 'ar'
  // const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  // useEffect(() => {
  //   console.log('Setting page stuff')
  //   document.body.dir = currentLanguage.dir || 'rtl'
  //   document.title = t('app_title')
  // }, [currentLanguage, t])
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
