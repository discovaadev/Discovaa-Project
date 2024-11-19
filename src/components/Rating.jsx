

const Rating = ({ value }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-gray-700 ${i < value ? 'fas fa-star' : 'far fa-star'}`} />
      ))}
    </div>
  );
};

export default Rating;
