import React from "react";
import { useState, useEffect } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useParams } from "react-router-dom";
import { server } from "../../main";
import axios from "axios";
import Loader from "../Loader";
import Chartjs from "../Chartjs/Chartjs";
function CoinDetails() {
  const { id } = useParams();
  const [coin, setcoin] = useState([]);
  const [loading, setloading] = useState(true);
  const [currency, setcurrency] = useState("eur");
  const [days, setdays] = useState("24h");
  const [chartarr, setchartarr] = useState([]);

  const currencysymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  useEffect(() => {
    const fetcoins = async () => {
      const { data } = await axios.get(`${server}/coins/${id}`);
      const { data: chartdata } = await axios.get(
        `${server}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
      );
      setcoin(data);
      setchartarr(chartdata.prices);
      setloading(false);
    };
    fetcoins();
  }, [id]);

  return (
    <div>
      <div className="mt-8 ml-[1vw]">
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
      {loading ? (
        <div className="absolute left-[50vw] top-[20vw]">
          <Loader />
        </div>
      ) : (
        <>
          {/* charjs */}
          <div className="w-[90%] m-auto bg-white">
            <Chartjs arr={chartarr} days={days} currency={currencysymbol} />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="opacity-[0.7]">
              Last Updated {Date(coin.market_data.last_updated).split("G")[0]}
            </h1>

            <img src={coin.image.large} className="w-[6rem] mt-5" />
            <h3>
              {currencysymbol} {coin.market_data.current_price[currency]}
            </h3>
            <div className="icon flex">
              {coin.market_data.price_change_percentage_24h < 0 ? (
                <TiArrowSortedDown className="text-red-900 size-7" />
              ) : (
                <TiArrowSortedUp className="text-green-800 size-7" />
              )}
              {coin.market_data.market_cap_change_percentage_24h} %
            </div>

            <div className="-ml-14">
              <h1 className="bg-blue-800 text-white w-[30px]  rounded-sm">
                #{coin.market_data.market_cap_rank}
              </h1>
            </div>
            <CustomBar
              high={`${currencysymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencysymbol}${coin.market_data.low_24h[currency]}`}
            />

            <div className="w-[60%] mt-3 text-blue-400 font-bold  ">
              <div className="flex justify-between">
                <h1>Circulating Supply</h1>
                <p className="text-white">
                  {coin.market_data.circulating_supply}
                </p>
              </div>
              <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
              <div className="flex justify-between">
                <h1>Max Supply</h1>
                <p className="text-white">
                  {coin.market_data.max_supply != null
                    ? coin.market_data.max_supply
                    : "Null"}
                </p>
              </div>
              <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
              <div className="flex justify-between">
                <h1>Market Cap</h1>
                <p className="text-white">
                  {`${currencysymbol}  ${coin.market_data.market_cap[currency]}`}
                </p>
              </div>
              <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
              <div className="flex justify-between">
                <h1>All Time High</h1>
                <p className="text-white">
                  {`${currencysymbol}  ${coin.market_data.ath[currency]}`}
                </p>
              </div>
              <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
              <div className="flex justify-between">
                <h1>All Time Low</h1>
                <p className="text-white">
                  {`${currencysymbol}  ${coin.market_data.atl[currency]}`}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const CustomBar = ({ high, low }) => {
  return (
    <>
      <div className="w-[60%] bg-neutral-200 dark:bg-neutral-600 rounded-lg mt-2 ">
        <div
          className="bg-blue-700 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
          style={{ width: "50%" }}
        >
          50%
        </div>
      </div>
      <div className="flex w-[60%] justify-between items-center mt-3">
        <h1 className="bg-green-500 text-white  rounded-sm p-[1px]">{high}</h1>
        <h1 className=" text-white ">24Hr Change</h1>
        <h1 className="bg-red-700 text-white rounded-sm p-[1px]">{low}</h1>
      </div>
    </>
  );
};

export default CoinDetails;
