import { FC } from "react";
import me from "../assets/me.jpg";

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
        <div className="hidden lg:block lg:h-[524px] lg:w-[524px] xl:h-[600px] xl:w-[600px] 2xl:h-[700px] 2xl:w-[700px] rounded-[1000%] border-[34px] border-mainGreen   shadow-mainGreen  shadow-2xl   relative animate-pulse2 overflow-hidden ">
          <img
            src={me}
            className="h-full w-full object-cover rounded-full scale-75"
            alt="me"
          />
        </div>

        <div className="flex flex-col  items-center justify-center gap-4  md:px-0">
          <p className=" text-start  max-w-[31.25rem]  text-white font-semibold font-open text-lg">
            <span>
              I am a front-end web developer with a bachelor's degree in
              computer science and a passion for code. I specialize in React and
              Next.js, but I am also proficient in Vue JS, Typescript, and
              Express JS. I have experience building a variety of web
              applications, including e-commerce sites, social media platforms,
              and dashboards. I am passionate about creating user-friendly and
              visually appealing web applications. I am also a strong advocate
              for best practices, such as clean coding and code review. I am
              always learning and growing as a developer, and I am excited to
              contribute to innovative and impactful projects.
            </span>
            <br />
            <br />
            <span>
              I am looking for a challenging and rewarding opportunity to work
              on a team of talented developers and build innovative web
              applications. I am also interested in learning more about back-end
              development and full-stack development. If you are looking for a
              front-end developer with a passion for code, I am confident that I
              would be a valuable asset to your team. I am eager to learn and
              grow, and I am committed to producing high-quality work.
            </span>
          </p>

          <a
            href="/fiagafils_pdf.pdf"
            className="self-start mt-10 border px-4 py-2 rounded-sm border-mainGreen hover:bg-mainGreen font-semibold transition-all duration-500"
          >
            Download My Resume
          </a>
        </div>

        <div className="lg:hidden h-[300px] w-[350px] border bg-mainGreen border-mainGreen relative duration-300 transition-all rounded-md">
          <div className="absolute w-full h-full rounded-md overflow-hidden opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-500  hover:shadow-md hover:shadow-mainGreen">
            <img
              src={me}
              className="w-full h-full object-cover rounded-md "
              alt="Me"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
