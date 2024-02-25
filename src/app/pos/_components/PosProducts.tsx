"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SelectOption, { Option } from "@/app/components/ui/SelectOption";
import { Product } from "@/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  products: Product[];
  categories: string[];
}

const PosProducts = ({ products, categories }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const searParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const categoriesOptions = [
    {
      id: 0,
      name: "All",
      value: "",
    },
    ...categories.map((category, index) => ({
      id: index + 1,
      name: category,
      value: category,
    })),
  ];

  const [selectedOption, setSelectedOption] = useState<Option | null>(
    categoriesOptions[0] // Set initial state to the "All" option
  );

  const handleSelectChange = (option: Option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const formattedData: any = {
      location: searParams.get("location"),
      category: selectedOption?.value,
      search: searchQuery,
    };
    const queryString = new URLSearchParams(formattedData).toString();

    router.push(`${pathName}?${queryString}`);
  }, [searchQuery, selectedOption]);

  return (
    <div className="h-full flex flex-col">
      <div className="relative w-full">
        <input
          type="text"
          className="h-10 w-full px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search anything..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
      <div className="mt-4">
        <SelectOption
          options={categoriesOptions}
          value={selectedOption}
          onChange={handleSelectChange}
        />
      </div>
      <div className="mt-4  overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 max-h-[40rem]">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="mt-4">
            <div className="flex items-center justify-center">
              <p className="text-center text-gray-500">No products found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PosProducts;
