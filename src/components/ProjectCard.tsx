import { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa";

export type ProjectProps = {
  onView?:boolean;
  projectName: string;
  details: string;
  technologies: string[];
  codeLink: string;
  demoLink: string;
  img: string;
  reverse:boolean;
};

const ProjectCard = ({
  reverse,
  details,
  projectName,
  technologies,
  codeLink,
  demoLink,
  img,
}: ProjectProps) => {
  const [viewMore, setViewMore] = useState(false);
  const [onView, setOnView] = useState(false)
  return (

    <div className={`relative w-full flex flex-col`}
    onMouseEnter={()=> setOnView(val => val = true)}
    onMouseLeave={()=> setOnView(val => val = false)}
    >
       <div className={` hidden 2xl:block absolute z-[1] w-[600px] h-[300px]  mr-2  bg-mainGreen/30 text-black  top-0 ${onView ? ` ${reverse ? '-translate-x-[0%]':'translate-x-[105%]'}  h-[416px] `:'translate-x-[50%] '} ${reverse ? "right-[50%]":''} transition-all duration-500`}>
        <div className={`absolute h-full w-full  z-[10] ${onView ? '':'backdrop-blur-sm'}`}>

        </div>
        <img
          src={img}
          alt="project illustration"
          className={`w-full h-full object-cover   transition-all duration-300 ${onView ?  'opacity-100':'opacity-70'}`}
        />
      </div>
      <div className={`z-[1000] my-10 border border-mainGreen/30 bg-black p-4 w-full md:w-[90%] 2xl:max-w-[600px] max-w-[800px] relative ${reverse ? 'self-center 2xl:self-end':'2xl:self-start self-center'}`}>


<div className={`flex  flex-col space-y-6  z-[1000] w-full h-full relative  `}>
  <a href={codeLink} className="font-semibold text-lg  text-mainGreen hover:text-white">
    {projectName}
  </a>

  <div>
    <p className={`  w-[98%] font-semibold text-opacityColor text-base`}>
      {!viewMore ? details?.substring(0, 200) + ". . . " : details}
    </p>
    <button
      onClick={() => setViewMore((val) => !val)}
      className="text-mainGreen cursor-pointer hover:underline mt-2 inline"
    >
      {viewMore ? "View Less" : "Read More"}
    </button>
  </div>

  <div className="flex flex-wrap justify-start items-start font-bold ">
    {technologies?.map((val: string) => (
      <div className="flex mx-2 mt-1">
        <FaMapPin className="text-mainGreen -rotate-45" />
        <span className="hover:text-mainGreen">{val}</span>
      </div>
    ))}
  </div>
  <div className="flex space-x-2 items-center ">
    <a

      href={codeLink}
      className=" text-black  font-semibold bg-white min-w-[100px] text-center py-2 rounded hover:bg-black hover:text-white border border-transparent hover:border-white cursor-pointer transition-all duration-500 flex items-center justify-center space-x-1  px-2"
    >
      <span>Code</span>
      <AiFillGithub />
    </a>
    <a
      href={demoLink}
      className=" text-black h-[40px] hover:text-white font-semibold bg-white min-w-[100px] text-center py-1 rounded hover:bg-mainBlack border border-transparent hover:border-white cursor-pointer transition-all duration-500 flex items-center justify-center space-x-1 sm:text-lg  px-2  "
    >
      <span>Preview</span>
      <AiFillEye />
    </a>
  </div>
</div>
</div>
    </div>

  );
};

export default ProjectCard;
