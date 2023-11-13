import { useEffect, useState } from 'react';
import loadingCircle from './../../../../assets/images/loading-circles.svg';

export default function Featured() {
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    if (featuredData === null) {
      const fetchFeaturedData = async () => {
        const response = await fetch(
          'https://fakestoreapi.com/products?limit=6',
        );
        const data = await response.json();
        setFeaturedData(data);
      };

      fetchFeaturedData();
    }
  });

  return (
    <section>
      <div className="px-6">
        <h1 className="pb-6 text-2xl font-bold ">Featured Products</h1>
        <div className="grid grid-cols-1 gap-6">
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
    </section>
  );
}
