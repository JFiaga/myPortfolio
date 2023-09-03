import { FC } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

import { IoIosArrowDown } from "react-icons/io";

const Home: FC = () => {
  return (
    <section
      id="home"
      className="h-auto bg-secondBlack text-white pt-[13.75rem] md:pt-[12.5rem] pb-[3.125rem]  min-h-[100vh]    flex flex-col items-center justify-between md:justify-center   w-[100vw] "
    >
      <div className="max-w-[90rem] w-full flex flex-col space-y-10   items-start px-16  xl:px-24">
        <div className="flex flex-col space-y-7  ">
          <span className="text-mainGreen">Hi, my name is</span>
          <div className="flex flex-col items-start">
            <h2 className="  text-clampLg  font-bold"> Jayden Fiaga</h2>

            <span className="text-clampLg text-center  font-bold text-opacityColor ">
              I am a Web Artisan
            </span>
          </div>
          <p className="text-opacityColor text-base lg:text-lg max-w-[43.75rem] ">
            I'm a <span className="text-mainGreen"> React <span className="text-opacityColor">/</span> Vue</span> frontend developer. I create complex, scalable and
            reliable applications with these frameworks, and the implementation
            of different testing methodologies with tools like{" "}
            <span className="text-mainGreen">
              cypress, vitest, jest{" "}
              <span className="text-opacityColor">and</span> react testing
              librairy
            </span>
            . You can contact me {"  "}
            <a href="#contact" className="text-mainGreen">
              Here
            </a>{" "}
            if you need me to your project
          </p>
        </div>

        <a
          href="https://littledev.com"
          className="flex  items-center justify-center space-x-2 border border-mainGreen px-6 py-4 rounded-md hover:bg-mainGreen font-medium text-white transition-all duration-500"
        >
          <BsArrowUpRightCircle className="text-2xl" />
          <span>Visit my blog</span>
        </a>

        <a
          href="#projects"
          className="text-2xl animate-pulse text-mainGreen self-center pt-5"
        >
          <IoIosArrowDown />
        </a>
      </div>
    </section>
  );
};
export default Home;
