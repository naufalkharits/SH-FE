import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Menu, Transition } from "@headlessui/react"
import { FiList } from "react-icons/fi"
import { BiStoreAlt } from "react-icons/bi"
import { classNameJoin } from "../../utils/classNameJoin"

const ListDropdown = () => {
    return (
        <Menu as="div" className="relative z-10 hidden sm:inline-block">
            {({ open }) => (
                <>
                    <Menu.Button
                        className={classNameJoin(
                            open
                                ? "text-primary-purple-04 hover:text-primary-purple-05"
                                : "dark:text-white",
                            "flex justify-center hover:text-primary-purple-05 focus:outline-none"
                        )}
                    >
                        <FiList className="h-6 w-6" />
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
                        <Menu.Items className="absolute right-0 mt-5 w-56 overflow-hidden rounded-t rounded-b-2xl bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-zinc-900 dark:shadow-zinc-800 dark:ring-white dark:ring-opacity-5">
                            <Menu.Item as="div" className="space-y-4 p-4">
                                {({ active }) => (
                                    <>
                                        <Link
                                            to="/manage-product"
                                            className="flex items-center gap-2 rounded-md p-2 shadow dark:text-white dark:shadow-zinc-800"
                                        >
                                            <BiStoreAlt className="h-6 w-6" />
                                            <span className="font-medium">
                                                Toko Saya
                                            </span>
                                        </Link>
                                        <Link
                                            to="/user/infopenawar"
                                            className={classNameJoin(
                                                active
                                                    ? "hover:text-primary-purple-05"
                                                    : "",
                                                "block text-sm dark:text-white"
                                            )}
                                        >
                                            Cek Penawaran
                                        </Link>
                                    </>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}

export default ListDropdown
