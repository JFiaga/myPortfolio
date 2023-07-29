import React, {FC} from 'react' 
import { ServicesCard } from '../components';
import Zoom from 'react-reveal/Zoom';
import {reactLogo2, nextLogo2,integrationLogo2} from '../assets'


const Services:FC = ()=>  {

return ( 
<section
id='services'
className='bg-secondBlack h-[auto] p-4 pb-8 min-w-[100vw]'> 

<Zoom>
 
<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center '>Mes <span className='text-mainGreen'> Services</span> </h2>
        </Zoom>

<Zoom left cascade>

    <div className=' flex flex-col text-white md:flex-row items-center justify-center flex-wrap mt-10 gap-5' >
    <div className='bg-mainBlack w-[90%] h-[320px] max-w-[500px] flex flex-col items-center justify-center p-2 gap-4 rounded-md shadow-md shadow-black'>
    <ServicesCard
    title='Developpement React js'
    desc= 'A l’aide de React et de son écosystème, je vous fournirai des sites ultra dynamique et fidèle aux maquettes fournis par le designer.'
    alt='react logo'
    img={reactLogo2}
    minstyle='w-[90%] object-cover'

    />
    </div>
 <div className='bg-mainBlack w-[90%] h-[320px] max-w-[500px] flex flex-col items-center justify-center p-2 gap-4 rounded-md shadow-md shadow-black'>
   <ServicesCard
    title='Developpement Next js'
    desc= 'Grace à Next, je mettrai à votre disposition des applications beaucoup plus performantes, où chaque milliseconde de chargement sera optimisé pour le rendu rapide de votre site, avec le meilleur SEO possible'
    alt='next logo'
    img={nextLogo2}
    minstyle='w-[70px] bg-white rounded-full '

    />
   </div>
    
 <div className='bg-mainBlack w-[90%] h-[320px] max-w-[500px] flex flex-col items-center justify-center p-2 gap-4 rounded-md shadow-md shadow-black'>
 <ServicesCard
    title='Integration Web'
    desc= 'Vous souhaitez une solution simple, utilisant du pur HTML/CSS/JavaScript ou d’autre outils tels que  Sass, GSAP, Bootstrap ou Tailwind ? Pas d’inquiétude ça aussi je sais faire'
    alt='next logo'
    img={integrationLogo2}
    minstyle='rounded-full w-full object-cover scale-[1.2] mt-2 rotate-[20deg]'

  />
 </div>
 
    </div>
</Zoom>

</section> 
)
} 
 export default Services 