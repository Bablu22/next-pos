// CustomersTable.tsx

import Link from "next/link";
import { ICustomer } from "@/actions/customers";
import { PencilIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

interface Props {
  customers: ICustomer[] | null;
}

const CustomersTable = ({ customers }: Props) => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 bg-white p-4 rounded">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Customers
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              Manage your customers and add new customers
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link
              href="/dashboard/customers/create"
              className="block rounded-md bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm "
            >
              Add new customer
            </Link>
          </div>
        </div>
        <div className="-mx-4 mt-10 border sm:mx-0 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-3 pr-4 text-left text-sm font-semibold text-gray-900"
                >
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {customers &&
                customers.map((customer) => (
                  <tr key={customer.id} className="border-b">
                    <td className="py-4 pl-4 pr-3 text-sm sm:pl-6">
                      {customer.name}
                    </td>
                    <td className="py-4 pl-3 pr-4 text-sm">{customer.email}</td>
                    <td className="py-4 pl-3 pr-4 text-sm">{customer.phone}</td>
                    <td className="py-4 pl-3 pr-4 text-sm">
                      {customer.street}, {customer.city}, {customer.state},{" "}
                      {customer.zipCode}, {customer.country}
                    </td>
                    <td className="py-4 pl-3 pr-4 text-sm">
                      <Link
                        href={`/dashboard/customers/edit/${customer.id}`}
                        className="text-white p-2 bg-indigo-900  rounded flex items-center space-x-1"
                      >
                        <span> Edit</span>
                        <PencilSquareIcon className="w-5 h-5" />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CustomersTable;
