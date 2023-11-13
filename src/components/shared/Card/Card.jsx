import loadingCircle from './../../../assets/images/loading-circles.svg';
import PropTypes from 'prop-types';

export default function Card({ featuredData }) {
  return (
    <div className="px-6">
      <h1 className="pb-6 text-2xl font-bold ">Featured Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredData === null ? (
          <div>
            <img
              className="h-16 w-full lg:h-28"
              alt="loading-circle"
              src={loadingCircle}
            />
          </div>
        ) : (
          featuredData.map((data) => (
            <div
              key={data.id}
              className="flex h-[480px] w-60 flex-col items-center justify-center gap-2 justify-self-center bg-primaryLight p-[2%]"
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
                <div className="text-center">{data.price}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  featuredData: PropTypes.array,
};
