import { Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Popover, Transition } from "@headlessui/react";
import { FiLogIn, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import Search from "./Search";
import SecondHand from "../images/SecondHand.png";
import AltFoto from "../images/AltFoto.png";
import { BiStore } from "react-icons/bi";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const MobileMenu = ({ drops }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    return (
        <>
            <Popover.Button
                className={className(
                    location.pathname === "/"
                        ? "bg-white sm:bg-gray"
                        : "bg-gray",
                    "rounded-2xl p-2 hover:shadow-sm sm:hidden"
                )}
            >
                <FiMenu className="h-8 w-8 text-neutral-03" />
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
                <Popover.Panel className="absolute inset-x-0 top-0 z-50 p-2 sm:hidden">
                    <div className="overflow-hidden rounded-t rounded-b-2xl bg-white shadow-md">
                        <div className="p-2">
                            <div className="mb-4 flex items-center justify-between">
                                <img
                                    className="h-10 cursor-pointer pl-2 pt-2"
                                    src={SecondHand}
                                    alt=""
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                />
                                <Popover.Button className="rounded-full p-2 hover:shadow-sm">
                                    <FiX className="h-6 w-6" />
                                </Popover.Button>
                            </div>
                            <Search />
                            <div className="mt-4 space-y-1 font-medium">
                                <Link
                                    to="/user"
                                    className="mb-2 flex items-center justify-between rounded-md px-2 py-3 shadow"
                                >
                                    <div className="flex items-center gap-1">
                                        <img
                                            className="h-8"
                                            src={drops?.picture || AltFoto}
                                            alt=""
                                        />
                                        <span className="font-bold">
                                            {drops?.name}
                                        </span>
                                    </div>
                                    <Link
                                        to="/manage-product"
                                        className="rounded-md p-2 shadow hover:bg-gray"
                                    >
                                        <BiStore className="h-6 w-6" />
                                    </Link>
                                </Link>
                                <Link
                                    to="/notification"
                                    className="block rounded-md p-2 hover:bg-gray"
                                >
                                    Notifikasi
                                </Link>
                                <Link
                                    to="/user/infopenawar"
                                    className="block rounded-md p-2 hover:bg-gray"
                                >
                                    Cek Penawaran
                                </Link>
                            </div>
                        </div>
                        <button
                            className="flex w-full items-center justify-center gap-2 bg-primary-purple-04 py-2 px-4 font-semibold text-white hover:bg-primary-purple-05"
                            onClick={() => {
                                if (user) {
                                    dispatch(logout());
                                }

                                if (!user) {
                                    navigate("/login");
                                }
                            }}
                        >
                            {user ? (
                                <>
                                    <FiLogOut className="h-5 w-5" />
                                    <span>Logout</span>
                                </>
                            ) : (
                                <>
                                    <FiLogIn className="h-5 w-5" />
                                    <span>Masuk</span>
                                </>
                            )}
                        </button>
                    </div>
                </Popover.Panel>
            </Transition>
        </>
    );
};

export default MobileMenu;
