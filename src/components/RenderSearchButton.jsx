const RenderSearchButton = ({ isSearchActive, setSearchActive }) => {
  return (
    <div className="flex flex-col items-center space-x-6 mb-1  ">
      <button
        onClick={() => setSearchActive(!isSearchActive)}
        className="text-white focus:outline-none -mb-3"
        aria-label="Toggle search"
      >
        <span className="material-icons text-[20px] ml-2">search</span>
      </button>
      <span className="text-xs text-white">Search</span>
    </div>
  );
};

export default RenderSearchButton;