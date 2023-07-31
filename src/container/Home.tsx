import  { FC } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";



const Home: FC = () => {
  return (
    <section
      id="accueil"
      className="h-auto bg-[#21272f] text-white pt-[220px] md:pt-[200px] pb-[50px] px-5 min-h-[100vh] 2xl:min-h-[auto]  gap-[100px] md:gap-5  flex flex-col items-center justify-between md:justify-center lg:px-[30px]  w-[100vw] "
    >
      <div className="max-w-[1440px] flex flex-col px-4 items-center  text-lg gap-2 md:px-6  mb-5 ">
        <span>Hi</span>
        <h2 className=" text-mainGreen text-4xl font-bold"> Fiaga Fils</h2>
        <div className="flex">
        <span className="text-2xl sm:text-3xl  text-center  font-medium">
          Développeur Front-End {" "}
          <span className="text-mainGreen ">
         
 React - Next
          </span>
        </span>
        </div>
        <p className="font-medium text-white/80 my-5 md:my-10  pr-2   text-start sm:text-center">
          Développeur Front depuis près d’un an et aficionado de React Js, je
          mets à disposition de mes clients des interfaces web modernes, avec
          une codebase propre et scalable. Contactez-moi pour tout besoin d’une
          application web utilisant React, Next ou tout simplement du pur
          HTML/CSS
        </p>

        <button className="px-4 bg-mainGreen w-fit py-2 rounded-md shadow-md shadow-mainGreen/30 transition-all duration-500 hover:bg-transparent hover:shadow-md/40 hover:border-mainGreen border border-transparent">
          <a href="#contact">Contactez Moi</a>
        </button>

        <div className="flex mt-4 md:mt-8 items-center justify-start gap-5">
          <a href='https://github.com/jfiaga'>
            <AiOutlineGithub className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a>
          <a href='https://www.linkedin.com/in/fils-fiaga-5862a5249/'>
            <AiOutlineLinkedin className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a>
          <a href="https://www.instagram.com/fiagafils/">
            <AiOutlineInstagram className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a>
           <a href="https:/littledev.com">
            <FaBloggerB className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a>
        </div>
      </div>

      <a href='#experiences' className="text-2xl animate-pulse ">
        <IoIosArrowDown/>
      </a>

    </section>
  );
};
export default Home;


