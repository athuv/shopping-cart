import { useEffect, useState } from 'react';
import loadingCircle from './../../../assets/images/loading-circles.svg';

export default function Cart() {
  const [cartData, setCartData] = useState({});
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const products = await Promise.all(
        cartData.products.map(async (data) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${data.productId}`,
          );
          const productData = await response.json();
          return productData;
        }),
      );
      setProduct(products);
    };
    if (Object.keys(cartData).length > 0) {
      fetchProductData();
    }
  }, [cartData]);

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
  }, []);

  const handleQuantityPlus = (id) => {
    console.log(id);
  };

  return (
    <section>
      <div className="px-6">
        <h1 className="pb-6 text-2xl font-bold">Your Cart</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="bg-gray-50 px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  Products
                </th>
                <th className="bg-gray-50 px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  Price
                </th>
                <th className="bg-gray-50 px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  Quantity
                </th>
                <th className="bg-gray-50 px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cartData).length > 0 &&
                cartData.products.map((data, index) => {
                  const productDetails =
                    product.length > 0 &&
                    product.find((p) => p.id === data.productId);
                  const rowClass = index % 2 === 0 ? 'bg-secondary' : '';

                  return (
                    <tr key={index} className={`text-sm ${rowClass}`}>
                      <td className="w-72 px-6 py-4">{productDetails.title}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-center">
                        {productDetails.price}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center justify-center">
                          <div className="border-qgray-border flex h-[40px] w-[120px] items-center border px-[26px]">
                            <div className="flex w-full items-center justify-between">
                              <button
                                type="button"
                                className="text-qgray text-base"
                              >
                                -
                              </button>
                              <span className="text-qblack">
                                {data.quantity}
                              </span>
                              <button
                                type="button"
                                className="text-qgray text-base"
                                onClick={() => {
                                  handleQuantityPlus(data.productId);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-center">
                        {productDetails.price !== undefined &&
                          productDetails.price * data.quantity}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {Object.keys(cartData).length === 0 && (
            <div>
              <img
                className="h-16 w-full lg:h-28"
                alt="loading-circle"
                src={loadingCircle}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
