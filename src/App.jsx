import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Projects from "./pages/projects";
import { LanguageProvider } from "./contexts/language-context";

const router = createBrowserRouter([
 {
  path: "/",
  element: <Home />,
 },
 {
  path: "/projects",
  element: <Projects />,
 },
]);

function App() {
 return (
  <StrictMode>
   <LanguageProvider>
    <RouterProvider router={router} />
   </LanguageProvider>
  </StrictMode>
 );
}

export default App;
