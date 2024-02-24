"use client";

import { addToCart } from "@/lib/features/cartSlice";
import { useAppDispatch } from "@/lib/store";
import { Product } from "@/types";
import formatPrice from "@/utils/formatPrice";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      })
    );
  };

  return (
    <div
      onClick={handleAddToCart}
      className="bg-white rounded-lg border p-2 cursor-pointer md:max-w-sm md:w-full "
    >
      <div className="aspect-w-1 aspect-h-1">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full rounded-md object-cover"
          placeholder="blur"
          blurDataURL={product.image}
          width={100}
          height={100}
        />
      </div>
      <div className="px-1 py-4">
        <div className="font-bold text-xs mb-2">{product.name}</div>
        <p className="text-gray-700 text-xs">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
