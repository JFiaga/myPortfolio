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
    absolute h-[2.5rem] w-[2.5rem]  sm:h-[4.6875rem] sm:w-[4.6875rem] shadow-2xl shadow-mainGreen/50 rounded-full`}>
    <img src={icon}
    className={`w-full h-full object-cover rounded-full bg-transparent scale-90 ${imgClass}`}
    alt={alt}
    title={alt}
    />
  </div>
  )
}

export default HomeRotateIcon