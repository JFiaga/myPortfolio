import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { expArray } from "../utils/expArray";
import { BiRightArrow } from "react-icons/bi";

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="h-auto bg-secondBlack text-black  pb-[3.125rem]     flex flex-col items-center justify-between md:justify-center   w-[100vw] "
    >
      <div className="max-w-[90rem] w-full flex flex-col space-y-10   items-start   xl:px-24 ">
        <h2 className="text-clampTitle font-bold text-white  capitalize text-center w-full">
          {" "}
          Where I’ve <span className="text-mainGreen "> Worked</span>
        </h2>

        <VerticalTimeline>
          {expArray.map((val: any) => (
            <VerticalTimelineElement
              className="lg:text-mainGreen"
              date={val.date}
              iconStyle={{ background: "black", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <a href={val.link} className=" font-bold text-mainGreen hover:text-mainBlack transition-all duration-500">{val.companyName}</a>
              <h4 className="my-2 font-bold capitalize text-mainBlack">
                {val.role}
              </h4>
              <div className="text-black flex flex-col space-y-5">
                {val.desc.map((value: string) => (
                  <div className=" flex space-x-2 items-center justify-start relative">
                    <BiRightArrow className="text-mainGreen  absolute top-0 rotate-45" />
                    <p>{value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row  items-start  sm:space-y-0  flex-wrap  mt-4 space-y-4 gap-2">
                {val.technos.map((techno: string) => (
                  <button className="bg-mainBlack min-w-fit md:w-[6.25rem] px-2 py-1 mx-2  rounded-sm text-mainGreen font-medium cursor-text">
                    {techno}
                  </button>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experiences;
