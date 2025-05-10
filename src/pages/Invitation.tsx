import MusicPlayer from "../components/MusicPlayer";
import Logo from "/logo.png"
import { ChevronDown, Heart } from "lucide-react";
import img1 from "../assets/images/IMG_3407.webp"
import img2 from "../assets/images/IMG_3396.webp"
import img3 from "../assets/images/IMG_3399.webp"
import img4 from "../assets/images/IMG_3400.webp"
import img5 from "../assets/images/IMG_3402.webp"
import img6 from "../assets/images/IMG_3404.webp"
import LocationButton from "../components/LocationButton";
import Agenda from "../components/Agenda";
import Countdown from "../components/Countdown";

function Invitation() {
    return (
        <div className="w-full min-h-screen bg-fixed bg-white">
            <MusicPlayer/>
            <img src="/lframe.png" className="fixed top-0 -left-16 h-screen object-cover z-10 pointer-events-none" alt="" />
            <img src="/rframe.png" className="fixed top-0 -right-16 h-screen object-cover z-10 pointer-events-none" alt="" />
            {/* <img src="/texture.JPG" className="fixed object-cover z-0 pointer-events-none" alt="" /> */}
            <div className="py-28 px-3 relative z-10">
                {/* Opening */}
                <div className="text-center">
                    
                    <div className="moulpali-bold text-[1.35rem] text-nude2 my-4">
                        <div>សិរីមង្គល</div>
                        <div className="mt-2">ពិធីពិសាស្លាដក់កន្សែង</div>
                    </div>

                    {/* <img src={Logo} className="w-64 max-w-md h-auto mx-auto py-4" alt="" />
                    <div className="flex justify-center items-center gap-12 py-6">
                        <div className="groom-name">
                            <p className="metal-regular text-sm text-nude2 mb-2">កូនប្រុសនាម</p>
                            <h1 className="moul-regular text-lg text-mediumearth">នៅ គីមសេង</h1>
                        </div>
                        <div className="bride-name">
                            <p className="metal-regular text-sm text-nude2 mb-2">កូនស្រីនាម</p>
                            <h1 className="moul-regular text-lg text-mediumearth">រិន សានាថ</h1>
                        </div>
                    </div> */}

                    <div className="relative w-64 max-w-md h-auto mx-auto py-4">
                        {/* Image */}
                        <img src={Logo} className="mx-auto w-56 h-auto" alt="" />

                        {/* Floating Names */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center gap-12">
                            <div className="groom-name text-center">
                            <p className="metal-regular text-sm text-nude2 mb-2">កូនប្រុសនាម</p>
                            <h1 className="moul-regular text-lg text-mediumearth">នៅ<br></br>គីមសេង</h1>
                            </div>
                            <div className="bride-name text-center">
                            <p className="metal-regular text-sm text-nude2 mb-2">កូនស្រីនាម</p>
                            <h1 className="moul-regular text-lg text-mediumearth">រិន<br></br>សានាថ</h1>
                            </div>
                        </div>
                    </div>

                    {/* <div className="datetime text-center py-4">
                        <p className="metal-regular text-sm mb-4 text-nude2">ដែលប្រព្រឹត្តទៅនៅ</p>
                        <p className="moul-regular text-mediumearth">​ថ្ងៃទី៣១​ ខែឧសភា ឆ្នាំ២០២៥</p>
                    </div> */}
                    <div className="flex flex-col items-center justify-center animate-float py-6 text-nude2">
                        <ChevronDown size={32} className=""/>
                        <p className="metal-regular text-sm">ទាញចុះក្រោម</p>
                    </div>
                </div>

                {/* Album */}
                <div className="py-10">
                    <h1 className="moulpali-medium text-center text-nude2 mt-4 mb-10 text-xl">កម្រងរូបភាពអនុស្សាវរីយ៍</h1>
                    <div className="flex justify-center gap-x-4">
                        <img src={img1} className="w-32 h-auto rotate-6" alt="" />
                        <img src={img2} className="w-32 h-auto -rotate-6" alt="" />
                    </div>
                    <div className="flex justify-center gap-x-4 my-4">
                        <img src={img6} className="w-32 h-auto" alt="" />
                        <img src={img4} className="w-32 h-auto" alt="" />
                    </div>
                    <div className="flex justify-center gap-x-4">
                        <img src={img5} className="w-32 h-auto -rotate-6" alt="" />
                        <img src={img3} className="w-32 h-auto rotate-6" alt="" />
                    </div>
                </div>

                {/* Family */}
                <div className="py-10">
                    <h1 className="moulpali-medium text-center pb-8 text-nude2 text-xl">ពិធីពិសាស្លាដក់កន្សែង</h1>
                    <div className="flex justify-around">
                        <div className="">
                            <div className="flex gap-1 items-center mb-2">
                                <p className="metal-regular text-xs text-nude2">លោក</p>
                                <p className="moul-regular text-sm text-mediumearth">នៅ ធី</p>
                            </div>
                            <div className="flex gap-1 items-center mb-2">
                                <p className="metal-regular text-xs text-nude2">លោកស្រី</p>
                                <p className="moul-regular text-sm text-mediumearth">គ្រី សុខហេង</p>
                            </div>
                        </div>
                        <div className="">
                            {/* <h1 className="title">លោក នៅ ធី</h1> */}
                            <div className="flex gap-1 items-center">
                                <p className="metal-regular text-xs text-nude2">លោកស្រី</p>
                                <p className="moul-regular text-sm text-mediumearth">ហ៊ី សនសានី</p>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-center moulpali-medium mt-4 text-sm text-nude2">មានកិត្តិយសសូមគោរពអញ្ជើញ</h1>
                    <p className="metal-regular text-center text-xs leading-7 mt-6 text-nude3 px-2">ឯកឧត្តម លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា​ ឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យសិរិសួស្តីជ័យមង្គលក្នុងពិធីពិសាស្លាដក់កន្សែងកូនប្រុសស្រីរបស់យើងខ្ញុំ</p>
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
                        {/* <div className="relative flex justify-center items-center w-10 h-10">
                            <Heart className="fill-mediumearth text-mediumearth w-full h-full" />
                            <Heart size={16} className="fill-mediumearth text-mediumearth absolute -right-2 bottom-1 rotate-12" />
                        </div> */}
                        <Heart size={32} className="fill-mediumearth text-mediumearth" />
                        <div className="br-name">
                            <p className="metal-regular text-xs text-nude2">កូនស្រីនាម</p>
                            <h1 className="moul-regular text-center mt-2 text-mediumearth">រិន<br></br>សានាថ</h1>
                        </div>
                    </div>
                    <p className="metal-regular text-center text-xs leading-7 text-nude3">ដែលនឹងប្រព្រឹត្តទៅនៅថ្ងៃសៅរ៍ ៥កើត ខែជេស្ឋ ឆ្នាំម្សាញ់ <br></br>សប្តស័ក ពុទ្ធសករាជ២៥៦៩ ត្រូវនឹងថ្ងៃទី៣១ ខែឧសភា ឆ្នាំ២០២៥ <br></br>វេលាម៉ោង ៩:០០ ព្រឹក ស្ថិតនៅភោជនីយដ្ធាន ជីងឡុង</p>
                    {/* <div className="datetime text-center">
                        <div className="flex gap-1 justify-center items-end">
                            <p className="metal-regular text-sm">ដែលប្រព្រឹត្តទៅ ចាប់ពីម៉ោង</p>
                            <p className="moul-regular text-md"> ៩ព្រឹក</p>
                        </div>
                        <p className="moul-regular mt-2">​ថ្ងៃទី៣១​ ខែឧសភា ឆ្នាំ២០២៥</p>
                    </div> */}
                    <div className="text-center mt-6">
                        <LocationButton/>
                    </div>
                </div>

                {/* Agenda */}
                <div className="py-6">
                    <h1 className="moulpali-medium text-center pb-10 text-nude2 text-xl">ដំណើរការកម្មវិធី</h1>
                    <Agenda/>
                </div>

                {/* Countdown */}
                <div className="py-6">
                    <h1 className="moulpali-medium text-center pb-10 text-nude2 text-xl">ចំនួនថ្ងៃរាប់ថយក្រោយ</h1>
                    <Countdown/>
                </div>

                {/* Dress Code */}
                <div className="py-6">
                    <h1 className="moulpali-medium text-center pb-10 text-nude2 text-xl">កូដសម្លៀកបំពាក់</h1>
                    <div className="flex justify-center gap-1 px-1">
                        <div className="w-20 h-40 bg-[#D4CDBD] flex items-center justify-center text-white"></div>
                        <div className="w-20 h-40 bg-[#A9B5BA] flex items-center justify-center text-white"></div>
                        <div className="w-20 h-40 bg-[#C7D2AB] flex items-center justify-center text-white"></div>
                        <div className="w-20 h-40 bg-[#A7A155] flex items-center justify-center text-white"></div>
                        <div className="w-20 h-40 bg-[#C8AC94] flex items-center justify-center text-white"></div>
                    </div>
                </div>

                {/* Thanks Message */}
                <div>
                    <h1 className="moulpali-medium text-center pt-8 pb-10 text-nude2 text-xl">សូមអរគុណ!</h1>
                </div>

            </div>

        </div>
    )
}

export default Invitation;