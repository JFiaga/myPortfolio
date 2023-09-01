import { FC } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { hardSkills } from "../utils/skillsArr";

const Skills: FC = () => {
  return (
    <section
      id="accueil"
      className="h-auto bg-mainBlack text-white  pb-[50px]     flex flex-col items-center justify-between md:justify-center   w-[100vw]  "
    >
      <h2 className="text-clampTitle font-bold text-white  capitalize text-center w-full mb-5">
        There are my some of my
        <span className="text-mainGreen"> Skills</span>
      </h2>
      <div className="max-w-[1440px] w-full flex  flex-col  lg:flex-row space-y-10 lg:space-y-0   items-start px-16  xl:px-24 justify-center">
        <div className="flex lg:flex-row justify-center lg:space-x-10  w-full flex-col space-y-10 items-center lg:space-y-0 mt-10">
          {hardSkills.map((skills: any) => (
            <div
              key={skills.cardTitle}
              className="h-[25rem] w-[90%] max-w-[20rem]  rounded-md bg-[#21272f] text-white flex flex-col  pt-5"
            >
              <h3 className="text-xl font-bold  text-center ">
                {skills.cardTitle}
              </h3>
              <div className="flex flex-col justify-center h-full space-y-2 items-start">
                {skills.value.map((val: any) => (
                  <div className="flex space-x-2 items-center justify-start ml-5">
                    <div className="text-mainGreen p-1 rounded-full font-bold">
                      <AiOutlineArrowRight />
                    </div>
                    <span className="text-xl font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
