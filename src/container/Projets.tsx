import  { FC } from "react";
import ExperiencesCard, { ExperienceProps } from "../components/ExperiencesCard";
import { projectArr } from "../utils/projectArray";

const Projets: FC = () => {
  return (
    <section
      id="accueil"
      className="h-auto bg-secondBlack text-white  pb-[50px]  min-h-[100vh]    flex flex-col items-center justify-between md:justify-center   w-[100vw] "
    >
      <div className="max-w-[1440px] w-full flex flex-col space-y-10   items-start px-16  xl:px-24">
        <h2 className="text-clampTitle font-bold text-white  capitalize text-center w-full">
          {" "}
          some of my Noteworthy <span className="text-mainGreen">Projects</span>
        </h2>

        <div className=" w-full flex flex-col space-y-10 items-center justify-center">
          {projectArr.map((val:ExperienceProps) => (
            <ExperiencesCard
            projectName={val.projectName}
            details={val.details}
            technologies={val.technologies}
            codeLink={val.codeLink}
            demoLink={val.demoLink}
            img={val.img}
          />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projets;
