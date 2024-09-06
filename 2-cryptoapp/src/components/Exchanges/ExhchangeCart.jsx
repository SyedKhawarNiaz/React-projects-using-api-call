import React from "react";
import { Link } from "react-router-dom";

function ExhchangeCart({ name, img, rank, url }) {
  return (
    <div>
      <div className="w-[100%] h-[100%] bg-neutral-800 rounded-3xl items-center text-neutral-300 p-4 flex flex-col  justify-center gap-3 hover:bg-gray-900 hover:shadow-sm hover:shadow-white hover:scale-[1.07] transition-all">
        <div className="w-13 h-13 m-auto rounded-2xl object-center">
          <img src={img} alt={name} className="rounded-sm" />
        </div>
        <div className="flex  flex-col items-center ">
          <p className="font-light">{name}</p>
          <p className="text-center">{rank}</p>
        </div>
        <Link to={url} target={"_blank"}>
          <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ExhchangeCart;
