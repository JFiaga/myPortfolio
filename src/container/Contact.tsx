import React, { useState,useRef, FC } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

const Contact: FC = () => {

  const [message, setMessage] = useState(false)

  if(message){
    setTimeout(() => {
      setMessage(()=> false)
    }, 2500);
  }

  const form =useRef<any>()

  const sendEmail = () => {
  

    emailjs
      .sendForm(
        'service_ob5g8i4',
        "template_ijuanrp",
        form.current,
        "H-GVFOfl5YIDqAIVt"
      )
      .then(
        (result:any) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error:any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="overflow-hidden relative bg-mainBlack h-auto py-10 flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-7 font-bold text-white text-center ">
        Prenons <span className="text-mainGreen"> contact</span>{" "}
      </h2>
      <div className=" flex items-center justify-center gap-2 text-mainGreen bg-secondBlack px-2 py-2 rounded-md">
        <AiOutlineMail/> fiagafils@gmail.com
      </div>
      <form
      onSubmit={()=>sendEmail}
      ref={form}
        action=""
        className="flex flex-col items-center justify-start pt-[20px] w-[90%] h-[400px] max-w-[1020px] px-5  gap-4"
      >
        <div className=" flex flex-col sm:flex-row w-full gap-3 sm:gap-5">
          <input
          name="name"
            className="w-full sm:w-1/2 outline-none border-none py-2 rounded-sm capitalize font-semibold px-2 bg-white text-black focus-within:shadow-md focus-within:shadow-mainGreen/30 transition-all duration-300"
            type="text"
            placeholder="Votre Nom"
          />
          <input
          name="email"
            className="w-full sm:w-1/2 outline-none border-none py-2 rounded-sm font-semibold px-2 bg-white text-black focus-within:shadow-md focus-within:shadow-mainGreen/30 transition-all duration-300"
            type="email"
            placeholder="Votre Email"
          />
        </div>
        <div className="w-full ">
          <input
          name="mission"
            className="w-full outline-none border-none py-2 rounded-sm  font-semibold px-2 bg-white text-black focus-within:shadow-md focus-within:shadow-mainGreen/30 transition-all duration-300"
            placeholder="Type De Mission Ex:Freelance"
          />
        </div>
        <textarea
        name="message"
          className="w-full min-h-[200px] outline-none border-none py-2 rounded-sm font-semibold px-2 bg-white text-black focus-within:shadow-md focus-within:shadow-mainGreen/30 transition-all duration-300"
          placeholder="Votre Message"
        ></textarea>

        <button
        type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            setMessage(() =>true)
            sendEmail()
          }
          }
          className="px-8 bg-mainGreen w-fit py-2 rounded-md shadow-md shadow-mainGreen/30 transition-all duration-500 hover:bg-transparent hover:shadow-md/40 hover:border-mainGreen border border-transparent capitalize mb-2 text-white "
        >
          Envoyer
        </button>
        
      </form>
     {message &&  <div className=" fixed  top-0 w-full h-full bg-transparent backdrop-blur-sm">
      <div className=" w-[90%]  gap-5 max-w-[400px] h-[300px] bg-mainBlack absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[999] shadow shadow-mainGreen flex flex-col items-center justify-center">
       <FaCheckCircle className="text-[70px] sm:text-[100px] text-mainGreen"/>
       <span className="text-white font-medium text-xl text-center break-words">Merci de m'avoir sollicité, je vous repondrai d'ici quelques minutes</span>
       <button     className="px-8 bg-mainGreen w-fit py-2 rounded-md shadow-md shadow-mainGreen/30 transition-all duration-500 hover:bg-transparent hover:shadow-md/40 hover:border-mainGreen border border-transparent capitalize mb-2 text-white "
        onClick={()=>setMessage(()=>false)}
       >Ok</button>
      </div>
      </div>}
    </div>
  );
};
export default Contact;
