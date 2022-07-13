import { useLocation, useParams } from "react-router-dom";
import { Popover } from "@headlessui/react";
import Category from "./Category";
import DesktopMenu from "./DesktopMenu";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const Navbar = () => {
    const { productId } = useParams();
    const location = useLocation();

    return (
        <Popover
            className={
                location.pathname === `/product/${productId}`
                    ? "hidden sm:block"
                    : ""
            }
        >
            <nav
                className={className(
                    location.pathname === "/"
                        ? "bg-gradient-to-b from-[#FFE9CA] to-white sm:bg-none"
                        : "bg-white",
                    "sm:shadow"
                )}
            >
                <div className="container mx-auto flex items-center gap-8 p-4 sm:justify-between">
                    <DesktopMenu />
                </div>
                {location.pathname === "/" && (
                    <>
                        <div className="container mx-auto flex justify-center gap-4 px-4 sm:hidden">
                            <div className="w-full">
                                <div className="text-xl font-bold">
                                    Bulan Ramadhan
                                </div>
                                <div className="text-xl font-bold">
                                    Banyak diskon!
                                </div>
                                <div>Diskon Hingga</div>
                                <div>60%</div>
                            </div>
                            <img
                                className="w-full"
                                src="/img/hero.png"
                                alt=""
                            />
                        </div>
                        <div className="container mx-auto p-4 sm:hidden">
                            <Category />
                        </div>
                    </>
                )}
            </nav>
        </Popover>
    );
};

export default Navbar;
