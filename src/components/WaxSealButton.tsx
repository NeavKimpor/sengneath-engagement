import WaxSeal from '../assets/images/wax-full.webp'
import { Link } from 'react-router-dom';

function WaxSealButton() {
    return (
        <div className="relative w-full py-6 lg:py-0 lg:mt-6">
            {/* Wax Seal and Link */}
            <div className="relative z-10 flex items-center justify-center">
                <Link
                    to="/invitation"
                    className="w-36 md:w-40 relative cursor-pointer transition-transform duration-300 animate-zoom"
                >
                    <img src={WaxSeal} alt="Wax Seal" />
                </Link>
            </div>
        </div>
    );
}

export default WaxSealButton;
