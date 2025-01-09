import SearchContainer from "../components/SearchContainer";
import SeeMoreButton from "../components/SeeMoreBtn";
import JobGrid from "../components/JobGrid";

export default function BrowseByCategory({
  jobData,
  showSeeMore = false,
  showSearchContainer = false,
  description = "Browse Artisans by Category",
  showOnMobile = false,
}) {
  return (
    <section
    className={`py-8 px-6 md:px-24 font-inter md:block ${
      showOnMobile ? "block" : "hidden sm:block" // Apply responsive classes to the section tag
    }`}
  >
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold">{description}</h2>
      {showSeeMore && <SeeMoreButton />}
      {showSearchContainer && <SearchContainer />}
    </div>
    <JobGrid jobData={jobData} />
  </section>
  );
}
