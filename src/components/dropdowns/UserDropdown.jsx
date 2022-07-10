import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { logout } from "../../redux/authSlice";
import AltFoto from "../../images/AltFoto.png";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const UserDropdown = ({ drops }) => {
    const dispatch = useDispatch();

    return (
        <Menu as="div" className="relative z-10 hidden sm:inline-block">
            {({ open }) => (
                <>
                    <Menu.Button
                        className={className(
                            open
                                ? "text-primary-purple-04 hover:text-primary-purple-05"
                                : "",
                            "flex justify-center hover:text-primary-purple-05 focus:outline-none"
                        )}
                    >
                        <FiUser className="h-6 w-6" />
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-5 w-56 overflow-hidden rounded-t rounded-b-2xl bg-white shadow-md ring-1 ring-neutral-02 ring-opacity-20">
                            <Menu.Item as="div" className="space-y-4 p-4">
                                {({ active }) => (
                                    <>
                                        <Link
                                            to="/user"
                                            className="flex w-full items-center gap-2 rounded-md p-2 shadow"
                                        >
                                            <img
                                                className="h-8"
                                                src={drops?.picture || AltFoto}
                                                alt=""
                                            />
                                            <span className="font-medium">
                                                {drops?.name}
                                            </span>
                                        </Link>
                                        <button
                                            className={className(
                                                active
                                                    ? "hover:text-primary-purple-05"
                                                    : "",
                                                "flex w-full items-center gap-2"
                                            )}
                                            onClick={() => {
                                                dispatch(logout());
                                            }}
                                        >
                                            <FiLogOut />
                                            <span className="text-sm">
                                                Logout
                                            </span>
                                        </button>
                                    </>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
};

export default UserDropdown;
