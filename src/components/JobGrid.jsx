import { useState, useEffect } from "react";

function JobGrid({ jobData }) {
  const [rowLimit, setRowLimit] = useState(5);

  useEffect(() => {
    const updateRowLimit = () => {
      if (window.innerWidth < 768) {
        setRowLimit(3);
      } else {
        setRowLimit(5);
      }
    };

    updateRowLimit(); // Set initial state
    window.addEventListener("resize", updateRowLimit);

    return () => window.removeEventListener("resize", updateRowLimit);
  }, []);

  const itemsToDisplay = Array.from({ length: rowLimit }).flatMap(() => jobData);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-center mt-9 w-full mx-auto">
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