import ServiceButton from "./ServiceBtn";

function Prices() {
  return (
    <section>
      <div className="p-9 mt-[-20px]">
        <h1 className="font-bold text-2xl pl-4 mb-5 ">Prices</h1>

        <div className="flex pl-6">
          <ServiceButton />
        </div>
      </div>
      <div className="mt-[-25px]">
        <div className="flex items-center  pl-16">
          <p className="text-gray-500">Hourly rate</p>
          <p className="border border-gray-[#B0B0B0] w-[1040px] h-0 mt-5 "></p>
          <div className="flex">
            <p className="font-semibold">€40</p>
            <p className="text-gray-500">/hour</p>
          </div>
        </div>
        <div className="flex items-center  pl-16">
          <p className="text-gray-500">Price range for a project</p>
          <p className="border border-gray-[#B0B0B0] w-[900px] h-0 mt-5 "></p>
          <div className="flex">
            <p className="font-semibold">€40 – €10,000</p>
          </div>
        </div>
      </div>
      <div className="border border-gray-[#B0B0B0] w-full h-0 mt-6 "></div>
    </section>
  );
}

export default Prices;
