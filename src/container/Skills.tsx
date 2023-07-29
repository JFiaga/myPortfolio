import React, { FC } from "react";
import Zoom from 'react-reveal/Zoom';

import {
  bootstrapLogo,
  cssLogo,
  htmlLogo,
  jsLogo,
  sassLogo,
  tailwindcssLogo,
  tsLogo,
  reactLogo2,
  nextLogo2,
  reduxLogo,
  mui5Logo,
  styledcomponentLogo,
  framerMotionLogo,
  gatsbyLogo,
  sanityLogo,
  gitLogo,
  gitlabLogo,
  githubLogo,
  nodejsLogo,
  expressLogo,
  figmaLogo,
  photoshopLogo,
} from "../assets";
import { SkillsCard } from "../components";

const Skills: FC = () => {
  const frontEndImgArr = [htmlLogo, cssLogo, sassLogo, jsLogo, tsLogo, tailwindcssLogo, bootstrapLogo]
  const reactImgArr = [
    reactLogo2,
    nextLogo2,
    reduxLogo,
    mui5Logo,
    styledcomponentLogo,
    framerMotionLogo,
    gatsbyLogo,
    sanityLogo,
  ];
  const otherImgArr = [  gitLogo,
    gitlabLogo,
    githubLogo,
    nodejsLogo,
    expressLogo,
    photoshopLogo,]
  return (
    <section id="compétences" className="bg-secondBlack h-auto p-4 pb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center ">
        Mes <span className="text-mainGreen"> Compétences</span>
      </h2>

      <div className="flex flex-col xl:flex-row mt-10 items-center justify-center gap-10 md:gap-5 px-5 ">
        <div className="flex flex-col bg-mainBlack gap-5 md:shadow-sm md:shadow-black p-4 w-[90%] md:w-1/2">
          <h3 className="font-semibold  text-center text-xl md:text-2xl text-white ">
            Compétences <span className="text-mainGreen">Techniques</span>
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
       
          <SkillsCard
           title='Fondamentaux du Front-End'
           imgLinks={frontEndImgArr}
           />
           <SkillsCard
          imgLinks={reactImgArr}
           title='React, Next et leur écosystème'/>
           <SkillsCard
          imgLinks={otherImgArr}
           title='Outils et autres techno'/>
       
         
          </div>
        </div>
        <div className="flex flex-col bg-mainBlack gap-5 md:shadow-sm md:shadow-black p-4 w-[90%] md:w-1/2 ">
          <h3 className="font-semibold  text-center text-xl md:text-2xl text-white ">
            Compétences <span className="text-mainGreen">Humaines</span>
          </h3>
          <Zoom cascade left>

          <div className="flex xl:flex-col xl:h-[415px] flex-wrap gap-5 items-center justify-center ">
            {["autonome", "sociable", "curieux", "respectueux", "Pédagogue", 'bilingue'].map((val, index) => (
              <span
              key={index}
              className=" md:text-xl shadow-sm bg-secondBlack xl:px-10 shadow-black w-[150px] xl:w-[300px] py-2 md:py-2 text-center  text-white capitalize md:font-bold"
              >
                {val}
              </span>
            ))}
          </div>
            </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Skills;
