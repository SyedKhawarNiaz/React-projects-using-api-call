import React from "react";
import btc from "../../assets/btc.png";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <motion.div
        className="w-full h-full"
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <picture className="flex justify-center items-center">
          <img src={btc} className="w-[45%]" />
        </picture>
      </motion.div>

      <div>
        <h1 className="capitalize font-serif text-2xl">Crypto-app</h1>
      </div>
    </div>
  );
}

export default Home;
