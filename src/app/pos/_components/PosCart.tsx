import { useAppDispatch, useAppSelector } from "@/lib/store";
import {
  MinusCircleIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/lib/features/cartSlice";

const PosCart = () => {
  const cartState = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  return (
    <AnimatePresence>
      {cartState.length === 0 ? (
        <p className="text-gray-600 text-center mt-4">Your cart is empty.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 rounded border">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Items
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <AnimatePresence>
            {cartState.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <p
                    className="text-sm text-gray-900 overflow-hidden overflow-ellipsis"
                    style={{ maxWidth: "120px" }}
                  >
                    {product.name}
                  </p>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        dispatch(decrementQuantity(product.id as number));
                      }}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                    >
                      <MinusCircleIcon className="w-5 h-5" />
                    </button>
                    <input
                      type="text"
                      className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md w-10 text-center mx-2"
                      value={product.quantity}
                      readOnly
                    />
                    <button
                      onClick={() => {
                        dispatch(incrementQuantity(product.id as number));
                      }}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                    >
                      <PlusCircleIcon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    <PencilSquareIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeFromCart(product.id as number));
                    }}
                    className="text-red-600 hover:text-red-900 ml-2"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </table>
      )}
    </AnimatePresence>
  );
};

export default PosCart;
