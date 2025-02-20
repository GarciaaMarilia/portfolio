import { createContext, useContext, useState } from "react";

import translations, { LanguagesOptions } from "../locales/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
 const [language, setLanguage] = useState(LanguagesOptions.FRANCAIS);

 const toggleLanguage = (lang) => {
  setLanguage(lang);
 };

 return (
  <LanguageContext.Provider
   value={{ language, toggleLanguage, t: translations[language] }}
  >
   {children}
  </LanguageContext.Provider>
 );
}

export function useLanguage() {
 return useContext(LanguageContext);
}
