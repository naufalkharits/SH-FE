import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiLogOut, FiUser } from "react-icons/fi";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const UserButton = () => {
    return (
        <Menu as="div" className="relative z-10 hidden sm:inline-block">
            <div>
                <Menu.Button className="flex justify-center">
                    <FiUser className="h-6 w-6" />
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
                    <form method="POST" action="#">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    type="submit"
                                    className={classNames(
                                        active ? "bg-gray" : "",
                                        "flex w-full items-center justify-center gap-2 p-4"
                                    )}
                                >
                                    <FiLogOut />
                                    Logout
                                </button>
                            )}
                        </Menu.Item>
                    </form>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default UserButton;
