function Service({ services, className = "" }) {
  return (
    <section>
      <div className="lg:p-9 w-full">
        <h1 className="font-bold text-2xl pl-4">Services</h1>
        <div
          className={`${className}flex flex-col lg:mt-5 lg:flex-row lg:items-center text-gray-500 lg:gap-[380px]`}
        >
          {services.map((group, index) => (
            <ul key={index} className="list-disc pl-14">
              {group.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="border border-gray-[#B0B0B0] w-full h-0"></div>
    </section>
  );
}

export default Service;
