import { useEffect, useState } from 'react';
import Card from '../../../shared/Card/Card';

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
      <Card featuredData={featuredData} />
    </section>
  );
}
