import React from "react";
import ItemList from "./Items/ItemList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Selecteditems() {
  const state = useSelector((state) => state.list.data);
  const total = useSelector((state) => state.list.total);
  const navigate = useNavigate();
  return (
    <div>
      <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
        <h2 className="text-3xl font-bold">Your cart</h2>
        <p className="mt-3 text-sm font-medium text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius
          repellat ipsam, sit praesentium incidunt.
        </p>
        <ul className="flex flex-col divide-y divide-gray-200">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between"></li>
          {state.map((items) => {
            return (
              <ItemList
                key={items.Id}
                img={items.Img}
                id={items.Id}
                title={items.Title}
                price={items.Price}
              />
            );
          })}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:<span className="font-semibold"> ₹{total}</span>
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {/* <Link  to={'/products'}> */}
          <button
            onClick={() => navigate("/products")}
            type="button"
            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Back to shop
          </button>
          {/* </Link> */}
          <button
            type="button"
            className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selecteditems;
