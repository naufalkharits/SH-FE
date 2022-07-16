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
                        ? "rounded-2xl bg-white p-2 hover:shadow-sm sm:bg-gray"
                        : "",
                    "sm:hidden"
                )}
            >
                <FiMenu
                    className={classNameJoin(
                        location.pathname === "/" ? "text-neutral-03" : "",
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
                    <div className="overflow-hidden rounded-t rounded-b-2xl bg-white shadow-md">
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
                                <Popover.Button className="rounded-full p-2 hover:shadow-sm">
                                    <FiX className="h-6 w-6" />
                                </Popover.Button>
                            </div>
                            {location.pathname === "/" && <Search />}
                            <div className="mt-4 space-y-1 font-medium">
                                <div className="mb-2 flex items-center justify-between rounded-md px-2 py-3 shadow">
                                    <Link
                                        to="/user"
                                        className="flex items-center gap-2"
                                    >
                                        {loading === "pending" ? (
                                            <>
                                                <div className="h-8 w-8 animate-pulse rounded bg-gray"></div>
                                                <span className="h-3 w-24 animate-pulse rounded bg-gray"></span>
                                            </>
                                        ) : (
                                            <>
                                                <img
                                                    className="h-8 rounded"
                                                    src={
                                                        profile?.picture ||
                                                        AltFoto
                                                    }
                                                    alt=""
                                                />
                                                <span className="font-bold">
                                                    {profile?.name}
                                                </span>
                                            </>
                                        )}
                                    </Link>
                                    {loading === "pending" ? (
                                        <div className="h-10 w-10 animate-pulse rounded-md bg-gray"></div>
                                    ) : (
                                        <Link
                                            to="/manage-product"
                                            className="rounded-md p-2 shadow hover:bg-gray"
                                        >
                                            <BiStore className="h-6 w-6" />
                                        </Link>
                                    )}
                                </div>
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
