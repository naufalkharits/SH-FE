import { Popover } from "@headlessui/react";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
    return (
        <Popover>
            <nav className="bg-white shadow">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <DesktopMenu />
                </div>
            </nav>
        </Popover>
    );
};

export default Navbar;
