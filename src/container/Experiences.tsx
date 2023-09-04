import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { extArray } from "../utils/expArray";

type Props = {};

const Experiences = (props: Props) => {
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
          {extArray.map((val: any) => (
            <VerticalTimelineElement
              className="lg:text-mainGreen"
              date="2010 - 2011"
              iconStyle={{ background: "black", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="text-black">{val.companyName}</h3>
              <h4 className="text-black">{val.role}</h4>
              <p className="text-black">{val.desc}
              </p>

              <div className="flex flex-col sm:flex-row  items-start space-y-2 sm:space-x-2 sm:space-y-0  flex-wrap justify-start mt-4" >
               {val.technos.map((techno:string) => (
                 <button className="bg-mainBlack w-fit md:w-[6.25rem] px-2 py-1 rounded-sm text-mainGreen font-medium">{techno}</button>
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
