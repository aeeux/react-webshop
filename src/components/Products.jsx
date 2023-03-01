import React from "react";
import { useCart } from "../context/CartContext";

function Products({ id, name, price, imgUrl }) {
  const { getItemQty, increaseCartQty, decreaseCartQty, removeFromCart } =
    useCart();

  const qty = getItemQty(id);

  return (
    <div class="w-full max-w-sm bg-white rounded-lg ">
      <a href="#">
        <img
          class="p-8 rounded-t-lg"
          src="https://flowbite.com/docs/images/products/apple-watch.png"
          alt="product image"
        />
      </a>

      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 ">$599</span>
        <a
          onClick={() => increaseCartQty(id)}
          href="#"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Add to cart
        </a>
      </div>
    </div>
  );
}

export default Products;
