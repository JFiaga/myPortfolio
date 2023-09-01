import React, { FC } from "react";

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
      <div className="max-w-[90rem] w-full flex flex-col-reverse space-y-10   items-start px-16  xl:px-24 lg:flex-row lg:space-y-0 lg:justify-between lg:items-center">
       
          <div className="flex flex-col  items-center justify-center gap-4  md:px-0">
            <p className=" text-start  max-w-[31.25rem]  text-white font-semibold font-open text-lg">
              <span>
                Je suis un jeune développe ur de 20 ans résidant au Cameroun.
                Passionné de code depuis ma tendre enfance, après mes études
                secondaires ce fut une évidence pour moi de me lancer dans
                l'informatique à l'université. Malheureusement grande fut ma
              </span>
              <br />
              <br />
              <span>
                stupéfaction de voir le déphasage total qui existait entre les
                cours que l'on nous dispensait (qui étaient d'une autre époque,
                avec des concepts obsolète), et ceux que j'apprenais sur des
                site web tels que Freecodecamp ou Openclassroom. Alors je pris
                la résolution de quitter la fac pour me former en autodidacte,
                et ce fut certainement la meilleure décision de ma vie.
                Aujourd'hui je suis développeur Front-end et j'utilise au
                quotidien mes deux meilleures amies React et Next
              </span>
            </p>

            <a href="##" className="self-start mt-10 border px-4 py-2 border-mainGreen hover:bg-mainGreen font-semibold transition-all duration-500">Download My Resume</a>
          </div>
        
        <div className="block h-[43.75rem] w-[43.75rem] rounded-[1000%] border-[2.125rem] border-mainGreen   shadow-mainGreen  shadow-2xl   relative animate-pulse2">
        </div>
      </div>
    </section>
  );
};

export default About;
