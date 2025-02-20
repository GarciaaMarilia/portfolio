import { useState } from "react";
import { AlignLeft, House, Laptop, X } from "lucide-react";

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
  }
 };

 return (
  <>
   <button onClick={() => setIsOpen(true)} className="text-white text-2xl">
    <AlignLeft />
   </button>

   <div
    className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
     isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    onClick={() => setIsOpen(false)}
   ></div>

   <aside
    className={`fixed top-0 left-0 h-full w-64 bg-zinc-900 text-white shadow-lg z-50 p-5 transform ${
     isOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300`}
   >
    <button
     onClick={() => setIsOpen(false)}
     className="text-xl absolute top-4 right-4"
    >
     <X />
    </button>

    <nav className="mt-8 space-y-4">
     <button
      className="block p-2 hover:bg-zinc-950 rounded w-full"
      onClick={() => handleNavigation("home")}
     >
      <div className="flex flex-row items-center gap-2">
       <House className="size-6" />
       <p className="text-2xl">{t.home}</p>
      </div>
     </button>
     <button
      className="block p-2 hover:bg-zinc-950 rounded w-full"
      onClick={() => handleNavigation("projects")}
     >
      <div className="flex flex-row items-center gap-2">
       <Laptop className="size-6" />
       <p className="text-2xl">{t.projects}</p>
      </div>
     </button>
    </nav>
   </aside>
  </>
 );
}
