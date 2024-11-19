import ServiceProviderCard from "./ServiceProviderCard";
import SortDropdown from "./SortDropdown";

const ServiceProviderList = ({
  providers,
  showSortDropdown = true,
  showHeaderText = true,
  customStyles = "px-6 py-8 mt-7",
}) => {
  return (
    <section
      className={` ${customStyles} ${
        customStyles.includes("bg-") ? "" : "bg-blue-50"
      }`}
    >
      <div className="flex items-center justify-between mb-6 px-16 pt-9 ">
      {showHeaderText && <h2 className="text-2xl font-semibold">Service Providers</h2>}
      {showSortDropdown && <SortDropdown />}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-11/12 mt-11">
        {providers.map((provider, index) => (
          <ServiceProviderCard key={index} provider={provider} />
        ))}
      </div>
    </section>
  );
};

export default ServiceProviderList;
