import Header from "../components/header";
import projects from "../locales/projects";
import CardProject from "../components/card-project";
import { useLanguage } from "../contexts/language-context";

export default function Projects() {
 const { t } = useLanguage();
 return (
  <>
   <Header />
   <div className="flex flex-col items-center space-y-10 py-10 sm:px-30">
    <div className="flex lg:text-4xl text-2xl text-center">
     <p className="text-white font-bold">{t.projects}</p>
    </div>
    <div className="flex flex-wrap gap-10 justify-center">
     {projects &&
      projects.map((project, index) => {
       return <CardProject key={index} project={project} />;
      })}
    </div>
   </div>
  </>
 );
}
