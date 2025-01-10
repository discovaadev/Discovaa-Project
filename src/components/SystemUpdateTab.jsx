const SystemUpdateTab = ({ updates }) => {
  return (
    <div className=" bg-white rounded-md ">
      {updates.map((update, index) => (
        <div
          key={index}
          className=" border-b last:border-b-0  last:pb-0"
        >
          <h2 className="text-xl font-semibold flex items-center justify-between text-gray-800">
            {update.title}
            {update.icon && (
              <img
                src={update.icon}
                alt={`${update.title} Icon`}
                className="w-6 h-6  "
              />
            )} 
          </h2>
          <p className="mt-2 text-gray-600">{update.description}</p>

          {update.points && (
            <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600">
              {update.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

          {update.title === "Install once downloaded" && (
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id={`toggle-${index}`}
                className="hidden peer"
              />
              <label
                htmlFor={`toggle-${index}`}
                className="w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer
                  peer-checked:bg-gray-500 peer-checked:after:translate-x-5
                  after:content-[''] after:absolute after:top-1 after:left-1
                  after:w-3 after:h-3 after:bg-white after:rounded-full
                  after:transition-all after:duration-300"
              ></label>
              <span className="ml-2 text-gray-700">Enable Updates</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SystemUpdateTab;
