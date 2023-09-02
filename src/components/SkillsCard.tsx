import React, { FC } from 'react'
import Zoom from 'react-reveal/Zoom';

interface SkillsCardProps{
  title:string,
  imgLinks:string[],
 
}

const SkillsCard:FC<SkillsCardProps> = ({title, imgLinks}) => {


  return (
    <div className=" flex px-2 shadow-sm bg-secondBlack shadow-black w-[90%] py-4 flex-col items-center justify-center text-white">

        <Zoom left cascade>
     <span className=' px-2 mb-[0.625rem] sm:text-[1.25rem] text-center font-bold md:text-[1.5rem]'>{title}</span>
        </Zoom>
   <Zoom cascade right>
   <div className='flex gap-2 flex-wrap justify-center items-center '>
        {imgLinks?.map(value => (     
         <div 
         key={value}
         className=' rounded-full overflow-hidden  w-[3.125rem] h-[3.125rem] '>
          <img
         
         src={value}
         alt='logo'
        
         className="w-full h-full rounded-full object-contain bg-white "   
       /> 
         </div>
        ))}
   </div>
   </Zoom>
  </div>
    )
}
export default SkillsCard