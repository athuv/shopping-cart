import { useState, useEffect } from 'react';
import Card from '../../shared/Card/Card';

export default function Shop() {
  const [shopData, setShopData] = useState(null);

  useEffect(() => {
    if (shopData === null) {
      const fetchShopData = async () => {
        const response = await fetch(
          'https://fakestoreapi.com/products?limit=12',
        );
        const data = await response.json();
        setShopData(data);
      };

      fetchShopData();
    }
  });
  return (
    <section>
      <div className="px-6">
        <Card title={'Available Products'} data={shopData} />
      </div>
    </section>
  );
}
