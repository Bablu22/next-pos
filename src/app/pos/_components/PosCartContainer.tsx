"use client";

import SelectOption, { Option } from "@/app/components/ui/SelectOption";
import { PlusIcon, TruckIcon, UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import PosCart from "./PosCart";

interface Props {
  customers: Option[];
}

const PosCartContainer = ({ customers }: Props) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    customers[0]
  );
  const handleSelectChange = (option: Option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div>
        <div className="flex items-center flex-wrap md:flex-nowrap justify-between space-x-4">
          <SelectOption
            options={customers}
            value={selectedOption}
            onChange={handleSelectChange}
          />
          <div className="flex items-center space-x-3">
            <div className="flex items-center text-sm rounded space-x-1 bg-gray-900 p-1.5 text-white">
              <UserIcon className="h-4 w-4" />
              <button className="">Customer</button>
            </div>
            <div className="flex items-center rounded text-sm space-x-1 bg-gray-900 p-1.5 text-white">
              <TruckIcon className="h-4 w-4" />
              <button className="">Shipping </button>
            </div>
            <div className="flex items-center text-sm rounded space-x-1 bg-gray-900 p-1.5 text-white">
              <PlusIcon className="h-4 w-4" />
              <button className="">Item</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-5">
        <PosCart user={selectedOption} />
      </div>
    </div>
  );
};

export default PosCartContainer;
