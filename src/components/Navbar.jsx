import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { FiMenu, FiX, FiLogIn, FiSearch, FiPlus } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="navbar">
            <Disclosure as="nav" className="bg-white drop-shadow-high">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 py-3 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="text-gray-400 hover:bg-gray-700 inline-flex items-center justify-center rounded-md p-2 hover:text-neutral-02 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <FiX
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <FiMenu
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="mr-6 hidden h-8 w-auto md:block"
                                            src="/img/logo1.png"
                                            alt="Workflow"
                                        />
                                        <label className="relative block text-neutral-03">
                                            <span className="sr-only">
                                                Search
                                            </span>
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                                                <FiSearch className="h-5 w-5" />
                                            </span>
                                            <input
                                                className="rounded-2xl bg-gray p-3 py-3 pl-6 pr-9 placeholder:text-neutral-03"
                                                placeholder="Cari di sini ..."
                                                type="text"
                                                name="search"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="hidden items-center rounded-xl bg-primary-purple-04 py-3 px-4 text-neutral-01 hover:text-black md:flex"
                                    >
                                        <FiLogIn className="mr-2 text-xl" />
                                        <p>Masuk</p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                <button
                                    type="button"
                                    className="flex items-center rounded-xl bg-primary-purple-04 py-3 px-4 text-neutral-01 hover:text-black"
                                >
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <FiLogIn className="mr-1 text-lg" />
                                    <p>Masuk</p>
                                </button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <button
                type="button"
                className="fixed inset-x-0 bottom-10 mx-auto flex items-center rounded-xl bg-primary-purple-04 py-3 px-7 text-neutral-01 drop-shadow-high hover:text-black"
            >
                <span className="sr-only">View notifications</span>
                <FiPlus className="mr-5 text-lg" />
                <p>Jual</p>
            </button>
        </div>
    );
};

export default Navbar;
