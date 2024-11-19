import PropTypes from 'prop-types';
import searchIcon from '../assets/SearchIcon.png';

const SearchInput = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="relative pr-[250px]">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search artisans by name |"
        className="px-3 py-1.5 w-[514px] border border-gray-300 rounded-md bg-black text-white outline-none"
      />
      <img
        src={searchIcon}
        alt="Search Icon"
        className="absolute right-[255px] top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
      />
    </div>
  );
};

SearchInput.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchInput;
