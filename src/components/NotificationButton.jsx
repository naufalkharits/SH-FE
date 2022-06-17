import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FiBell } from "react-icons/fi";

const Notification = () => {
    return (
        <Popover className="relative z-10">
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
                <Popover.Panel className="absolute right-0 mt-2 w-[32rem] space-y-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-neutral-02 ring-opacity-20">
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
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default Notification;
