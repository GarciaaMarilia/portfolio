
import { useLanguage } from "../contexts/language-context";
import { useResponsive } from "../contexts/responsive-context";

export default function SelectLanguage() {
 const { language, toggleLanguage } = useLanguage();
 const { isMobile } = useResponsive();

 return (
  <div className="flex items-center gap-3">
   <select
    id="language"
    value={language}
    onChange={(e) => toggleLanguage(e.target.value)}
    className="p-2 rounded-md bg-zinc-700"
   >
    <option value="fr">{isMobile ? "🇫🇷" : "🇫🇷 Français"}</option>
    <option value="en">{isMobile ? "🇬🇧" : "🇬🇧 English"}</option>
   </select>
  </div>
 );
}
