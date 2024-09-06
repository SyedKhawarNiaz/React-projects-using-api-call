import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../main";
import Loader from "../Loader";
import ExhchangeCart from "./ExhchangeCart";
function Exhanges() {
  const [exchanges, setexchanges] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchexchange = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      setexchanges(data);
      setloading(false);
    };
    fetchexchange();
  }, []);
  return (
    <div className="flex flex-wrap justify-center mt-[4rem] items-center gap-14">
      {loading ? (
        <div className="mt-[4%]">
          <Loader />
        </div>
      ) : (
        exchanges.map((i) => {
          return (
            <ExhchangeCart
              key={i.name}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
            />
          );
        })
      )}
    </div>
  );
}

export default Exhanges;
