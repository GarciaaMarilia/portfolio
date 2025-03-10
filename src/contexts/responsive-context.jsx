import { createContext, useContext, useEffect, useState } from "react";

const ResponsiveContext = createContext();

export function ResponsiveProvider({ children }) {
 const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
  const handleResize = () => {
   setIsMobile(window.innerWidth < 800);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 });

 return (
  <ResponsiveContext.Provider value={{ isMobile }}>
   {children}
  </ResponsiveContext.Provider>
 );
}

export function useResponsive() {
 return useContext(ResponsiveContext);
}
