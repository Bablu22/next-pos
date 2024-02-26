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
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/lib/features/cartSlice";
import formatPrice from "@/utils/formatPrice";
import cartAnimation from "../../../../public/cart.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Option } from "@/app/components/ui/SelectOption";
import Modal from "@/app/components/ui/Modal";
import { openModal } from "@/lib/features/modalSlice";
import toast from "react-hot-toast";
import { createOrder } from "@/actions/orders";
import ConfirmOrder from "./ConfirmOrder";

interface Props {
  user: Option | null;
}

const PosCart = ({ user }: Props) => {
  const cartState = useAppSelector((state) => state.cart.products);
  const confirmOrdermodalOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  const [taxRate, setTaxRate] = useState(10); // Represented as 10 for 10%
  const [shippingCost, setShippingCost] = useState(5);
  const [discountAmount, setDiscountAmount] = useState(0);

  const subtotal = cartState.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + tax + shippingCost - discountAmount;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    dispatch(openModal());
  };

  const orderData = {
    customerId: user?.id as string,
    items: cartState.map((item) => {
      return {
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
        name: item.name,
      };
    }),
    totalPrice: total,
    shippingAddress: "your_shipping_address",
  };

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOrder = async () => {
    try {
      setLoading(true);
      const res: any = await createOrder(orderData);
      if (res.error) throw new Error(res.error);

      toast.success("Order placed successfully");
      setSuccess(false);
      setSuccess(true);
      dispatch(clearCart());
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className=" h-96  overflow-y-auto overflow-x-hidden">
        {cartState.length === 0 ? (
          <div className="mt-16 -z-10">
            <Player
              autoplay
              loop
              src={cartAnimation}
              style={{ height: "100px", width: "100px" }}
            ></Player>
            <p className="text-gray-600 text-center mt-4">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 rounded border ">
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
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"></th>
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
                  <td className="px-2 py-4 whitespace-nowrap flex items-center  space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      <PencilSquareIcon className="w-5 h-5" />
                    </button>
                    <p
                      className="text-sm bg-gray-100 p-2 rounded text-gray-900 overflow-hidden overflow-ellipsis"
                      style={{ maxWidth: "150px" }}
                    >
                      {product.name}
                    </p>
                  </td>

                  <td className="px-2 py-4 whitespace-nowrap ">
                    <div className="text-sm text-gray-900 bg-gray-100 p-2 rounded">
                      {formatPrice(product.price)}
                    </div>
                  </td>
                  <td className="px-2 py-4 whitespace-nowrap">
                    <div className="flex items-center bg-gray-100 p-2 rounded">
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
                  <td className="px-0 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 bg-gray-100 p-2 rounded">
                      {formatPrice(product.price * product.quantity)}
                    </div>
                  </td>
                  <td className="px-0 py-4 whitespace-nowrap ">
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
      </div>
      <dl className="mt-6 space-y-4 bg-gray-100 p-4">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">
            {formatPrice(subtotal)}
          </dd>
        </div>
        {/* Shipping Input */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-sm text-gray-600">Shipping</dt>
          <dd className="text-sm font-medium text-gray-900">
            <input
              type="number"
              value={shippingCost}
              onChange={(e) => setShippingCost(parseFloat(e.target.value))}
              className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md w-20 text-center"
            />
          </dd>
        </div>
        {/* Tax Input */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-sm text-gray-600">Tax (%)</dt>
          <dd className="text-sm font-medium text-gray-900">
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(parseFloat(e.target.value))}
              className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md w-20 text-center"
            />
          </dd>
        </div>
        {/* Total */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Total</dt>
          <dd className="text-base font-medium text-gray-900">
            {formatPrice(total)}
          </dd>
        </div>
      </dl>
      <div className="mt-6 flex items-center justify-between space-x-5">
        <button
          onClick={handleOpenModal}
          type="submit"
          className="w-full rounded-md border border-transparent bg-gray-900 px-4 py-1 text-base font-medium text-white shadow-sm "
        >
          Checkout
        </button>
        <button
          type="submit"
          onClick={() => {
            dispatch(clearCart());
          }}
          className="w-full rounded-md border border-transparent bg-rose-900 px-4 py-1 text-base font-medium text-white shadow-sm "
        >
          Cancel
        </button>
      </div>
      {isModalOpen && (
        <Modal>
          {success ? (
            <ConfirmOrder />
          ) : (
            <div className="p-4">
              {/* Order summary */}
              <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{formatPrice(shippingCost)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>
              {/* Button to confirm order */}
              <button
                onClick={handleOrder}
                disabled={loading}
                className="w-full mt-4 rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600"
              >
                {loading ? "Loading" : "Confirm Order"}
              </button>
            </div>
          )}
        </Modal>
      )}
    </AnimatePresence>
  );
};
export default PosCart;
