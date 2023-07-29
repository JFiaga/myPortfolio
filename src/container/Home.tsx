import  { FC } from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";


const Home: FC = () => {
  return (
    <section
      id="accueil"
      className="h-auto bg-[#21272f] text-white pt-[220px] md:pt-[200px] pb-[50px] px-5 min-h-[100vh] md:h-auto  gap-[100px] md:gap-5  flex flex-col-reverse items-center justify-between md:justify-center lg:px-[30px] md:flex-row w-[100vw]  "
    >
      <div className="  flex flex-col px-4 items-center sm:items-start text-lg gap-2 md:px-6 md:w-1/2 mb-5 max-w-[1440px]">
        <span>Salut, moi c'est</span>
        <h2 className=" text-mainGreen text-4xl font-bold"> Fiaga Fils</h2>
        <div className="flex">
        <span className="text-2xl sm:text-3xl  text-center sm:text-start font-medium">
          Développeur Front-End 
          <span className="text-mainGreen ">
         
 React - Next
          </span>
        </span>
        </div>
        <p className="font-medium text-white/80 my-5 md:my-10  pr-2   ">
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
          <a href='https://github.com/fiagafils10'>
            <AiOutlineGithub className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a>
          <a href='https://www.linkedin.com/in/fils-fiaga-5862a5249/'>
            <AiOutlineLinkedin className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a>
          {/* <a href="https://www.instagram.com/fiagafils/">
            <AiOutlineInstagram className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a> */}
        </div>
      </div>

    </section>
  );
};
export default Home;


<>

      {/* <div className="h-[50vh]  px-2 md:w-1/2 relative flex justify-center items-center "> */}
        {/* Mobile img */}
        {/* <div className=" md:hidden bg-mainGreen sm:bg-transparent relative  h-[390px] max-w-[400px]  rounded-full   mb-10">
          <motion.div
            variants={rotateCircle}
            initial="initial"
            animate="rotateValue"
            className="hidden sm:block h-full w-full shadow-inner border border-mainGreen  shadow-mainGreen absolute z-[200000] rounded-full"
          ></motion.div>
          <div className="h-full w-full rounded-full overflow-hidden">
            <img
              src={myPicture}
              className="h-full w-full overflow-hidden  object-cover scale-[1.1] translate-y-[-10px]"
              alt=""
            />
          </div>
        </div> */}


        {/* Desktop img */}
  
        {/* <motion.div
          variants={rotateCircle}
          initial="initial"
          animate="rotateValue"
          whileHover={{ rotate: "0deg" }}
          transition={{ duration: 1 }}
          className=" hidden md:block absolute bottom-0 bg-transparent w-[290px] h-[290px]  sm:w-[320px] sm:h-[320px]  md:w-[500px] md:h-[500px] border border-mainGreen rounded-full scale-[0.8] translate-x-[-50%] translate-y-[-50%] shadow-2xl shadow-mainGreen"
        >
          <motion.div
          
          variants={rotateCircle}
          initial="initial"
          animate="spinValue"
          whileHover={{ rotate: "0deg" }}
          transition={{ duration: 1 }}
          className="h-[100%] w-[100%]">
          <HomeRotateIcon
            cssClass="top-4 sm:top-0 "
            icon={reactLogo2}
            alt="react"
          />
          <HomeRotateIcon
            cssClass="top-0 left-[78%] sm:top-0 sm:left-[88%] "
            icon={nextjsLogo}
            imgClass="scale-[1.5]"
            alt="next"
          />
          <HomeRotateIcon
            cssClass="-left-[12%] bottom-[30%] sm:bottom-[12%] "
            icon={redux}
            imgClass="scale-[0.8]"
            alt="Redux Toolkit"
          />
          <HomeRotateIcon
            cssClass="right-[5%] bottom-[5%] sm:-right-[10%] sm:bottom-[12%]"
            icon={twcss}
            alt="Tailwind"
          />
          </motion.div>
          <motion.div className="absolute left bottom-0 bg-transparent w-[98%] h-[98%] border border-mainGreen rounded-full scale-[0.8] z-[100]">

          <div
          className=" hidden md:block overflow-hidden  w-[100%] h-[100%] absolute rounded-full ">
          <img
            src={myPicture}
            className="h-full w-full overflow-hidden   object-cover scale-[1.2]"
            alt=""
          />
        </div>
          </motion.div>

      
        </motion.div> */}
      {/* </div> */}
</>