import { useLanguage } from "../contexts/language-context";

export default function CardProject(project) {
 const { project: projectData } = project;
 const { t } = useLanguage();
 return (
  <div className="flex flex-col bg-zinc-800 sm:w-[450px] w-[90%] rounded-2xl p-6 shadow-xl shadow-zinc-950 text-white lg:text-2xl text-xl space-y-4 items-center">
   <h1>{projectData.title}</h1>
   <div className="flex space-x-10 space-y-2 lg:text-xl text-sm">
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
    <video autoplay loop controls>
     <source src={projectData.video} type="video/mp4" />
     Your browser does not support the video tag.
    </video>
   )}
  </div>
 );
}
