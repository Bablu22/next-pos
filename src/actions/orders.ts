"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma";

export const createOrder = async (orderData: any) => {
  try {
    const { id, customerId, items, totalPrice, shippingAddress } = orderData;

    const createdOrder = await prisma.order.create({
      data: {
        id,
        customerId,
        totalPrice,
        shippingAddress,
        items: {
          createMany: {
            data: items.map((item: any) => ({
              name: item.name,
              price: item.price,
              quantity: item.quantity,
            })),
          },
        },
      },
      include: {
        items: true,
        customer: true,
      },
    });
    revalidatePath("/dashboard/invoice");
    return createdOrder;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const getAllOrders = async () => {
  try {
    const ordersWithItems = await prisma.order.findMany({
      include: {
        items: true,
      },
    });
    return {
      data: ordersWithItems,
    };
  } catch (error: any) {
    return {
      erroe: error.message,
    };
  }
};
