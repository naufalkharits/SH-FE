import { useLocation, useParams } from "react-router-dom"
import { Popover } from "@headlessui/react"
import Category from "./Category"
import DesktopMenu from "./DesktopMenu"
import { classNameJoin } from "../utils/classNameJoin"
import Box from "../images/Box.png"

const Navbar = () => {
    const { productId } = useParams()
    const location = useLocation()

    return (
        <Popover
            className={
                location.pathname === `/product/${productId}`
                    ? "hidden sm:block"
                    : ""
            }
        >
            <nav
                className={classNameJoin(
                    location.pathname === "/"
                        ? "bg-gradient-to-b from-[#FFE9CA] to-white dark:to-zinc-900 sm:bg-none"
                        : "bg-white dark:bg-zinc-900",
                    "sm:shadow sm:dark:shadow-zinc-800"
                )}
            >
                <div className="container mx-auto flex items-center gap-8 p-4 sm:justify-between">
                    <DesktopMenu />
                </div>
                {location.pathname === "/" && (
                    <>
                        <div className="container mx-auto mt-4 flex justify-center gap-4 px-4 sm:hidden">
                            <div className="w-full">
                                <div className="text-xl font-bold text-neutral-05">
                                    Bulan Ramadhan
                                    <div>Banyak diskon!</div>
                                </div>
                                <div className="mt-4 mb-1 text-neutral-05">
                                    Diskon Hingga
                                </div>
                                <div className="text-lg font-medium text-alert-danger">
                                    60%
                                </div>
                            </div>
                            <img className="w-full" src={Box} alt="" />
                        </div>
                        <div className="container mx-auto p-4 sm:hidden">
                            <Category />
                        </div>
                    </>
                )}
            </nav>
        </Popover>
    )
}

export default Navbar
