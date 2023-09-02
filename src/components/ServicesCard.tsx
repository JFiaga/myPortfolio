import {FC} from 'react' 


interface ServicesCardProps {
    title:string,
    desc:string,
    alt:string,
    img?:string
    minstyle?:string
}

const ServicesCard:FC<ServicesCardProps> = ({title,desc, alt, img,minstyle})=>  {

   
return ( 
    <>
    <div className='h-[6.25rem] w-[6.25rem] overflow-hidden '>

    <img src={img} alt={alt}  className={minstyle} />
    </div>
    
    <h3 className=' text-lg sm:text-xl font-bold'>{title}</h3>
    <p className='text-center text-[0.875rem] md:text-[1rem] text-white/80'>{desc}</p>

    <button className="px-4 bg-mainGreen/90 w-fit py-2 rounded-md shadow-md shadow-mainGreen/30 transition-all duration-500 hover:bg-transparent hover:shadow-md/40 hover:border-mainGreen border border-transparent capitalize mb-2  ">
            <a href="#projets"
            
            >voir les projets</a>
        </button>

    </>

)
} 
 export default ServicesCard 