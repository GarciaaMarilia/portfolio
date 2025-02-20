import Header from "../components/header";
import projects from "../locales/projects";
import CardProject from "../components/card-project";
import { useLanguage } from "../contexts/language-context";

export default function Projects() {
 const { t } = useLanguage();
 return (
  <>
   <Header />
   <div className="flex flex-col items-center space-y-10 py-10">
    <div className="flex font-mono text-4xl text-center">
     <p className="text-white">{t.projects}</p>
    </div>
    <div className="flex flex-wrap gap-6 justify-center">
     {projects &&
      projects.map((project) => {
       return <CardProject project={project} />;
      })}
    </div>
   </div>
  </>
 );
}
