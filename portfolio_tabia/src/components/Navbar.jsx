import React, { useState } from 'react';
import { HiBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [ ulDisplay, setUlDisplay ] = useState(false);
    function handleDisplay() {
        setUlDisplay(!ulDisplay);
        setUlClose(false);
    }

    const [ ulClose, setUlClose ] = useState(false);
    function handleClose() {
        setUlClose(!ulClose);
        setUlDisplay(false);
    }

  return (
    <header>
        <div id="header-wrapper" className='h-[80px] px-[20px] md:px-[40px] md:h-[130px]'>
            <div id="inner-wrapper" className='h-full flex'>
                <div id="left-elements" className='flex font-bold items-center'>
                    <div id="bars" className='m-[0.6rem] min-w-[54px] md:hidden'>
                        <HiBars2 onClick={handleDisplay} className='cursor-pointer text-white text-center w-[30px] h-[30px] transition duration-500 hover:text-[#ffdc00]'/>
                    </div>
                    <div id="name" className='flex items-center text-[2em]'>
                        <a href="" className='text-[#ffdc00] transition duration-500 hover:text-[#b29a00]'>Tabia.</a>
                    </div>
                </div>
                <div id="right-elements" className='flex w-full h-full'>
                    <nav id='site-nav' className='w-full h-full'>
                        <div id="mobile-nav" className={`fixed w-full h-screen fixed top-0 left-0 z-[30] overflow-hidden transition-transform duration-500 ${
                        ulDisplay ? 'translate-x-0' : '-translate-x-full'}`}>
                            <div id="close-bar" className={`bg-white h-[100px] w-full flex items-center justify-between px-[20px] md:hidden transition-transform duration-500 ${
                            ulDisplay ? 'translate-x-0' : '-translate-x-full'}`}>
                                <div id="btn">
                                    <IoMdClose onClick={handleClose} className='cursor-pointer w-[30px] h-[30px] transition duration-500' />    
                                </div>
                            </div>
                            <div id="mobile-overlay" className={`bg-white absolute w-full h-screen px-[20px] transition-transform duration-500 md:hidden ${
                            ulDisplay ? 'translate-x-0' : '-translate-x-full'}`}>
                                <div id="menu-wrapper">
                                    <ul id="mobile-nav" className='font-bold'>
                                        <li id='mbl-hero' className='mbl-item'>
                                            <a onClick={handleClose} href="#hero">
                                                <span>#inicio</span>
                                            </a>
                                        </li>
                                        <li id='mbl-tools' className='mbl-item'>
                                            <a onClick={handleClose} href="#tools">
                                                <span>#conocimientos</span>
                                            </a>
                                        </li>
                                        <li id='mbl-projects' className='mbl-item'>
                                            <a onClick={handleClose} href="#projects">
                                                <span>#proyectos</span>
                                            </a>
                                        </li>
                                        <li id='mbl-contact' className='mbl-item'>
                                            <a onClick={handleClose} href="#contact">
                                                <span>#contacto</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="copyright" className='mt-[20px] text-[.94rem]'>
                                    &copy;2023. Hecho por <a href="" className='transition duration-500 hover:text-[#b29a00]'>Damián Tabia</a>.<br /> Todos los derechos reservados.
                                </div>
                            </div>
                        </div>
                        <div id="desktop-nav" className='hidden md:flex text-white w-full h-full flex items-center px-[20px]'>
                            <div id="inner-nav" className='w-full flex justify-center'>
                                <ul id="full-nav" className='flex font-bold'>
                                    <li id='dsk-hero' className='dsk-item'>
                                        <a href="#hero">
                                            <span># inicio</span>
                                        </a>
                                    </li>
                                    <li id='dsk-tools' className='dsk-item'>
                                        <a href="#tools">
                                            <span># conocimientos</span>
                                        </a>
                                    </li>
                                    <li id='dsk-projects' className='dsk-item'>
                                        <a href="#projects">
                                            <span># proyectos</span>
                                        </a>
                                    </li>
                                    <li id='dsk-contact' className='dsk-item'>
                                        <a href="#contact">
                                            <span># contacto</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar