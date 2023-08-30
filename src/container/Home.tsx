import { FC } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {  FaBook,  } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Home: FC = () => {
  return (
    <section
      id="accueil"
      className="h-auto bg-secondBlack text-white pt-[220px] md:pt-[200px] pb-[50px]  min-h-[100vh]    flex flex-col items-center justify-between md:justify-center   w-[100vw] "
    >
      <div className="max-w-[1440px] w-full flex flex-col space-y-10   items-start px-16  xl:px-24">
        <div className="flex flex-col space-y-7  ">
          <span className="text-mainGreen">Hi, my name is</span>
          <div className="flex flex-col items-start">
            <h2 className="  text-clampLg  font-bold"> Fiaga Fils</h2>

            <span className="text-clampLg text-center  font-bold text-opacityColor ">
              I am a Web Artisan
            </span>
          </div>
          <p className="text-opacityColor text-base lg:text-lg max-w-[700px] ">
            Développeur Front depuis près d’un an et aficionado de React Js, je
            mets à disposition de mes clients des interfaces web modernes, avec
            une codebase propre et scalable. Contactez-moi pour tout besoin
            d’une application web utilisant React, Next ou tout simplement du
            pur HTML/CSS, You can contact me{" "}
            <a href="#d" className="text-mainGreen">
              Here
            </a>{" "}
            if you need me to your project
          </p>
        </div>

        <div className="flex items-start justify-start space-x-8">
          <a href="https://github.com/jfiaga" title="see my github">
            <AiOutlineGithub className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a>
          <a href="https://www.linkedin.com/in/fils-fiaga-5862a5249/" title="see my linkedin">
            <AiOutlineLinkedin className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a>
          <a href="https://www.instagram.com/fiagafils/" title="see my instagram">
            <AiOutlineInstagram className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a>
          <a href="https:/littledev.com" title="see my blog">
            <FaBook className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a>
        </div>

      <a href="#experiences" className="text-2xl animate-pulse text-mainGreen self-center pt-5">
        <IoIosArrowDown />
      </a>
      </div>

    </section>
  );
};
export default Home;
