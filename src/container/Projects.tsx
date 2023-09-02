import { FC } from "react";
import ProjectCard, { ProjectProps } from "../components/ProjectCard";
import { projectArr } from "../utils/projectArray";

const Projects: FC = () => {
  return (
    <section
      id="projects"
      className="h-auto bg-secondBlack text-white  pb-[3.125rem]  min-h-[100vh]    flex flex-col items-center justify-between md:justify-center   w-[100vw] "
    >
      <div className="max-w-[90rem] w-full flex flex-col space-y-10   items-start px-16  xl:px-24">
        <h2 className="text-clampTitle font-bold text-white  capitalize text-center w-full">
          {" "}
          some of my Noteworthy{" "}
          <span className={`text-mainGreen`}>Projects</span>
        </h2>

        <div className=" w-full flex flex-col space-y-10 items-center 2xl:items-end justify-center">
          {projectArr.map((val: ProjectProps) => (
            <ProjectCard
              projectName={val.projectName}
              details={val.details}
              technologies={val.technologies}
              codeLink={val.codeLink}
              demoLink={val.demoLink}
              img={val.img}
              reverse={val.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
