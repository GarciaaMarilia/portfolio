import { useLanguage } from "../contexts/language-context";

export default function SelectLanguage() {
 const { language, toggleLanguage, t } = useLanguage();

 return (
  <div className="flex items-center gap-3">
   <label htmlFor="language" className="text-gray-700">
    {t.language}
   </label>
   <select
    id="language"
    value={language}
    onChange={(e) => toggleLanguage(e.target.value)}
    className="p-2 border rounded-md bg-zinc-700"
   >
    <option value="fr">🇫🇷 Français</option>
    <option value="en">🇬🇧 English</option>
   </select>
  </div>
 );
}
