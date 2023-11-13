import { useEffect, useState } from 'react';

export default function Cart() {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    try {
      const fetchCartData = async () => {
        const response = await fetch('https://fakestoreapi.com/carts/1');
        const data = await response.json();
        setCartData(data);
      };
      fetchCartData();
    } catch (error) {
      console.log(error);
    }
  });
  console.log(cartData);
  return (
    <section>
      <div className="px-6">
        <h1>Your Cart</h1>
        <div className="overflow-x-auto">
          <div className="table w-full">
            <div className="table-row">
              <div className="table-cell px-4 py-2">Product</div>
              <div className="table-cell px-4 py-2">Price</div>
              <div className="table-cell px-4 py-2">Quantity</div>
              <div className="table-cell px-4 py-2">Total</div>
            </div>
            <div className="table-row">
              {cartData !== null &&
                cartData.products.map((data, index) => {
                  <div key={index} className="table-cell px-4 py-2">
                    {data.productId}
                  </div>;
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
