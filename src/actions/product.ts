"use server";

import { prisma } from "../../prisma";

interface SearchParams {
  category?: string;
  search?: string;
}

export const getProductsFromDB = async (searchParams: SearchParams) => {
  try {
    const { category, search } = searchParams;
    const products = await prisma.product.findMany({
      where: {
        OR: [
          category && category !== ""
            ? { category: { contains: category, mode: "insensitive" } }
            : { category: { not: "" } },
          search && search !== ""
            ? { name: { contains: search, mode: "insensitive" } }
            : {},
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products;
  } catch (error: any) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

export const extractCategoriesFromProduct = async () => {
  try {
    const products = await prisma.product.findMany();
    const categories = products.map((product) => {
      return product.category;
    });
    const uniqueCategories = [...new Set(categories)];

    return uniqueCategories;
  } catch (error: any) {
    return {
      status: 500,
      message: error.message,
    };
  }
};
