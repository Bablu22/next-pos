import { products } from "../src/lib/products";
import { prisma } from ".";

async function main() {
  console.log("Seed data starting...");
  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        category: product.category,
        image: product.image,
        price: product.price,
        quantity: product.quantity,
      },
    });
  }

  console.log("Seed data inserted successfully");
}

main();
