import PropTypes from "prop-types";
import avater from "../assets/avater.png";

export default function Avatar({
  width = "w-44",  
  translateY = "-translate-y-56", 
  marginLeft = "ml-12",    
}) {
  return (
    <div className="avatar">
      <img
        src={avater}
        alt="avatar"
        className={`avatar ${width} ${translateY} ${marginLeft}`}
      />
    </div>
  );
}

Avatar.propTypes = {
  width: PropTypes.string,
  translateY: PropTypes.string,
  marginLeft: PropTypes.string,
};
