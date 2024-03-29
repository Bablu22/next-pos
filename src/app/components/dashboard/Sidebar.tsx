"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/contants";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarNavigation, setSidebarNavigation] = useState(navigation);
  const pathName = usePathname();

  useEffect(() => {
    setSidebarNavigation((prevNavigation) =>
      prevNavigation.map((item) => ({
        ...item,
        current: item.href === pathName,
      }))
    );
  }, [pathName]);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-950 px-6 pb-2">
                  <div className="flex h-16 shrink-0 items-center justify-center">
                    <h1 className="text-2xl text-center font-bold text-white">
                      Next CRM
                    </h1>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {sidebarNavigation.map((item) => (
                            <li key={item.id}>
                              <Link
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-indigo-700 text-white"
                                    : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-white"
                                      : "text-indigo-200 group-hover:text-white",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-950 px-6">
          <div className="flex h-16 shrink-0 items-center justify-center">
            <h1 className="text-2xl text-center font-bold text-white">
              Next CRM
            </h1>
          </div>
          <>
            <nav className="flex flex-1 flex-col">
              <motion.ul
                transition={{
                  opacity: { ease: "linear" },
                  layout: { duration: 0.3 },
                }}
                role="list"
                className="flex flex-1 flex-col gap-y-7"
              >
                <motion.li layout className="-mx-2 space-y-1">
                  {sidebarNavigation.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-700 text-white  "
                          : "text-white hover:text-white hover:bg-gray-800",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition ease-in-out delay-75 "
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-indigo-200 group-hover:text-white",
                          "h-6 w-6 shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </motion.li>
              </motion.ul>
            </nav>
          </>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-950 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-indigo-200 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white">
          Dashboard
        </div>
      </div>
    </>
  );
};

export default Sidebar;
