
  


function JobGrid({ rowLimit = 5, jobData}, ) {
    const itemsToDisplay = Array.from({ length: rowLimit }).flatMap(() => jobData);
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-center mt-9 w-full mx-auto">
        {itemsToDisplay.map((job, index) => (
          <div key={index} className="flex flex-col ">
            <img
              src={job.img}
              alt={job.title}
              className="w-full h-auto max-w-full max-h-full mb-2"
            />
            <span className="font-inter font-normal text-sm text-black">{job.title}</span>
          </div>
        ))}
      </div>
    );
  }

  export default JobGrid