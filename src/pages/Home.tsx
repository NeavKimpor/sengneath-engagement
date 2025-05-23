import WaxSealButton from "../components/WaxSealButton";
import Logo from "/logo-md.png"
import { motion } from "framer-motion"

function Home() {
    
    return (

        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <div className="bg-[url('/frontbg.png')] min-h-screen bg-fixed bg-cover bg-no-repeat bg-center lg:bg-[url('/frontbgland.png')] lg:bg-cover">
                <div className="items-center text-center py-9" >                
                    <div className="lg:mt-2">
                        <p className="moul-regular text-nude3 text-[1.4rem] md:text-3xl lg:text-4xl">សិរីមង្គល</p>
                        <h1 className="moul-regular text-nude3 text-[1.4rem] mt-3 md:text-3xl lg:text-4xl lg:mt-10">ពិធីពិសាស្លាដក់កន្សែង</h1>
                    </div>

                    <img src={Logo} className="w-48 mx-auto block mt-6 md:w-56 lg:w-80" alt="" />
                    
                    <p className="moulpali-medium text-nude2 text-sm mt-8 md:text-xl md:mt-6 lg:text-xl lg:mt-6">សូមគោរពអញ្ជើញ</p>
                    
                    <div className="pb-3">
                        <WaxSealButton/>
                    </div>
                    <p className="metal-regular text-nude1 text-center text-sm leading-loose md:text-lg md:leading-10 lg:text-xl lg:leading-loose">សូមមេត្តាចុចលើអេក្រង់<br></br>ដើម្បីបើកធៀបអេឡិចត្រូនិច</p>
                </div>
                
            </div>
        </motion.div>

    )
}

export default Home;
