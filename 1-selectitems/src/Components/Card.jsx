import React from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { storeitems } from "../store/features/productslice";

function Card({ imgsrc, title, price, id }) {
  const dispatch = useDispatch();
  const handlecart = (e) => {
    e.preventDefault();
    dispatch(
      storeitems({
        Id: id,
        Title: title,
        Img: imgsrc,
        Price: price,
        quantity: 1,
      })
    );
    toast.success("Item added to cart");
  };
  return (
    <div>
      <div className="relative cardd h-[400px] w-[300px] rounded-md ">
        <img
          src={imgsrc}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{title}</h1>
          <p className="mt-2 text-sm text-gray-300">$ {price}</p>
          <button
            onClick={handlecart}
            className="mt-2 bg-blue-800 rounded p-2 hover:bg-black  inline-flex transition-all cursor-pointer items-center ho text-sm font-semibold text-white"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default Card;
