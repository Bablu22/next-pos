import { prisma } from "../../../../../prisma";

interface Props {
  params: {
    id: string;
  };
}

const ShoeInvoicePage = async ({ params }: Props) => {
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: params.id,
      },
      include: {
        items: true,
      },
    });

    if (!order) {
      return (
        <div className="p-8 border rounded shadow-lg">
          <p className="text-red-500">Order not found</p>
        </div>
      );
    }

    return (
      <div className="p-8 border rounded ">
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Invoice</h2>
            <p className="text-gray-600">Order ID: {order.id}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">
              Customer ID: {order.customerId}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <p>
            <strong>Total Price:</strong> ${order.totalPrice}
          </p>
          <p>
            <strong>Shipping Address:</strong> {order.shippingAddress}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Items</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Name</th>
                <th className="text-left px-4 py-2">Price</th>
                <th className="text-left px-4 py-2">Quantity</th>
                <th className="text-left px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">${item.price}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8 border rounded shadow-lg">
        <p className="text-red-500">An error occurred: </p>
      </div>
    );
  }
};

export default ShoeInvoicePage;
