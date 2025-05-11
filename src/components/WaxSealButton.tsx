import WaxSeal from '../assets/images/wax-full.png';
import { Link } from 'react-router-dom';

function WaxSealButton() {
    return (
        <div className="relative w-full py-8">
            {/* Wax Seal and Link */}
            <div className="relative z-10 flex items-center justify-center">
                <Link
                    to="/invitation"
                    className="w-48 relative cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                    <img src={WaxSeal} alt="" />
                </Link>
            </div>
        </div>
    );
}

export default WaxSealButton;

