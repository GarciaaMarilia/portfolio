import { Github, Linkedin, Mail } from "lucide-react";

import Header from "../components/header";
import { useLanguage } from "../contexts/language-context";

export default function Home() {
 const { t } = useLanguage();
 return (
  <>
   <Header />
   <div className="flex flex-col items-center py-10 space-y-10 text-white">
    <p className="text-white text-3xl">{t.welcome}</p>
    <img
     src="/portfolio/img/profile.png"
     alt="Profile"
     className="w-60 h-60 rounded-full object-cover"
    />
    <div className="flex items-center text-center px-16">
     <p className="text-2xl">{t.aboutText}</p>
    </div>
    <h1 className="text-xl">
     <strong>{t.contact}</strong>
    </h1>
    <div className="flex flex-row gap-4">
     <a href="https://www.linkedin.com/in/mmariliagarcia/">
      <Linkedin className="size-8" />
     </a>
     <a href="https://github.com/GarciaaMarilia">
      <Github className="size-8" />
     </a>
     <a href="mailto:garciaamarilia@gmail.com">
      <Mail className="size-8" />
     </a>
    </div>
   </div>
  </>
 );
}
