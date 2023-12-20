import React, { useState } from 'react';

const Tools = () => {
  return (
    <section id='tools' className='px-[15px] py-[40px]'>
        <div id="tools-container" className='max-w-[1050px] flex m-auto'>
            <div id="tools-column" className='w-full flex'>
                <div id="tools-info" className='text-white p-[10px] w-full flex flex-wrap'>
                    <div id="sec-tools-title" className='w-full text-center'>
                        <div id="tools-title" className='mb-[40px] w-full'>
                            <h2 className='font-title font-bold text-[7.5vw] md:text-[60px]'>Conocimientos</h2>
                        </div>
                    </div>
                    <div id="tools-learned" className='flex flex-col m-auto w-full border border-white p-[0.5rem]'>
                        <div id='html-box' className='flex cursor-default transition duration-500 hover:text-[#ffdc00] h-[30px] items-center'>
                            <div id='html-logo'>
                                <span className='italic'>// </span><i class="devicon-html5-plain"></i>
                            </div>
                            <div id='html-title'>
                                <span className='ml-1'>html</span>
                            </div>
                        </div>
                        <div id='css-box' className='flex cursor-default transition duration-500 hover:text-[#ffdc00] h-[30px] items-center'>
                            <div id='css-logo'>
                                <span className='italic'>// </span><i class="devicon-css3-plain"></i>
                            </div>
                            <div id='css-title'>
                                <span className='ml-1'>css</span>
                            </div>
                        </div>
                        <div id='js-box' className='flex cursor-default transition duration-500 hover:text-[#ffdc00] h-[30px] items-center'>
                            <div id='js-logo'>
                                <span className='italic'>// </span><i class="devicon-javascript-plain"></i>
                            </div>
                            <div id='js-title'>
                                <span className='ml-1'>javaScript</span>
                            </div>
                        </div>
                        <div id='bstrap-box' className='flex cursor-default transition duration-500 hover:text-[#ffdc00] h-[30px] items-center'>
                            <div id='bstrap-logo'>
                                <span className='italic'>// </span><i class="devicon-bootstrap-plain"></i>
                            </div>
                            <div id='bstrap-title'>
                                <span className='ml-1'>bootstrap</span>
                            </div>
                        </div>
                        <div id='sass-box' className='flex cursor-default transition duration-500 hover:text-[#ffdc00] h-[30px] items-center'>
                            <div id='sass-logo'>
                                <span className='italic'>// </span><i class="devicon-sass-original"></i>
                            </div>
                            <div id='sass-title'>
                                <span className='ml-1'>sass</span>
                            </div>
                        </div>
                        <div id='jq-box' className='flex cursor-default transition duration-500 hover:text-[#ffdc00] h-[30px] items-center'>
                            <div id='jq-logo'>
                                <span className='italic'>// </span><i class="devicon-jquery-plain"></i>
                            </div>
                            <div id='jq-title'>
                                <span className='ml-1'>jQuery</span>
                            </div>
                        </div>
                        <div id='react-box' className='flex cursor-default transition duration-500 hover:text-[#ffdc00] h-[30px] items-center'>
                            <div id='react-logo'>
                                <span className='italic'>// </span><i class="devicon-react-original"></i>
                            </div>
                            <div id='react-title'>
                                <span className='ml-1'>react</span>
                            </div>
                        </div>
                        <div id='tw-box' className='flex cursor-default transition duration-500 hover:text-[#ffdc00] h-[30px] items-center'>
                            <div id='tw-logo'>
                                <span className='italic'>// </span><i class="devicon-tailwindcss-plain"></i>
                            </div>
                            <div id='tw-title'>
                                <span className='ml-1'>tailwind</span>
                            </div>
                        </div>
                        <div id='node-box' className='flex cursor-default transition duration-500 hover:text-[#ffdc00] h-[30px] items-center'>
                            <div id='node-logo'>
                                <span className='italic'>... </span><i class="devicon-nodejs-plain"></i>
                            </div>
                            <div id='node-title'>
                                <span className='ml-1'>nodeJs</span>
                            </div>
                        </div>
                        <div id='mongo-box' className='flex cursor-default transition duration-500 hover:text-[#ffdc00] h-[30px] items-center'>
                            <div id='mongo-logo'>
                                <span className='italic'>... </span><i class="devicon-mongodb-plain"></i>
          
                            </div>
                            <div id='mongo-title'>
                                <span className='ml-1'>mongoDB</span>
                            </div>
                        </div>
                        <div id='sql-box' className='flex cursor-default transition duration-500 hover:text-[#ffdc00] h-[30px] items-center'>
                            <div id='sql-logo'>
                                <span className='italic'>... </span><i class="devicon-mysql-plain"></i>
                            </div>
                            <div id='sql-title'>
                                <span className='ml-1'>mySql</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tools