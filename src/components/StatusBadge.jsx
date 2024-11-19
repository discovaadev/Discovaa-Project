
const StatusBadge = ({ regCode }) => (
  <div className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-lg flex items-center">
    <span className="mr-2">Registered</span>
    <span className="text-gray-300">•</span>
    <span className="ml-2">{regCode}</span>
  </div>
);

export default StatusBadge;
