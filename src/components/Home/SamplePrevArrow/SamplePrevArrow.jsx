import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faArrowLeft}
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />

  );
}

export default SamplePrevArrow;