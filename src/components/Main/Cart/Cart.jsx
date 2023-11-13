import { useEffect } from 'react';

export default function Cart() {
  useEffect(() => {
    const fetchCartData = async () => {
      const response = await fetch('https://fakestoreapi.com/carts/1');
      const data = await response.json();
      console.log(data);
    };
    fetchCartData();
  });

  return (
    <section>
      <div className="px-6">
        <h1>Your Cart</h1>
      </div>
    </section>
  );
}
