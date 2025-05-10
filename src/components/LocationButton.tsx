import MapPinIcon from "../assets/images/google-map-icon.svg"; 

function LocationButton() {
    const googleMapsUrl = "https://www.google.com/maps?q=13.4125,103.8667"; 

    return (
        <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-top justify-center gap-2 px-4 py-2 text-nude3 rounded-lg border-2 border-nude2 moul-regular"
        >
        <img src={MapPinIcon} alt="Map icon" className="w-5 h-5" />
        បើកផែនទី
        </a>
    );
}

export default LocationButton;
