import { Link } from "react-router-dom";
import flower1 from "../assets/images/flower1.webp"
import flower3 from "../assets/images/flower3.webp"

function OpeningButton() {
    return (
        <button className="open-button kantumruy-regular relative flex justify-center items-center gap-4 animate-zoom">
            <img src={flower1} className="w-10 h-10 absolute top-1/2 -left-3 -translate-y-2 z-20" alt="" />
            <img src={flower3} className="w-10 h-auto absolute -rotate-45 -top-3 -left-10 -translate-y-1" alt="" />
            <Link to="/invitation">បើកធៀប</Link>
            <img src={flower1} className="w-10 h-10 absolute -scale-x-100 top-1/2 -right-3 -translate-y-2 z-20" alt="" />
            <img src={flower3} className="w-10 h-auto absolute -scale-x-100 rotate-45 -top-3 -right-10 -translate-y-1" alt="" />
        </button>
    )
}

export default OpeningButton;