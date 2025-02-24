import React from "react";
import { Circle } from "lucide-react";

import Header from "./header";
import { useLanguage } from "../contexts/language-context";

export default function Timeline() {
 const { t } = useLanguage();
 return (
  <>
   <Header />

   <div className="max-w-4xl mx-auto p-6 text-white">
    <h2 className="text-2xl font-bold text-center mb-8 "> {t.career} </h2>
    <div className="relative border-l-2 border-white">
     {t.timelineEvents.map((event, index) => (
      <div key={index} className="ml-6 mb-6 relative">
       <Circle className="absolute -left-6 top-0 w-5 h-5" />
       <div className="bg-zinc-950 hover:bg-zinc-800 p-4 shadow-md rounded-lg">
        <p className="text-sm">{event.date}</p>
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p>{event.description}</p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </>
 );
}
