import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { FiBell } from "react-icons/fi";

const NotificationButton = () => {
    return (
        <Popover className="relative z-10 hidden sm:inline-block">
            <Popover.Button className="flex justify-center focus:outline-none">
                <FiBell className="h-6 w-6 text-primary-purple-04" />
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
                <Popover.Panel className="absolute right-0 mt-2 w-[32rem] space-y-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-neutral-02 ring-opacity-20 focus:outline-none">
                    <div className="flex items-start gap-4">
                        <img src="/img/user.png" alt="" />
                        <div className="w-full space-y-1">
                            <div className="flex items-center justify-between">
                                <div className="text-neutral-03">
                                    Penawaran produk
                                </div>
                                <div>20 Apr, 14:04</div>
                            </div>
                            <div>Jam Tangan Casio</div>
                            <div>Rp 250.000</div>
                            <div>Ditawar Rp 200.000</div>
                        </div>
                    </div>
                    <hr className="text-neutral-02" />
                    <div className="flex items-start gap-4">
                        <img src="/img/user.png" alt="" />
                        <div className="w-full space-y-1">
                            <div className="flex items-center justify-between">
                                <div className="text-neutral-03">
                                    Penawaran produk
                                </div>
                                <div>20 Apr, 14:04</div>
                            </div>
                            <div>Jam Tangan Casio</div>
                            <div>Rp 250.000</div>
                            <div>Ditawar Rp 200.000</div>
                        </div>
                    </div>
                    <Link
                        to="/notification"
                        className="inline-block cursor-pointer text-primary-purple-04 hover:text-primary-purple-05"
                    >
                        Lihat Selengkapnya
                    </Link>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default NotificationButton;
