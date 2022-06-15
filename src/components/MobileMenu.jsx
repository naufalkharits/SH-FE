import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { FiLogIn, FiMenu, FiX } from "react-icons/fi";
import Search from "./Search";

const MobileMenu = () => {
    const navigate = useNavigate();

    return (
        <>
            <Popover.Button className="rounded-2xl bg-gray p-2 sm:hidden">
                <FiMenu className="h-8 w-8 " />
            </Popover.Button>
            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className="absolute inset-x-0 top-0 z-50 p-2 md:hidden">
                    <div className="overflow-hidden rounded-md bg-white shadow">
                        <div className="p-2">
                            <div className="mb-4 flex items-center justify-between">
                                <img
                                    className="h-8 cursor-pointer pl-2 pt-2"
                                    src="/img/logo1.png"
                                    alt=""
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                />
                                <Popover.Button className="rounded-2xl p-2 hover:bg-gray">
                                    <FiX className="h-6 w-6" />
                                </Popover.Button>
                            </div>
                            <Search />
                        </div>
                        <Link
                            to="/login"
                            className="flex  w-full items-center justify-center gap-2 bg-primary-purple-04 py-2 px-4 font-semibold text-neutral-01 hover:bg-primary-purple-05 "
                        >
                            <FiLogIn className="h-5 w-5" />
                            <span>Masuk</span>
                        </Link>
                    </div>
                </Popover.Panel>
            </Transition>
        </>
    );
};

export default MobileMenu;
