import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function ServiceCard({ title, location, imgSrc }) {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img 
                src={imgSrc} 
                alt={title} 
                className="w-full h-auto object-cover rounded-t-lg" 
            />
            <h2 className="text-lg font-semibold my-2">{title}</h2>
            <div className="flex items-center text-gray-600 mt-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-600" />
                <p className="m-0">{location}</p>
            </div>
        </div>
    )
}
