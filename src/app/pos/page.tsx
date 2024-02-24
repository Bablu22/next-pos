import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import PosProducts from "./_components/PosProducts";
import PosCartContainer from "./_components/PosCartContainer";
import {
  extractCategoriesFromProduct,
  getProductsFromDB,
} from "@/actions/product";
import { Product } from "@/types";

interface Props {
  searchParams: {
    location: string;
    category: string;
    search: string;
  };
}

const PosDashboard = async ({ searchParams }: Props) => {
  const products = await getProductsFromDB({
    search: searchParams.search,
    category: searchParams.category,
  });
  const categories = await extractCategoriesFromProduct();
  console.log(searchParams);

  return (
    <div className=" bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <span className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                <HomeIcon className="w-5 h-5" />
                <span>Dashboard</span>
              </span>
            </Link>
            <Link href="/dashboard/pos">
              <span className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                <MapPinIcon className="w-5 h-5" />
                <span>{searchParams.location}</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 py-1 px-3 rounded-md">
              <ArrowPathIcon className="w-5 h-5" />
              <span>Hold</span>
            </button>
            <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 py-1 px-3 rounded-md">
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 h-[600px]">
          <div className="bg-white p-6 rounded">
            <PosCartContainer />
          </div>
          <div className="bg-white p-6 rounded">
            <PosProducts
              categories={categories as string[]}
              products={products as any}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PosDashboard;
