import SearchContainer from "../components/SearchContainer";
import SeeMoreButton from "../components/SeeMoreBtn";
import JobGrid from "../components/JobGrid";

export default function BrowseByCategory({
  jobData,
  rowLimit,
  showSeeMore = false,
  showSearchContainer = false,
  description = "Browse Artisans by Category",
}) {
  return (
    <section className="py-8 px-6 md:px-24 font-inter hidden md:block">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">{description}</h2>
        {showSeeMore && <SeeMoreButton />}
        {showSearchContainer && <SearchContainer />}
      </div>
      <JobGrid jobData={jobData} rowLimit={rowLimit}  />
    </section>
  );
}
