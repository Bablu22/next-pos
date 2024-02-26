"use client";
import { motion } from "framer-motion";
import chacked from "../../../../public/success.json";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";

const ConfirmOrder = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
        }}
        className="text-xl font-bold text-gray-800"
      >
        Order complete ✔
      </motion.h1>
      <Player
        autoplay
        loop
        src={chacked}
        style={{ height: "300px", width: "300px" }}
      ></Player>
      <Link
        href={`/dashboard/invoice`}
        className="bg-gray-900  text-white font-bold p-2 rounded"
      >
        Show Orders
      </Link>
    </div>
  );
};

export default ConfirmOrder;
