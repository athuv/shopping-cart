import loadingCircle from './../../../assets/images/loading-circles.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  TbShoppingCartPlus,
  TbArrowsMaximize,
  TbHeart,
  TbRepeat,
} from 'react-icons/tb';

export default function Card({ data, title, isSidebarOpen }) {
  return (
    <div className="px-6">
      <h1 className="pb-6 text-2xl font-bold ">{title}</h1>

      {data.length === 0 && (
        <div>
          <img
            className="h-16 w-full lg:h-28"
            alt="loading-circle"
            src={loadingCircle}
          />
        </div>
      )}

      {data.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((data) => (
            <div
              key={data.id}
              className={`group relative ${
                isSidebarOpen && 'z-[-1]'
              } flex h-[480px] w-60 flex-col items-center justify-center gap-2 justify-self-center overflow-hidden bg-primaryLight p-[2%] lg:h-[40rem] lg:w-72`}
            >
              <div className="flex flex-grow flex-col items-center justify-center">
                <img
                  className="h-fit w-fit"
                  alt={data.title}
                  src={data.image}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="line-clamp-2 text-center">{data.title}</div>
                <div className="text-center">Rs.{data.price}</div>
              </div>
              <div className="absolute flex translate-x-44 flex-col gap-2 transition duration-500 group-hover:translate-x-24">
                <Link className="rounded bg-secondary p-2">
                  <TbArrowsMaximize />
                </Link>
                <Link className="rounded bg-secondary p-2">
                  <TbHeart />
                </Link>
                <Link className="rounded bg-secondary p-2">
                  <TbRepeat />
                </Link>
              </div>
              <div className="absolute flex w-full translate-y-96 items-center justify-center transition duration-500 group-hover:translate-y-32">
                <Link className="flex items-center justify-center gap-1 rounded bg-secondary p-2 text-white">
                  <TbShoppingCartPlus /> <span>Add to Cart</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};
