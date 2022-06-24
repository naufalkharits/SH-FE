import { Popover } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import Category from "./Category";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
    const location = useLocation();

    return (
        <Popover>
            <nav
                className={
                    location.pathname === "/"
                        ? `bg-gradient-to-b from-[#FFE9CA] to-white sm:bg-white sm:bg-none sm:shadow`
                        : `bg-white shadow`
                }
            >
                <div className="container mx-auto flex items-center justify-between gap-8 p-4">
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
