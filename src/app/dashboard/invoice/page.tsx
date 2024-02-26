import { getAllOrders } from "@/actions/orders";
import Link from "next/link";
import React from "react";

const InvoicePage = async () => {
  const res = await getAllOrders();
  const orders = res.data;
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">All Orders</h1>
      {orders?.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">Order ID</th>
                <th className="border px-4 py-2">Customer ID</th>
                <th className="border px-4 py-2">Total Price</th>
                <th className="border px-4 py-2">Shipping Address</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order: any) => (
                <tr key={order.id}>
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.customerId}</td>
                  <td className="border px-4 py-2">{order.totalPrice}</td>
                  <td className="border px-4 py-2">{order.shippingAddress}</td>
                  <td className="border px-4 py-2">
                    <Link
                      href={`/dashboard/invoice/${order.id}`}
                      className="bg-gray-900  text-white font-bold p-2 rounded"
                    >
                      Show Invoice
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InvoicePage;
