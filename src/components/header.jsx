import Sidebar from "./sidebar";
import SelectLanguage from "./select-language";
import { useLanguage } from "../contexts/language-context";

export default function Header() {
 const { t } = useLanguage();
 return (
  <header className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-800 px-4 text-white py-8 shadow-md">
   <div className="container mx-auto flex justify-between items-center">
    <div className="flex flex-row gap-3">
     <Sidebar />
     <h1 className="text-xl font-bold">{t.title}</h1>
    </div>
    <SelectLanguage />
   </div>
  </header>
 );
}
