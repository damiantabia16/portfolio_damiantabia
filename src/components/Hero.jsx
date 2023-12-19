import React from 'react';

const Hero = () => {
  return (
    <section id='hero' className='px-[15px] font-title'>
        <div id="hero-container" className='min-h-[91.3vh]'>
            <div id="hero-column" className='h-[85vh] w-full flex'>
                <div id="hero-info" className='flex items-center content-center p-[10px] w-full flex-wrap text-white font-bold'>
                    <div id="title" className='w-full'>
                        <h1 className='text-[46px] text-center transition duration-500 hover:text-[#ffdc00] cursor-default md:text-[7.5vw]'>DAMIÁN TABIA</h1>
                    </div>
                    <div id="description" className='w-full text-center'>
                        <span>DESARROLLADOR FRONT END.</span>
                    </div>
                    <div id="interact" className='w-full text-center flex justify-center text-[10px] md:text-[15px] mt-[40px]'>
                        <div className='cursor-pointer p-[15px] mx-[5px] border border-white transition duration-500 hover:bg-white hover:text-[#111111]'>
                            <a href=''>Contactame</a>
                        </div>
                        <div className='cursor-pointer p-[15px] mx-[5px] border border-white transition duration-500 hover:bg-white hover:text-[#111111]'>
                            <a href=''>Descargar CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero