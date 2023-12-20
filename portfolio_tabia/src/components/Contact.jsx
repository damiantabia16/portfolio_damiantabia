import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='px-[15px] py-[40px]'>
        <div id="contact-container" className='max-w-[1050px] flex m-auto'>
            <div id="contact-column" className='w-full flex items-center justify-center'>
                <div id="contact-me" className='text-center'>
                    <div id="available">
                        <h3 className='text-white font-title text-[28px] text-center font-bold'>Disponible para realizar trabajos freelance</h3>
                    </div>
                    <div id="contact-fonts" className='text-white py-[20px] text-[20px]'>
                        <a className='underline underline-offset-4 transition duration-500 hover:text-[#ffdc00]' href="mailto:damiantabia16@gmail.com">
                            damiantabia16@gmail.com
                        </a>
                        <p id='wp-li-gh' className='flex flex-col w-full my-[10px] mx-auto'>
                            <a href="">whatsapp</a>
                            <a href="">linkedIn</a>
                            <a href="">gitHub</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact