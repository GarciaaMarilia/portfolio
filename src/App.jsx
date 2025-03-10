import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Timeline from "./components/career-history";
import { LanguageProvider } from "./contexts/language-context";
import { ResponsiveProvider } from "./contexts/responsive-context";

const router = createBrowserRouter(
 [
  {
   path: "/",
   element: <Home />,
  },
  {
   path: "/projects",
   element: <Projects />,
  },
  {
   path: "/career",
   element: <Timeline />,
  },
 ],
 {
  basename: "/portfolio",
 }
);

function App() {
 return (
  <StrictMode>
   <ResponsiveProvider>
    <LanguageProvider>
     <RouterProvider router={router} />
    </LanguageProvider>
   </ResponsiveProvider>
  </StrictMode>
 );
}

export default App;
