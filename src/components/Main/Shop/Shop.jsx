import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useParams, useOutletContext } from 'react-router-dom';
import Card from '../../shared/Card/Card';

function Pagination({ datalength }) {
  const totalPages = Math.ceil(datalength / 8);

  return (
    <div className="flex gap-2 px-6 pt-6">
      {Array.from({ length: totalPages }, (_, index) => (
        <NavLink
          className={({ isActive }) =>
            `bg-secondary p-2 ${isActive ? 'text-tertiary' : ''}`
          }
          key={index}
          to={`/shop/${index + 1}`}
        >
          {index + 1}
        </NavLink>
      ))}
    </div>
  );
}

export default function Shop() {
  const [shopData, setShopData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const { page } = useParams();

  const isSidebarOpen = useOutletContext();

  useEffect(() => {
    if (shopData.length === 0) {
      const fetchShopData = async () => {
        const response = await fetch(
          'https://fakestoreapi.com/products?limit=24',
        );
        const data = await response.json();
        setShopData(data);
      };

      fetchShopData();
    }
  });

  useEffect(() => {
    if (shopData.length > 0) {
      const currentPage = page ? parseInt(page, 10) : 1;

      const itemsPerPage = 8;

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      const currentItems = shopData.slice(startIndex, endIndex);
      setCurrentData(currentItems);
    }
  }, [page, shopData]);

  return (
    <section className="flex flex-col items-center">
      {shopData.length > 0 && <Pagination datalength={shopData.length} />}

      <div className="px-6">
        <Card
          title={'Available Products'}
          isSidebarOpen={isSidebarOpen}
          data={currentData}
        />
      </div>

      {shopData !== null && <Pagination datalength={shopData.length} />}
    </section>
  );
}

Pagination.propTypes = {
  datalength: PropTypes.number.isRequired,
};
