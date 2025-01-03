import { useState, useEffect } from "react";
function JobGrid({ jobData }) {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  useEffect(() => {
    const updateItemsToDisplay = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setItemsToDisplay(jobData.slice(0, 30));
      } else if (screenWidth >= 768) {
        setItemsToDisplay(jobData.slice(0, 9));
      } else {
        setItemsToDisplay(jobData.slice(0, 6));
      }
    };

    updateItemsToDisplay();
    window.addEventListener("resize", updateItemsToDisplay);

    return () => window.removeEventListener("resize", updateItemsToDisplay);
  }, [jobData]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 justify-center mt-9 w-full mx-auto">
      {itemsToDisplay.map((job, index) => (
        <div key={index} className="flex flex-col">
          <img
            src={job.img}
            alt={job.title}
            className="w-full h-auto max-w-full max-h-full mb-2"
          />
          <span className="font-inter font-normal text-sm text-black">
            {job.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default JobGrid;
