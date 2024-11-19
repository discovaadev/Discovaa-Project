import PropTypes from 'prop-types';

export default function Logo({ src, alt, width, height, className }) {
  return (
    <div className={`inline-block ${className}`}>
      <img
        src={src}
        alt={alt}
        style={{ width: width, height: height }}
        className="block max-w-full h-auto "
      />
    </div>
  );
}


Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};


Logo.defaultProps = {
  width: 'auto',
  height: 'auto',
  className: '',
};
