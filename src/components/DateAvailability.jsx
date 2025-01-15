function DateAvailability({ stillIsvProfile = false }) {
  return (
    <section>
      <div className="lg:p-9 w-full">
        <h1 className="font-bold text-2xl pl-4">Available Dates and Time</h1>
        <div className="flex flex-col lg:mt-5 lg:flex-row lg:items-center text-gray-500 lg:gap-[270px] ">
          {stillIsvProfile ? (
            <>
              <ul className="list-disc pl-14">
                <li>Weekends 08:00 - 17:30</li>
              </ul>
              <ul className="list-disc pl-14">
                <li>Mondays - Fridays, Closed</li>
              </ul>
            </>
          ) : (
            <>
              <ul className="list-disc pl-14">
                <li>Weekdays 08:00 - 17:30</li>
              </ul>
              <ul className="list-disc pl-14">
                <li>Saturdays 12:00 - 17:30</li>
              </ul>
              <ul className="list-disc pl-14">
                <li>Sundays Closed</li>
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="border border-gray-[#B0B0B0] w-full h-0 "></div>
    </section>
  );
}

export default DateAvailability;
