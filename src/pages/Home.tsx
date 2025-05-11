import React from "react";
import OpeningButton from "../components/OpeningButton";
import WaxSealButton from "../components/WaxSealButton";
import Logo from "/logo-md.png"
import flower1 from '../assets/images/upperflower.png'
import bird1 from '/bird1.png'
import { motion } from "framer-motion"

function Home() {
    
    return (

        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <div className="bg-[url('/frontbg.png')] min-h-screen w-auto bg-cover bg-fixed bg-no-repeat" style={{}}>
                <div className="items-center text-center py-24" >                
                    <div className="md:mt-24">
                        <p className="moul-regular text-nude3 text-[1.4rem] md:text-3xl lg:text-5xl">សិរីមង្គល</p>
                        <h1 className="moul-regular text-nude3 text-[1.4rem] mt-3 md:text-3xl lg:text-5xl lg:mt-10">ពិធីពិសាស្លាដក់កន្សែង</h1>
                    </div>

                    <img src={Logo} className="w-48 mx-auto block mt-6 md:w-72 lg:w-1/2 lg:mt-24" alt="" />
                    
                    <p className="moulpali-medium text-nude2 text-sm mt-8 md:text-xl md:mt-16 lg:text-3xl">សូមគោរពអញ្ជើញ</p>
                    
                    <div className="pb-10">
                        <WaxSealButton/>
                    </div>
                    <p className="metal-regular text-nude1 text-center text-sm leading-loose md:text-xl md:leading-10 lg:text-3xl lg:leading-loose">សូមមេត្តាចុចលើអេក្រង់<br></br>ដើម្បីបើកធៀបអេឡិចត្រូនិច</p>
                </div>
                
            </div>
        </motion.div>

    )
}

export default Home;
