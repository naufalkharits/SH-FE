import { Fragment } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Popover, Transition } from "@headlessui/react"
import { FiLogIn, FiLogOut, FiMenu, FiX } from "react-icons/fi"
import { BiStore } from "react-icons/bi"
import { logout } from "../redux/authSlice"
import Search from "./Search"
import SecondHand from "../images/SecondHand.png"
import AltFoto from "../images/AltFoto.png"
import { resetProductState } from "../redux/productsSlice"
import { classNameJoin } from "../utils/classNameJoin"

const MobileMenu = ({ profile }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, loading } = useSelector((state) => state.auth)

    return (
        <>
            <Popover.Button
                className={classNameJoin(
                    location.pathname === "/"
                        ? "rounded-2xl bg-white p-2 hover:shadow-sm dark:bg-zinc-900 dark:hover:shadow-zinc-800"
                        : "",
                    "sm:hidden"
                )}
            >
                <FiMenu
                    className={classNameJoin(
                        location.pathname === "/"
                            ? "text-neutral-03 dark:text-zinc-400"
                            : "dark:text-white",
                        "h-8 w-8"
                    )}
                />
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
                    <div className="overflow-hidden rounded-t rounded-b-2xl bg-white shadow-md dark:bg-zinc-900">
                        <div className="p-2">
                            <div className="mb-4 flex items-center justify-between">
                                <Link
                                    to="/"
                                    replace={
                                        location.pathname === "/" && {
                                            replace: true,
                                        }
                                    }
                                >
                                    <img
                                        className="h-10 cursor-pointer pl-2 pt-2"
                                        src={SecondHand}
                                        alt=""
                                    />
                                </Link>
                                <Popover.Button className="rounded-full p-2 hover:shadow-sm dark:text-white dark:hover:shadow-zinc-800">
                                    <FiX className="h-6 w-6" />
                                </Popover.Button>
                            </div>
                            {location.pathname === "/" && <Search />}
                            <div className="mt-4 space-y-1 font-medium">
                                {user && (
                                    <div className="mb-2 flex items-center justify-between rounded-md px-2 py-3 shadow dark:shadow-zinc-800">
                                        <Link
                                            to="/user"
                                            className="flex items-center gap-2.5"
                                        >
                                            {loading === "pending" ? (
                                                <>
                                                    <div className="h-8 w-8 animate-pulse rounded bg-gray dark:bg-zinc-800"></div>
                                                    <span className="h-3 w-24 animate-pulse rounded bg-gray dark:bg-zinc-800"></span>
                                                </>
                                            ) : (
                                                <>
                                                    <img
                                                        className="h-8 w-8 rounded-full object-cover object-center"
                                                        src={
                                                            profile?.picture ||
                                                            AltFoto
                                                        }
                                                        alt=""
                                                    />
                                                    <span className="font-bold dark:text-white">
                                                        {profile?.name}
                                                    </span>
                                                </>
                                            )}
                                        </Link>
                                        {loading === "pending" ? (
                                            <div className="h-10 w-10 animate-pulse rounded-md bg-gray dark:bg-zinc-800 dark:shadow-zinc-800"></div>
                                        ) : (
                                            <Link
                                                to="/manage-product"
                                                className="rounded-md p-2 shadow hover:bg-gray dark:text-white dark:shadow-zinc-800 dark:hover:bg-zinc-800"
                                            >
                                                <BiStore className="h-6 w-6" />
                                            </Link>
                                        )}
                                    </div>
                                )}
                                <Link
                                    to="/notification"
                                    className="block rounded-md p-2 hover:bg-gray dark:text-white dark:hover:bg-zinc-800"
                                >
                                    Notifikasi
                                </Link>
                                <Link
                                    to="/user/infopenawar"
                                    className="block rounded-md p-2 hover:bg-gray dark:text-white dark:hover:bg-zinc-800"
                                >
                                    Cek Penawaran
                                </Link>
                            </div>
                        </div>
                        <button
                            className="flex w-full items-center justify-center gap-2 bg-primary-purple-04 py-2 px-4 font-semibold text-white hover:bg-primary-purple-05"
                            onClick={() => {
                                if (user) {
                                    dispatch(logout())
                                    dispatch(resetProductState())
                                }

                                if (!user) {
                                    navigate("/login")
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
    )
}

export default MobileMenu
