import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react'
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { HotelsGallery } from './components/HotelsGallery';
import { Hotels } from './components/Hotels';

import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'



const languages = [

  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
    dir:'ltr',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
]



function App() {
  const currentLanguageCode = cookies.get('i18next') || 'ar'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'rtl'
    document.title = t('app_title')
  }, [currentLanguage, t])

 
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
    </div>
  );
}

export default App;
