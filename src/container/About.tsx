import  { FC } from "react";
import me from '../assets/me.png'

const About: FC = () => {
  return (
    <section
      id="about"
      className="h-auto bg-mainBlack text-white  pb-[3.125rem]     flex flex-col items-center justify-between md:justify-center   w-[100vw] "
    >
      <h2 className="text-clampTitle font-bold text-white  capitalize text-center w-full mb-5">
        more About
        <span className="text-mainGreen"> Me</span>
      </h2>
      <div className="max-w-[90rem] w-full flex flex-col space-y-10 items-center  md:items-start px-8 space-x-5  2xl:px-24 md:flex-row lg:space-y-0 lg:justify-between lg:items-center">
      <div className="hidden lg:block lg:h-[32.75rem] lg:w-[32.75rem] xl:h-[37.5rem] xl:w-[37.5rem] 2xl:h-[43.75rem] 2xl:w-[43.75rem] rounded-[1000%] border-[2.125rem] border-mainGreen   shadow-mainGreen  shadow-2xl   relative animate-pulse2"></div>
        
        <div className="flex flex-col  items-center justify-center gap-4  md:px-0">
          <p className=" text-start  max-w-[31.25rem]  text-white font-semibold font-open text-lg">
            <span>
              I'm a 21-year-old developer living in Cameroon. I've been
              passionate about coding since I was a child, and after my
              secondary high school, it was an obvious choice for me to go into
              computer science at university.
            </span>
            <br />
            <br />
            <span>
              Unfortunately, I was very disappointed to see the total disconnect
              between the courses  we were given (which were from another
              era, with deprecated concepts), and the ones I was learning on
              websites such as Freecodecamp or Openclassroom. So I made the
              resolution to leave university and learn on my own, and it was
              certainly the best decision of my life. Today, I'm a front-end
              developer and use my two best my two best friends React and Next
            </span>
          </p>

          <a
            href="##"
            className="self-start mt-10 border px-4 py-2 rounded-sm border-mainGreen hover:bg-mainGreen font-semibold transition-all duration-500"
          >
            Download My Resume
          </a>
        </div>

                  <div className="lg:hidden h-[300px] w-[350px] border bg-mainGreen border-mainGreen relative duration-300 transition-all rounded-md">
                    <div className="absolute w-full h-full rounded-md overflow-hidden opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-500  hover:shadow-md hover:shadow-mainGreen">
                      <img src={me} className="w-full h-full object-cover rounded-md " alt="Me" />
                    </div>
                     </div>
      </div>
    </section>
  );
};

export default About;
