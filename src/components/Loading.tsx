import logo from '../assets/logo.png'



const Loading = () => {
  return (
    <div className='h-[90vh] max-h-[100vh] flex-col overflow-hidden w-[100vw] flex items-center justify-center bg-mainBlack'>
            <div className="h-[5rem] w-[5rem] overflow-hiddem animate-pulse">
            <img src={logo} alt="Logo" className='w-full h-full object-cover animate-bounce' />

            </div>
            <div className='w-[90vw] relative h-[25px] border-mainGreen border  max-w-[500px] rounded-[20px] overflow-hidden flex items-center justify-center'>
       <span className='text-center  text-white z-[100] relative'>Loading ...</span>
              <div className='absolute bg-mainGreen h-full  top-0 left-0 z-[10]  transition-all  rounded-[20px] animate-loading '>
              </div>
            </div>
    </div>
  )
}

export default Loading