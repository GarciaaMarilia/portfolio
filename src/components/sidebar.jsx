import { useState } from "react";
import { AlignLeft, FlagTriangleRight, House, Laptop, X } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/language-context";

export default function Sidebar() {
 const { t } = useLanguage();
 const navigate = useNavigate();
 const [isOpen, setIsOpen] = useState(false);

 const handleNavigation = (route) => {
  switch (route) {
   case "home":
    navigate("/");
    break;
   case "projects":
    navigate("/projects");
    break;
   case "career":
    navigate("/career");
    break;
  }
 };

 return (
  <>
   <button onClick={() => setIsOpen(true)} className="text-white text-2xl">
    <AlignLeft />
   </button>

   <div
    className={`fixed inset-0 bg-zinc-950 bg-opacity-50 z-40 transition-opacity ${
     isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    onClick={() => setIsOpen(false)}
   ></div>

   <aside
    className={`fixed top-0 left-0 h-full w-72 bg-zinc-900 text-white shadow-lg z-50 p-5 transform ${
     isOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300`}
   >
    <button
     onClick={() => setIsOpen(false)}
     className="text-xl absolute top-4 right-4"
    >
     <X />
    </button>

    <nav className="mt-12 space-y-2">
     <div className="flex flex-col items-center">
      <img
       src="/portfolio/img/profile.png"
       alt="Profile"
       className="w-40 h-40 rounded-full object-cover mb-6"
      />
      <h1 className="text-center pb-4">{t.title} </h1>
     </div>
     <button
      className="block p-2 bg-zinc-950 hover:bg-zinc-800 rounded-2xl w-full"
      onClick={() => handleNavigation("home")}
     >
      <div className="flex flex-row items-center gap-2 px-4">
       <House className="size-4" />
       <p className="text-lg">{t.home}</p>
      </div>
     </button>
     <button
      className="block p-2 bg-zinc-950 hover:bg-zinc-800 rounded-2xl w-full"
      onClick={() => handleNavigation("projects")}
     >
      <div className="flex flex-row items-center gap-2 px-4">
       <Laptop className="size-4" />
       <p className="text-lg">{t.projects}</p>
      </div>
     </button>
     <button
      className="block p-2 bg-zinc-950 hover:bg-zinc-800 rounded-2xl w-full"
      onClick={() => handleNavigation("career")}
     >
      <div className="flex flex-row items-center gap-2 px-4">
       <FlagTriangleRight className="size-4" />
       <p className="text-lg">{t.career}</p>
      </div>
     </button>
    </nav>
   </aside>
  </>
 );
}
