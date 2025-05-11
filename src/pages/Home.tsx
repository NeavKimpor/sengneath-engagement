import React from "react";
import OpeningButton from "../components/OpeningButton";
import WaxSealButton from "../components/WaxSealButton";
import Logo from "/logo-md.png"

function Home() {
    
    return (
        <div className="min-h-screen bg-no-repeat bg-cover bg-center" style={{}}>
            <div className="home flex flex-col items-center" >
                <img src={Logo} className="logo w-80 max-w-md h-auto mx-auto pt-16 pb-8" alt="" />
                <p className="kantumruy-regular text-[#d3c8b3] text-md">សូមគោរពអញ្ជើញ</p>
                <h1 className="moul-regular text-[#f4ead0] text-xl mt-3">សិរីមង្គលពិធីពិសាស្លាដក់កន្សែង</h1>
                <div className="pt-8 pb-10">
                    <WaxSealButton/>
                </div>
                <p className="kantumruy-regular text-[#d3c8b3] text-center text-sm">សូមមេត្តាចុចលើអេក្រង់ ដើម្បីបើកធៀបអេឡិចត្រូនិច</p>
            </div>
        </div>
        

    )
}

export default Home;
