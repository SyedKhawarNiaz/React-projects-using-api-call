import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="w-3/4 m-auto mt-10">
      <div className="flex justify-around gap-4 items-center px-4 py-1 bg-black rounded-[15px] ring-1 ring-white">
        <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
          <NavLink to="/">
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9167 30H20.4167C19.2658 30 18.3333 29.1392 18.3333 28.0769V21.1538C18.3333 20.3038 17.5875 19.6154 16.6667 19.6154H13.3333C12.4125 19.6154 11.6667 20.3038 11.6667 21.1538V28.0769C11.6667 29.1392 10.7342 30 9.58333 30H2.08333C0.9325 30 0 29.1392 0 28.0769V13.3946C0 11.6262 0.878334 9.95539 2.3825 8.86154L14.2258 0.246923C14.68 -0.0823077 15.32 -0.0823077 15.7733 0.246923L27.6183 8.86154C29.1225 9.95539 30 11.6254 30 13.3931V28.0769C30 29.1392 29.0675 30 27.9167 30Z"
                fill="white"
              ></path>
            </svg>
          </NavLink>

          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
            Home
          </div>
        </div>

        <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
          <NavLink to="/exchanges">
            <svg
              width="20"
              height="20"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="4"
                width="56"
                height="56"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M16 32H48M32 16V48"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </NavLink>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
            Exchanges
          </div>
        </div>

        <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
          <NavLink to="/coins">
            <svg
              width="20"
              height="20"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="30"
                stroke="white"
                strokeWidth="4"
                fill="gold"
              />
              <text
                x="32"
                y="38"
                fontSize="20"
                fill="white"
                fontWeight="bold"
                textAnchor="middle"
                fontFamily="Arial"
              >
                ₿
              </text>
            </svg>
          </NavLink>

          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
            Coins
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
