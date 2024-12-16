import PropTypes from "prop-types";

import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string,
  strArray: PropTypes.arrayOf(PropTypes.string),
  idx: PropTypes.number,
}

export default AnimatedLetters;