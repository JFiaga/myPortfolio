import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineGithub, AiOutlineEye, AiOutlineTag } from "react-icons/ai";
import {
  reactPortfolio,
  nextPortfolio,
  // javascriptPortfolio,
  cssPortfolio,
  bootstrapPortfolio,
  tailwindPortfolio,
} from "../assets/dataPortfolio";


const Projets: FC = () => {

  const [selected, setSelected] = useState<string>("react");
  const [data, setData] = useState(reactPortfolio);
  // const [subSelected, setSubSelected] = useState<string>("");

  const lists = [
    {
      id: "react",
      title: "React",
    },
    {
      id: "next",
      title: "Next",
    },
    {
      id: "css",
      title: "CSS/Sass",
    },

    {
      id: "bootstrap",
      title: "Bootstrap",
    },
    {
      id: "tailwind",
      title: "Tailwind",
    },
  ];

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    switch (selected) {
      case "react":
        setData((value) => (value = reactPortfolio));
        break;

      case "next":
        setData((value) => (value = nextPortfolio));
        break;

      // case "javascript":
      //   setData((value) => (value = javascriptPortfolio));
      //   break;

      case "css":
        setData((value) => (value = cssPortfolio));
        break;

      case "bootstrap":
        setData((value) => (value = bootstrapPortfolio));
        break;

      case "tailwind":
        setData((value) => (value = tailwindPortfolio));
        break;

      default:
        setData((value) => (value = reactPortfolio));
    }
  }, [selected]);



  function animatefunc() {
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 250);
  }

  return (
    <section id="projets" className="bg-mainBlack h-auto p-4 pb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center ">
        Mes <span className="text-mainGreen">Projets</span>
      </h2>

      <ul className=" flex w-full items-center flex-wrap justify-center px-3 pt-10 md:pt-12 gap-5 sm:gap-10">
        {lists.map((list, index) => (
          <li
          key={index}
            className={`relative text-white w-[100px] text-center py-2 rounded  border border-transparent  cursor-pointer transition-all duration-500 ${
              list.id === selected
                ? "bg-black/80 hover:border-white/60"
                : "bg-mainGreen hover:bg-mainBlack hover:border-mainGreen"
            }`}
            onClick={() => {
              setSelected((value) => (value = list.id));
              animatefunc();
            }}
          >
            {list.title}
           
          </li>
        ))}
      </ul>

      <motion.div
        animate={animateCard}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-wrap gap-5 items-center  justify-center flex-col md:flex-row my-4"
      >
        {data.map((val, index) => (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            key={index}
            className="shadow-md shadow-mainGreen h-[300px] w-[300px] mt-2 rounded hover:scale-[1.02] transition-all duration-500 flex flex-col"
          >
            <div className="h-2/3 min-h-[2/3] w-full  overflow-hidden rounded">
              <img
                src={val.img}
                alt={val.imgalt}
                className="w-[100%] h-[100%] object-cover transition-all duration-500 hover:scale-110"
              />
            </div>
            <div className=" text-white flex flex-col items-center justify-center  h-[70%] gap-2 ">
              <span className="text-lg md:text-xl  font-bold h-[25px] capitalize mt-2">
                {val.title}
              </span>
              <div className=" h-[40px]  flex items-start justify-center text-sm text-mainGreen flex-wrap">
                {val.techno?.map((item) => (
                  
                  <div
                  key={item}
                  className="flex items-center justify-center mx-1">
                    <AiOutlineTag className="text-white mr-[2px] text-[10px]" />{" "}
                    {item}
                  </div>
                ))}
              </div>
              {/* <p className="text-center h-[80px]">{val.desc}</p> */}
              <div className=" flex justify-center items-center gap-5 py-1 md:py-2">
                <a href={val.codeLink}>
                  {/* <button className=" text-white font-semibold bg-black min-w-[100px] text-center py-1 rounded hover:bg-mainBlack border border-transparent hover:border-white cursor-pointer transition-all duration-500 flex items-center justify-center gap-1 sm:text-lg  px-5"> */}
                  <button className=" text-white  font-semibold bg-black min-w-[100px] text-center py-1 rounded hover:bg-mainBlack border border-transparent hover:border-white cursor-pointer transition-all duration-500 flex items-center justify-center gap-1 sm:text-lg h-[40px]  px-2">
                    <AiOutlineGithub className="text-xl " /> Code
                  </button>
                </a>
                <a href={val.previewLink}>
                  <button className=" text-black h-[40px] hover:text-white font-semibold bg-white min-w-[100px] text-center py-1 rounded hover:bg-mainBlack border border-transparent hover:border-white cursor-pointer transition-all duration-500 flex items-center justify-center gap-1 sm:text-lg  px-2">
                    <AiOutlineEye className="text-xl" /> Preview
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default Projets;
