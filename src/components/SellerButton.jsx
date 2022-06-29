import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiEdit3, FiLogOut,  FiList } from "react-icons/fi";
import { Link } from "react-router-dom";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const SellerButton = () => {

    return (
        <Menu as="div" className="relative z-10 hidden sm:inline-block">
            <div>
                <Menu.Button className="flex justify-center">
                    <FiList className="h-6 w-6 hover:text-primary-purple-05" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-neutral-02 ring-opacity-20">
                    <Menu.Item as="div" className="space-y-4 p-4">
                        {({ active }) => (
                            <>
                                <Link
                                    to="/manage-product"
                                    className={className(
                                        active
                                            ? "hover:text-primary-purple-05"
                                            : "",
                                        "flex w-full items-center justify-center gap-2"
                                    )}
                                >
                                    
                                    Toko Saya
                                </Link>
                                <Link
                                    to="/user/infopenawar"
                                    className={className(
                                        active
                                            ? "hover:text-primary-purple-05"
                                            : "",
                                        "flex w-full items-center justify-center gap-2"
                                    )}
                                >
                                    
                                    Penawaran Saya
                                </Link>
                            </>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default SellerButton;
