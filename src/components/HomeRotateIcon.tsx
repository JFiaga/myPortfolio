import React, {FC} from 'react'

type Props = {
    icon:any,
    cssClass:string,
    imgClass?:string,
    alt:string
}

const HomeRotateIcon:FC<Props> = ({icon, cssClass,imgClass,alt}) => {
  return (
    <div className={`
    ${cssClass} 
    absolute h-[40px] w-[40px]  sm:h-[75px] sm:w-[75px] shadow-2xl shadow-mainGreen/50 rounded-full`}>
    <img src={icon}
    className={`w-full h-full object-cover rounded-full bg-transparent scale-90 ${imgClass}`}
    alt={alt}
    title={alt}
    />
  </div>
  )
}

export default HomeRotateIcon