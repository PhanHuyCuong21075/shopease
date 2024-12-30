import React from "react";
import { Wishlist } from "../commom/Wishlist";
import { AccountIcon } from "../commom/AccountIcon";
import { CartIcon } from "../commom/CartIcon";

const Navigation = () => {
  return (
    <nav className="flex items-center py-6 px-16 justify-between gap-40">
      <div className="flex items-center gap-6">
        {/* // logo */}
        <a className="text-3xl text-black font-bold gap-8">ShopCuCuong</a>
      </div>
      <div className="flex flex-wrap items-center gap-10 flex-1">
        {/* nav item  */}
        <ul className="flex gap-14 text-gray-600 hover:text-black">
          <li ><a href="/">Shop</a></li>
          <li ><a href="/mens">Men</a></li>
          <li ><a href="/womens">Woman</a></li>
          <li ><a href="/kids">Kid</a></li>
        </ul>
      </div>
      <div className="flex justify-center">
        {/* Search bar */}
        <div className="border rounded flex overflow-hidden">
          <button className="flex items-center justify-center px-4 border">
            <svg
              className="h-4 w-4 text-gray-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 105.293 14.293l5.414 5.414 1.414-1.414-5.414-5.414A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
            </svg>
          </button>
          <input
            type="text"
            className="px-4 py-2"
            placeholder="Search."
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* action item - i con  */}
        <ul className="flex items-center gap-8">
          <li><button><Wishlist /></button></li>
          <li><button><AccountIcon /></button></li>
          <li><button><CartIcon /></button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;