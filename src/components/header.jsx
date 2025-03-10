import Sidebar from "./sidebar";
import SelectLanguage from "./select-language";
import { useLanguage } from "../contexts/language-context";
import { useResponsive } from "../contexts/responsive-context";

export default function Header() {
 const { t } = useLanguage();
 const { isMobile } = useResponsive();

 return (
  <header className="flex bg-zinc-950 px-4 text-white py-8 shadow-md">
   <div className="container mx-auto flex justify-between items-center">
    <div className="flex gap-4">
     <Sidebar />
     <h1 className="text-xl font-bold">
      {isMobile ? t.titleMobile : t.title}
     </h1>
    </div>
    <SelectLanguage />
   </div>
  </header>
 );
}
