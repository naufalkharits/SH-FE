import { Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Popover, Transition } from "@headlessui/react";
import { FiLogIn, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import Search from "./Search";

const MobileMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    return (
        <>
            <Popover.Button
                className={
                    location.pathname === "/"
                        ? `rounded-2xl bg-white p-2 sm:hidden sm:bg-gray`
                        : `rounded-2xl bg-gray p-2 sm:hidden`
                }
            >
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
                <Popover.Panel className="absolute inset-x-0 top-0 z-50 p-2 sm:hidden">
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
                            <div className="mt-4 space-y-1 font-medium">
                                <Link
                                    to="/notification"
                                    className="block rounded-md p-2 hover:bg-gray"
                                    href="#"
                                >
                                    Notifikasi
                                </Link>
                                <Link
                                    to="/manage-product"
                                    className="block rounded-md p-2 hover:bg-gray"
                                    href="#"
                                >
                                    Daftar Jual
                                </Link>
                                <Link
                                    to="/user/profile"
                                    className="block rounded-md p-2 hover:bg-gray"
                                    href="#"
                                >
                                    Akun Saya
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
