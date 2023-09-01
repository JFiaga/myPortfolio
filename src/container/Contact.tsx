import { FC } from "react";
import { AiFillTwitterCircle, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";


const Contact: FC = () => {


  return (
    <div
      id="contact"
      className="overflow-hidden relative bg-mainBlack h-auto py-10 flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-7 font-bold text-white text-center ">
        Contact Me <span className="text-mainGreen"> Here</span>{" "}
      </h2>
      <a href="mailto:@fiagafils@gmail.com" className=" flex items-center justify-center space-x-2 text-xl text-mainGreen bg-secondBlack px-2  rounded-md">
        <AiOutlineMail/> <span>fiagafils@gmail.com</span>
      </a>
      <span className="font-bold md:text-2xl text-white my-5">Or</span>
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
          <a href="https://twitter.com/xJaydenFx?t=cPdBy-2xqDv6_LPEciDEWw&s=09" title="see my instagram">
            <AiFillTwitterCircle className="text-black hover:text-mainGreen text-4xl transition-all duration-500 cursor-pointer hover:bg-black bg-white p-1 scale-125 rounded-full" />
          </a>
      
        </div>
 
      </div>
  );
};
export default Contact;
