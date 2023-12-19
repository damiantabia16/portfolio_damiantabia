import React, { useState } from 'react';
import cinewatt from '../project-img/cinewatt2.jpg';
import cinewattVid from '../project-vid/cinewatt-portfolio.mp4'

const Projects = () => {
  return (
    <section id='projects' className='px-[15px] py-[40px]'>
        <div id="projects-container" className='max-w-[1050px] flex m-auto'>
            <div id="projects-column" className='w-full flex'>
                <div id="all-projects" className='text-white p-[10px] w-full flex flex-wrap'>
                    <div id="sec-project-title" className='w-full text-center'>
                        <div id="project-title" className='mb-[40px] w-full'>
                            <h2 className='font-title font-bold text-[7.5vw] md:text-[60px]'>Proyectos</h2>
                        </div>
                    </div>
                    <div id="projects-done" className='w-full'>
                        <div id="done-container">
                            <div id="first-project" className='py-[20px]'>
                                <div id="portfolio-first-project">
                                    <div id='first-project-img' className='w-full min-h-[80px]'>
                                        <a href="">
                                            <video className='max-w-[540px] max-h-[405px] w-full h-full' onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} poster={cinewatt} src={cinewattVid}></video>
                                        </a>
                                    </div>
                                    <div id='first-project-details' className='max-w-[540px] p-[20px] font-title bg-[#282828]'>
                                        <div id="first-project-title">
                                            <h3>Cinewatt</h3>
                                        </div>
                                        <div id="first-project-ambit">
                                            <span className='text-[.85rem]'>Desarrollo web</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="second-project"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects