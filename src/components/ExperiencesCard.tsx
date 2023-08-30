import { useState } from "react";
import { AiFillEye, AiFillGithub, AiFillTablet } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa";
import { hoobank } from "../assets";

type Props = {};

const ExperiencesCard = (props: Props) => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className="border border-mainGreen/30 p-4 w-[90%]  relative ">
     <div className="flex  flex-col space-y-6  relative   z-[1000] w-full h-full">
     <h2 className="font-semibold text-lg capitalize">Project Name</h2>

<div>
  <p className={` overflow-hidden w-[95%]  `}>
    <span>
      {" "}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dignissimos autem, suscipit architecto recusandae corrupti modi
      excepturi magni tempora voluptate illo sapiente facere consequatur.
      Eveniet impedit amet, quaerat quos iusto ipsam quasi distinctio
      voluptatum blanditiis eos, consectetur sapiente excepturi quis quas
      molestiae asperiores natus laudantium praesentium esse quia totam
      dignissimos aut? tempora voluptate illo sapiente facere consequatur.
      Eveniet impedit amet, quaerat quos iusto ipsam quasi distinctio
      voluptatum blanditiis eos, consectetur sapiente excepturi quis quas
      molestiae asperiores
    </span>
    {!viewMore && '. . .'}
    {viewMore && (
      <span>
        natus laudantium praesentium esse quia totam dignissimos aut?
        tempora voluptate illo sapiente facere consequatur. Eveniet
        impedit amet, quaerat quos iusto ipsam quasi distinctio voluptatum
        blanditiis eos, consectetur sapiente excepturi quis quas molestiae
        asperiores natus laudantium praesentium esse quia totam
        dignissimos aut?
      </span>
    )}
  </p>
  <button
    onClick={() => setViewMore((val) => !val)}
    className="text-mainGreen cursor-pointer hover:underline mt-2"
  >
    {viewMore ? "View Less" : "Read More"}
  </button>
</div>

<div className="flex space-x-2">
  {["React", "Redux"].map((val: string) => (
    <div className="flex">
      <FaMapPin className="text-mainGreen -rotate-45" />
      <span className="hover:text-mainGreen">{val}</span>
    </div>
  ))}
</div>
<div className="flex space-x-2 items-center ">
  <a
    href="link"
    className=" text-white  font-semibold bg-black min-w-[100px] text-center py-2 rounded hover:bg-mainBlack border border-transparent hover:border-white cursor-pointer transition-all duration-500 flex items-center justify-center space-x-1  px-2"
  >
    <span>Code</span>
    <AiFillGithub />
  </a>
  <a
    href="link"
    className=" text-black h-[40px] hover:text-white font-semibold bg-white min-w-[100px] text-center py-1 rounded hover:bg-mainBlack border border-transparent hover:border-white cursor-pointer transition-all duration-500 flex items-center justify-center space-x-1 sm:text-lg  px-2  "
  >
    <span>Demo</span>
    <AiFillEye />
  </a>
</div>
     </div>
     <div className="h-full w-full absolute  left-0 top-0 bg-mainGreen opacity-10 overflow-hidden">
        <img src={hoobank} alt="project illustration" className="w-full h-full object-cover opacity"/>
     </div>
    </div>
  );
};

export default ExperiencesCard;
