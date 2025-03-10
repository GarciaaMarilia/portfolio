import { Github, Linkedin, Mail } from "lucide-react";

import Header from "../components/header";
import { useLanguage } from "../contexts/language-context";

export default function Home() {
 const { t } = useLanguage();
 return (
  <>
   <Header />
   <div className="flex flex-col items-center text-white pb-12">
    <div className="flex lg:flex-row flex-col items-center py-10 gap-10 justify-between w-[100%] lg:px-20 px-6">
     <div className="flex flex-col items-center gap-10 lg:px-20">
      <p className="lg:text-4xl text-xl">{t.welcome}</p>
      <img
       src="/portfolio/img/profile.png"
       alt="Profile"
       className="lg:w-60 lg:h-60 w-40 h-40 rounded-full object-cover"
      />
     </div>
     <div className="flex lg:flex-row flex-col lg:space-x-14 gap-10">
      <div className="flex flex-col bg-zinc-800 lg:w-[500px] rounded-2xl p-6 shadow-xl shadow-zinc-900 lg:text-2xl text-xl space-y-4 items-center text-center">
       <h1 className="font-semibold">{t.aboutTitle}</h1>
       {t.aboutText.map((item, index) => {
        return (
         <p key={index} className="text-sm">
          {item}
         </p>
        );
       })}
      </div>
      <div className="flex flex-col bg-zinc-800 lg:w-[500px] rounded-2xl p-6 shadow-xl lg:text-2xl text-xl shadow-zinc-900 space-y-4 items-center text-center">
       <h1 className="font-semibold">{t.frontTechTitle}</h1>
       <p className="text-sm">{t.frontTech}</p>
       <h1 className="font-semibold">{t.backTechTitle}</h1>
       <p className="text-sm">{t.backTech}</p>
       <h1 className="font-semibold">{t.databasesTitle}</h1>

       <p className="text-sm">{t.databases}</p>
       <h1 className="font-semibold">{t.toolsTitle}</h1>
       <p className="text-sm">{t.tools}</p>
       <h1 className="font-semibold">{t.languagesTitle}</h1>
       <p className="text-sm">{t.languages}</p>
      </div>
     </div>
    </div>
    <div className="flex flex-col items-center space-y-4">
     <h1 className="lg:text-2xl">
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
   </div>
  </>
 );
}
