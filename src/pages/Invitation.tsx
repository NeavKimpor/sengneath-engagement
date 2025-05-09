import MusicPlayer from "../components/MusicPlayer";
import Logo from "../assets/images/logo.webp"
import { ChevronDown, Heart } from "lucide-react";
function Invitation() {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-fixed bg-[#F9F3EC]">
            <MusicPlayer/>
            <div className="px-4 py-20 bg-cover bg-center bg-no-repeat bg-fixed​" style={{backgroundImage: 'url("/nudefloral.png")'}}>
                {/* Opening */}
                <div className="text-center">
                    
                    <div className="moulpali-medium text-xl text-nude2">
                        <div>សិរីមង្គល</div>
                        <div className="mt-2">ពិធីពិសាស្លាដក់កន្សែង</div>
                    </div>

                    {/* <img src={Logo} className="w-64 max-w-md h-auto mx-auto py-4" alt="" /> */}
                    <div className="flex justify-center items-center gap-12 py-6">
                        <div className="groom-name">
                            <p className="metal-regular text-sm text-nude2 mb-2">កូនប្រុសនាម</p>
                            <h1 className="moul-regular text-lg text-mediumearth">នៅ គីមសេង</h1>
                        </div>
                        <div className="bride-name">
                            <p className="metal-regular text-sm text-nude2 mb-2">កូនស្រីនាម</p>
                            <h1 className="moul-regular text-lg text-mediumearth">រិន សានាថ</h1>
                        </div>
                    </div>
                    <div className="datetime text-center py-10">
                        <p className="metal-regular text-sm mb-4 text-nude2">ដែលប្រព្រឹត្តទៅនៅ</p>
                        <p className="moul-regular text-mediumearth">​ថ្ងៃទី៣១​ ខែឧសភា ឆ្នាំ២០២៥</p>
                    </div>
                    <div className="flex flex-col items-center justify-center animate-float py-6 text-nude2">
                        <ChevronDown size={32} className=""/>
                        <p className="metal-regular text-sm">ទាញចុះក្រោម</p>
                    </div>
                </div>

                {/* Album */}
                <div className="py-10">
                    <h1 className="moulpali-medium text-center text-nude2">កម្រងរូបភាពអនុស្សាវរីយ៍</h1>
                </div>

                {/* Family */}
                <div className="py-10">
                    <h1 className="moulpali-medium text-center pb-8 text-nude2">សិរីមង្គលពិធីពិសាស្លាដក់កន្សែង</h1>
                    <div className="flex justify-between items-start">
                        <div className="text-left">
                            <div className="flex gap-1 items-center mb-2 text-[]">
                                <p className="metal-regular text-xs text-nude2">លោក</p>
                                <p className="moul-regular text-sm text-mediumearth">នៅ ធី</p>
                            </div>
                            <div className="flex gap-1 items-center mb-2 text-[]">
                                <p className="metal-regular text-xs text-nude2">លោកស្រី</p>
                                <p className="moul-regular text-sm text-mediumearth">គ្រី សុខហេង</p>
                            </div>
                        </div>
                        <div className="text-right">
                            {/* <h1 className="title">លោក នៅ ធី</h1> */}
                            <div className="flex gap-1 items-center text-[]">
                                <p className="metal-regular text-xs text-nude2">លោកស្រី</p>
                                <p className="moul-regular text-sm text-mediumearth">ហុី សានសានី</p>
                            </div>
                        </div>
                    </div>
                    <p className="metal-regular text-center font-normal text-sm leading-7 mt-6 text-nude4">សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ចូលរួមជាភ្ញៀវអធិបតីភាព និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យសិរិសួស្តីជ័យមង្គលក្នុងពិធីពិសាស្លាដក់កន្សែងកូនប្រុសស្រីរបស់យើងខ្ញុំ</p>
                    <div className="flex justify-around items-center py-6">
                        <div>
                            <p className="metal-regular text-xs text-nude2">កូនប្រុសនាម</p>
                            <h1 className="moul-regular text-center mt-2 text-mediumearth">នៅ<br></br>គីមសេង</h1>
                        </div>
                        {/* <img src={Logo} className="w-32 h-auto" alt="" /> */}
                        {/* <div className="items-center text-center">
                            <p className="metal-regular text-[0.7rem] text-nude3">ជា</p>
                            <p className="moul-regular text-md text-mediumearth pb-2">គូ</p>
                            <p className="metal-regular text-[0.7rem] text-nude3">នឹង</p>
                        </div> */}
                        <div className="relative flex justify-center items-center w-10 h-10">
                            <Heart className="fill-mediumearth text-mediumearth w-full h-full" />
                            <Heart size={16} className="fill-mediumearth text-mediumearth absolute -right-2 bottom-1 rotate-12" />
                        </div>
                        <div className="br-name">
                            <p className="metal-regular text-xs text-nude2">កូនស្រីនាម</p>
                            <h1 className="moul-regular text-center mt-2 text-mediumearth">រិន<br></br>សានាថ</h1>
                        </div>
                    </div>
                    <div className="datetime text-center">
                        <div className="flex gap-1 justify-center items-end">
                            <p className="metal-regular text-sm">ដែលប្រព្រឹត្តទៅ ចាប់ពីម៉ោង</p>
                            <p className="moul-regular text-md"> ៩ព្រឹក</p>
                        </div>
                        <p className="moul-regular mt-2">​ថ្ងៃទី៣១​ ខែឧសភា ឆ្នាំ២០២៥</p>
                    </div>
                </div>

                {/* Agenda */}
                <div className="py-10">
                    <h1 className="moulpali-medium text-center pb-8">ដំណើរការកម្មវិធី</h1>
                </div>
            </div>

        </div>
    )
}

export default Invitation;