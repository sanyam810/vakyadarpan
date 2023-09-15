import React from 'react'
import {motion} from 'framer-motion';

import {styles} from '../styles'
import { NewsCanvas } from "./canvas";

// a=top-[120px]
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 {} max-w-7xl mx-auto flex flex-col  items-center gap-5`}>
            {/* <div className='flex flex-col justify-center items-center gap-8'> */}
                <div>
                    <h1 className='text-6xl font-bold text-white font-futura'>Vakyadarpan 1.0</h1>
                </div>
                <div>
                    <p className='text-3xl text-gray-400 font-futura'>Press to impress: Transform Words into Dynamic Visuals</p>
                </div>
                <div>
                    <button className='bg-white text-black rounded-lg px-6 py-3 font-bold'>Get Started</button>
                </div>
            {/* </div> */}
        </div>
        <NewsCanvas/>
    </section>
  )
}

export default Hero;