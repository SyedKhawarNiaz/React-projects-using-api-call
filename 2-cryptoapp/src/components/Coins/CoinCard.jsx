import { Link } from "react-router-dom";
function CoinCard({ name, id, currencysymbol = "Є", price, img, symbol }) {
  return (
    <div>
      <Link to={`/coindetails/${id}`} target={"_parent"}>
        <div className="w-[70%] h-[60%] m-auto bg-neutral-800 rounded-3xl items-center text-neutral-300 p-4 flex flex-col  justify-center gap-2 hover:bg-gray-900 hover:shadow-sm hover:shadow-white hover:scale-[1.07] transition-all">
          <div className="w-13 h-13 m-auto rounded-2xl object-center">
            <img src={img} alt={name} className="rounded-sm" />
          </div>
          <div className="flex  flex-col items-center ">
            <p className="font-light">{name}</p>
            <p className="font-bold capitalize">{symbol}</p>
            <p className="text-center">
              {price ? `${currencysymbol} ${price}` : "NA"}
            </p>
          </div>
        </div>
      </Link> 
    </div>
  );
}

export default CoinCard;
