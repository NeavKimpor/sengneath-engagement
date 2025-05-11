import MapPinIcon from "../assets/images/google-map-icon.svg"; 

function LocationButton() {
    const googleMapsUrl = "https://maps.app.goo.gl/4KDagaxSJNQMF6bc9"; 

    return (
        <a
        href={googleMapsUrl}
        target=""
        rel=""
        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-nude3 rounded-lg border-2 border-nude2 moul-regular md:text-xl md:items-end md:border-4 md:rounded-xl md:px-6 md:py-3"
        >
        <img src={MapPinIcon} alt="Map icon" className="w-5 h-5 md:w-8 md:h-8" />
        បើកផែនទី
        </a>
    );
}

export default LocationButton;
