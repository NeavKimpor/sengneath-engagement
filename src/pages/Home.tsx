import React from "react";
import OpeningButton from "../components/OpeningButton";
import Logo from "../assets/images/logo.webp"

function Home() {
    return (
        <div className="home flex flex-col items-center" >
            <img src={Logo} className="logo w-64 max-w-md h-auto mx-auto pt-16 pb-8" alt="" />
            <p className="kantumruy-regular text-[#d3c8b3] text-md">សូមគោរពអញ្ជើញ</p>
            <h1 className="moul-regular text-[#f4ead0] text-xl mt-3">សិរីមង្គលពិធីពិសាស្លាដក់កន្សែង</h1>
            <div className="pt-8 pb-10">
                <OpeningButton/>
            </div>
            <p className="kantumruy-regular text-[#d3c8b3] text-center text-sm">សូមមេត្តាចុចលើអេក្រង់ ដើម្បីបើកធៀបអេឡិចត្រូនិច</p>
        </div>
    )
}

export default Home;