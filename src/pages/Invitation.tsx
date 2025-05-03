import MusicPlayer from "../components/MusicPlayer";
import Logo from "../assets/images/logo.webp"
import { ChevronDown } from "lucide-react";
function Invitation() {
    return (
        <>
            <MusicPlayer/>

            {/* Opening */}
            <div className="text-center">
                <h1 className="title text-3xl">សិរីមង្គល<br></br>ពិធីពិសាស្លាដក់កន្សែង</h1>
                <img src={Logo} className="w-64 max-w-md h-auto mx-auto" alt="" />
                <div className="flex justify-center items-center gap-12">
                    <div className="groom-name">
                        <p className="sub-title">កូនប្រុសនាម</p>
                        <h1 className="title">នៅ គីមសេង</h1>
                    </div>
                    <div className="bride-name">
                        <p className="sub-title">កូនស្រីនាម</p>
                        <h1 className="title">រិន សានាថ</h1>
                    </div>
                </div>
                <div className="datetime text-center">
                    <p className="sub-title text-base">ដែលប្រព្រឹត្តទៅនៅ</p>
                    <p className="title">​ថ្ងៃទី៣១​ ខែឧសភា ឆ្នាំ២០២៥</p>
                </div>
                <div className="flex flex-col items-center justify-center animate-float">
                    <ChevronDown size={56} className="text-sand"/>
                    <p className="sub-title text-base">ទាញចុះក្រោម</p>
                </div>
            </div>

            {/* Album */}
            <div>
                <h1 className="title text-center">កម្រងរូបភាពអនុស្សាវរីយ៍</h1>
            </div>

            {/* Family */}
            <div>
                <h1 className="title text-center">សិរីមង្គលពិធីពិសាស្លាដក់កន្សែង</h1>
                <div className="flex justify-around items-center">
                    <div className="text-left">
                        <h1 className="title text-lg">លោក នៅ ធី</h1>
                        <h1 className="title text-lg">លោកស្រី គ្រី សុខហេង</h1>
                    </div>
                    <div className="text-right">
                        <h1 className="title text-lg">លោក នៅ ធី</h1>
                        <h1 className="title text-lg">លោកស្រី គ្រី សុខហេង</h1>
                    </div>
                </div>
                <p className="sub-title text-center font-normal text-base">សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ចូលរួមជាភ្ញៀវអធិបតីភាព និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យសិរិសួស្តីជ័យមង្គលក្នុងពិធីពិសាស្លាដក់កន្សែងកូនប្រុសកូនស្រីរបស់ខ្ញុំ</p>
                <div className="flex justify-around items-center">
                    <div>
                        <p className="sub-title">កូនប្រុសនាម</p>
                        <h1 className="title text-center">នៅ<br></br>គីមសេង</h1>
                    </div>
                    <img src={Logo} className="w-32 h-auto" alt="" />
                    <div className="br-name">
                        <p className="sub-title">កូនស្រីនាម</p>
                        <h1 className="title text-center">រិន<br></br>សានាថ</h1>
                    </div>
                </div>
                <div className="datetime text-center">
                    <p className="sub-title text-base">ដែលប្រព្រឹត្តទៅ ចាប់ពីម៉ោង ៧ព្រឹក</p>
                    <p className="title">​ថ្ងៃទី៣១​ ខែឧសភា ឆ្នាំ២០២៥</p>
                </div>
            </div>

            {/* Agenda */}
            <div>
                <h1 className="title text-center">ដំណើរការកម្មវិធី</h1>
            </div>

        </>
    )
}

export default Invitation;