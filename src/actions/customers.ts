"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../prisma";

export interface ICustomer {
  id?: string;
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export const saveCustomerToDB = async (customer: ICustomer) => {
  try {
    const createdCustomer = await prisma.customer.create({
      data: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        street: customer.street,
        city: customer.city,
        state: customer.state,
        zipCode: customer.zipCode,
        country: customer.country,
      },
    });

    revalidatePath("/dashboard/customers/create");
    return {
      success: true,
      message: "Customer created successfully",
      NextDataPathnameNormalizer: createdCustomer,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const getCustomrsFromDB = async () => {
  try {
    const customers = await prisma.customer.findMany();
    return {
      success: true,
      message: "Customers fetched successfully",
      data: customers,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const editCustomerFromDB = async (customer: ICustomer, id: string) => {
  try {
    const res = await prisma.customer.update({
      where: {
        id: id,
      },
      data: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        street: customer.street,
        city: customer.city,
        state: customer.state,
        zipCode: customer.zipCode,
        country: customer.country,
      },
    });

    if (!res) {
      return {
        error: "Could not update customer",
      };
    }
    revalidatePath("/dashboard/customers/create");

    return {
      data: res,
      message: "Customer updated successfully",
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
