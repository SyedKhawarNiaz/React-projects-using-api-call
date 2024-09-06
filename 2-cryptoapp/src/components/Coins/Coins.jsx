import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../main";
import Loader from "../Loader";
import CoinCard from "./CoinCard";
function Coins() {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [currency, setcurrency] = useState("eur");
  const [page, setpage] = useState(1);
  const btns = new Array(132).fill(1);
  const handlepag = (page) => {
    setpage(page);
    setloading(true);
  };
  const currencysymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  useEffect(() => {
    const fetcoins = async () => {
      const { data } = await axios.get(
        `${server}/coins/markets?vs_currency=${currency}&page=${page}`
      );
      setcoins(data);
      setloading(false);
    };
    fetcoins();
  }, [currency, page]);
  return (
    <div>
      <div className="mt-10 ml-20">
        <form
          onChange={(e) => setcurrency(e.target.value)}
          className="flex gap-1"
        >
          <input type="radio" id="usd" name={currency} value="usd" />
          <label htmlFor="usd">USD</label>

          <input type="radio" id="contactChoice2" name={currency} value="inr" />
          <label htmlFor="inr">INR</label>

          <input type="radio" id="contactChoice3" name={currency} value="eur" />
          <label htmlFor="eur">EUR</label>
        </form>
      </div>
      <div className="flex flex-wrap justify-center mt-[4rem] items-center gap-8">
        {loading ? (
          <div className="mt-[4%]">
            <Loader />
          </div>
        ) : (
          coins.map((i) => {
            return (
              <CoinCard
                id={i.id}
                key={i.name}
                name={i.name}
                img={i.image}
                currencysymbol={currencysymbol}
                symbol={i.symbol}
                price={i.current_price}
              />
            );
          })
        )}
      </div>
      <div className="flex mt-3 m-auto overflow-x-auto w-1/2 gap-2">
        {btns.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handlepag(index + 1)}
              className=" bg-white text-black p-3  rounded-md"
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Coins;
