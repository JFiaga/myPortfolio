import React, { FC } from 'react'



const About:FC = () => {
  return (
    <section className="bg-secondBlack h-auto p-4 pb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-7 font-bold text-white text-center ">
                 <span className='capitalize'>à</span> Propos de <span className="text-mainGreen"> Moi</span>
      </h2>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-4 px-4 md:px-0'>
                    <p className=' text-center  max-w-[500px] text-white'>
                    Je suis un jeune développeur de 20 ans résidant au Cameroun. Passionné de code depuis ma tendre enfance, après mes études secondaires ce fut une évidence pour moi de me lancer dans l'informatique à l'université. Malheureusement grande fut ma stupéfaction de voir le déphasage total qui existait entre les cours que l'on nous dispensait (qui étaient d'une autre époque, avec des concepts obsolète), et ceux que j'apprenais sur des site web tels que Freecodecamp ou Openclassroom. Alors je pris la résolution de quitter la fac pour me former en autodidacte, et ce fut certainement la meilleure décision de ma vie. Aujourd'hui je suis développeur Front-end et j'utilise au quotidien mes deux meilleures amies React et Next
                    </p>

                    {/* <div className='hidden md:block h-[400px] w-1/2 bg-white/10'>

                    </div> */}
      </div>
    </section>
  )
}

export default About