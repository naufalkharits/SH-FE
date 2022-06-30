import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Menu, Transition } from "@headlessui/react";
import { FiEdit3, FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const UserDropdown = () => {
    const dispatch = useDispatch();

    return (
        <Menu as="div" className="relative z-10 hidden sm:inline-block">
            <div>
                <Menu.Button className="flex justify-center">
                    <FiUser className="h-6 w-6 hover:text-primary-purple-05" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-neutral-02 ring-opacity-20">
                    <Menu.Item as="div" className="space-y-4 p-4">
                        {({ active }) => (
                            <>
                                <Link
                                    to="/user"
                                    className={className(
                                        active
                                            ? "hover:text-primary-purple-05"
                                            : "",
                                        "flex w-full items-center justify-center gap-2"
                                    )}
                                >
                                    <FiEdit3 />
                                    Akun Saya
                                </Link>
                                <button
                                    className={className(
                                        active
                                            ? "hover:text-primary-purple-05"
                                            : "",
                                        "flex w-full items-center justify-center gap-2"
                                    )}
                                    onClick={() => {
                                        dispatch(logout());
                                    }}
                                >
                                    <FiLogOut />
                                    Logout
                                </button>
                            </>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default UserDropdown;
