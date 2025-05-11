// components/InvitationAnimation.jsx
import { useRef } from 'react';
import { gsap } from 'gsap';

export default function InvitationAnimation() {
  const waxRef = useRef(null);
  const ropeRef = useRef(null);
  const envelopeRef = useRef(null);
  const contentRef = useRef(null);

  const handleClick = () => {
    const tl = gsap.timeline();

    tl.to(waxRef.current, { scale: 0, duration: 0.4, ease: 'power1.in' })
      .to(ropeRef.current, { scaleX: 0, transformOrigin: 'left', duration: 0.4 }, "-=0.3")
      .to(envelopeRef.current, { rotateX: 0, duration: 0.6, transformOrigin: 'top center', ease: 'power2.out' })
      .to(contentRef.current, { opacity: 1, duration: 0.5 }, "-=0.4");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fef8f5]">
      {/* Wax Stamp */}
      <div
        ref={waxRef}
        onClick={handleClick}
        className="w-20 h-20 rounded-full bg-red-700 shadow-lg cursor-pointer z-10"
      >
        <div className="flex items-center justify-center h-full text-white font-bold text-xl">S&N</div>
      </div>

      {/* Rope */}
      <div
        ref={ropeRef}
        className="w-40 h-2 bg-yellow-800 mt-[-10px] rounded-full transition-transform duration-300 z-0"
      ></div>

      {/* Envelope */}
      <div
        ref={envelopeRef}
        className="mt-10 w-64 h-40 bg-white border-2 border-gray-300 rounded-md transform rotate-x-90"
      ></div>

      {/* Invitation Content */}
      <div
        ref={contentRef}
        className="mt-4 text-center opacity-0 transition-opacity duration-500"
      >
        <h2 className="text-2xl font-semibold text-gray-800">You're Invited!</h2>
        <p className="text-gray-600">Join us for the celebration of S&N</p>
      </div>
    </div>
  );
}
