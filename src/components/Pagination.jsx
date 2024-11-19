const Pagination = ({
  showFirstPage = true,
  showLastPage = true,
  showPage4 = true,
}) => {
  return (
    <div className="flex items-center justify-center space-x-2 mt-40">
      {showFirstPage && (
        <button
          className="px-4 py-2 rounded-md text-gray-500 hover:bg-gray-200 border border-gray-300"
          aria-label="First Page"
        >
          «
        </button>
      )}

      <button
        className="px-4 py-2 rounded-sm border border-gray-300 text-gray-500 hover:bg-gray-200"
        aria-label="Previous Page"
      >
        ‹
      </button>

      <button className="px-4 py-2 border border-gray-300 bg-gray-200 text-black rounded-md">
        1
      </button>
      <button className="px-4 py-2 border border-gray-300 text-gray-500 hover:bg-gray-200 rounded-sm">
        2
      </button>
      <button className="px-4 py-2 border border-gray-300 text-gray-500 hover:bg-gray-200 rounded-sm">
        3
      </button>
      {showPage4 && (
        <button className="px-4 py-2 border border-gray-300 text-gray-500 hover:bg-gray-200 rounded-sm">
          4
        </button>
      )}
      <button
        className="px-4 py-2 rounded-sm border border-gray-300 text-gray-500 hover:bg-gray-200"
        aria-label="Next Page"
      >
        ›
      </button>

      {showLastPage && (
        <button
          className="px-4 py-2 rounded-sm border border-gray-300 text-gray-500 hover:bg-gray-200"
          aria-label="Last Page"
        >
          »
        </button>
      )}
    </div>
  );
};

export default Pagination;
