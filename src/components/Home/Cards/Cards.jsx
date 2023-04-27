import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';
import './style.scss';

import SampleNextArrow from '../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../SamplePrevArrow/SamplePrevArrow';
import { fetchCardBoards } from '../../../actions/CardBoards';
import Loader from '../../Loader/Loader';

function Cards({ setIsEditFormCardOpen, setIsFormCardOpen }) {
  const settings = {
    className: 'center',
    centerMode: false,
    draggable: true,
    swipeToSlide: true,
    infinite: false,
    slidesToShow: 5,
    speed: 300,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 944,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const loading = useSelector((state) => state.CardBoards.loader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCardBoards());
  }, []);

  const cardboards = useSelector((state) => state.CardBoards.cardboardsList);

  const rooms = useSelector((state) => state.CardBoards.roomsType);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="Cards">
      {rooms.map((room) => {
        const filteredCardboards = cardboards.filter(
          (cardboard) => cardboard.destinationRoom.id === room.id,
        );
        return (
          filteredCardboards.length > 0 && (
            <div key={room.id} className="card-group">
              <div className="category">
                {/* <h1 className="title-room">{room.roomName}</h1> */}
                <span className="bg-orange-400 text-white text-xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-400 dark:text-white">{room.roomName}</span>
                <button
                  type="button"
                  className="px-1 py-1 text-white bg-orange-400 rounded  duration-150 hover:bg-orange-300 active:bg-orange-500"
                  onClick={setIsFormCardOpen}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <Slider {...settings}>
                {filteredCardboards.map((cardboard) => (
                  <div key={cardboard.label} className="card-item">
                    <Card
                      setIsEditFormCardOpen={setIsEditFormCardOpen}
                      {...cardboard}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          )
        );
      })}
    </div>
  );
}

Cards.propTypes = {
  setIsEditFormCardOpen: PropTypes.func.isRequired,
  setIsFormCardOpen: PropTypes.func.isRequired,

};

export default Cards;
