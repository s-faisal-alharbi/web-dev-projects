import React, { useState } from "react";
import i18n from '../i18n';
import { Switch } from 'antd';
import { use } from 'i18next';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (newLanguage) => {
    // Directly set the new language instead of using e.target.value
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
    localStorage.setItem("lang", newLanguage);
  };

  return (
    <Switch
      checked={selectedLanguage === 'ar'} // Condition for initial state
      onChange={(checked) => {
        chooseLanguage(checked ? 'ar' : 'en'); // Toggle language based on checked state
      }}
    />
  );
};

export default LanguageSelector;
