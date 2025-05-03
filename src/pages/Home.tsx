import React from "react";
import OpeningButton from "../components/OpeningButton";
import Logo from "../assets/images/logo.webp"

function Home() {
    return (
        <div className="home flex flex-col items-center">
            <img src={Logo} className="w-64 max-w-md h-auto mx-auto pt-16 pb-8" alt="" />
            <p className="sub-title">សូមគោរពអញ្ជើញ</p>
            <h1 className="title">សិរីមង្គលពិធីពិសាស្លាដក់កន្សែង</h1>
            <div className="pt-8 pb-10">
                <OpeningButton/>
            </div>
            <p className="sub-title text-center font-normal text-base pt-4">សូមមេត្តាចុចលើអេក្រង់ ដើម្បីបើកធៀបអេឡិចត្រូនិច</p>
        </div>
    )
}

export default Home;