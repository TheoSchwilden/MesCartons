import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faArrowRight}
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />

  );
}

export default SampleNextArrow;
