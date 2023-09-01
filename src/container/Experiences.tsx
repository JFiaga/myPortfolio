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
      id="accueil"
      className="h-auto bg-secondBlack text-black  pb-[50px]     flex flex-col items-center justify-between md:justify-center   w-[100vw] "
    >
      <div className="max-w-[1440px] w-full flex flex-col space-y-10   items-start px-16  xl:px-24">
        <h2 className="text-clampTitle font-bold text-white  capitalize text-center w-full">
          {" "}
          Where I’ve <span className="text-mainGreen">Worked</span>
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

              <div className="flex flex-wrap justify-start mt-4" >
               {val.technos.map((techno:string) => (
                 <button className="bg-mainBlack w-fit md:w-[100px] px-2 py-1 rounded-sm text-mainGreen font-medium mr-4">{techno}</button>
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
