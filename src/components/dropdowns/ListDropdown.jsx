import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiList } from "react-icons/fi";
import { Link } from "react-router-dom";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const ListDropdown = () => {
    return (
        <Menu as="div" className="relative z-10 hidden sm:inline-block">
            {({ open }) => (
                <>
                    <Menu.Button
                        className={className(
                            open
                                ? "text-primary-purple-04 hover:text-primary-purple-05"
                                : "",
                            "flex justify-center hover:text-primary-purple-05 focus:outline-none"
                        )}
                    >
                        <FiList className="h-6 w-6" />
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-5 w-56 overflow-hidden rounded-t rounded-b-2xl bg-white shadow-md ring-1 ring-neutral-02 ring-opacity-20">
                            <Menu.Item as="div" className="space-y-4 p-4">
                                {({ active }) => (
                                    <>
                                        <Link
                                            to="/manage-product"
                                            className={className(
                                                active
                                                    ? "hover:text-primary-purple-05"
                                                    : "",
                                                "block text-center"
                                            )}
                                        >
                                            Cek Toko
                                        </Link>
                                        <Link
                                            to="/user/infopenawar"
                                            className={className(
                                                active
                                                    ? "hover:text-primary-purple-05"
                                                    : "",
                                                "block text-center"
                                            )}
                                        >
                                            Cek Penawaran
                                        </Link>
                                    </>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
};

export default ListDropdown;
