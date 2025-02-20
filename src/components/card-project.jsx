import { useLanguage } from "../contexts/language-context";

export default function CardProject(project) {
 const { project: projectData } = project;
 const { t } = useLanguage();
 return (
  <div className="flex flex-col bg-zinc-800 w-[450px] rounded-2xl p-6 shadow-2xl text-white font-mono space-y-4 items-center">
   <h1>{projectData.title}</h1>
   <div className="space-x-10">
    <a
     target="_blank"
     href={projectData.front}
     className=" hover:text-zinc-900"
    >
     {t.front}
    </a>
    {projectData.back && (
     <a
      target="_blank"
      href={projectData.back}
      className=" hover:text-zinc-900"
     >
      {t.back}
     </a>
    )}
   </div>
   {projectData.image ? (
    <img src={projectData.image} alt="Pr Tracker Project" />
   ) : (
    <video autoplay loop>
     <source src={projectData.video} type="video/mp4" />
     Your browser does not support the video tag.
    </video>
   )}
  </div>
 );
}
