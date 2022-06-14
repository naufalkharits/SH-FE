import React from 'react'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FiLogIn, FiSearch, FiPlus } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className="navbar">
            <Disclosure as="nav" className="bg-white drop-shadow-high">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-neutral-02 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img
                                            className="hidden md:block h-8 w-auto mr-6"
                                            src="/img/logo1.png"
                                            alt="Workflow"
                                        />
                                        <label className="relative block text-neutral-03">
                                            <span className="sr-only">Search</span>
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                                                <FiSearch className="h-5 w-5" />
                                            </span>
                                            <input className="bg-gray p-3 rounded-2xl py-3 pl-6 pr-9 placeholder:text-neutral-03" placeholder="Cari di sini ..." type="text" name="search" />
                                        </label>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="hidden md:flex items-center bg-primary-purple-04 py-3 px-4 rounded-xl text-neutral-01 hover:text-black"
                                    >
                                        <FiLogIn className='text-xl mr-2' />
                                        <p>Masuk</p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <button
                                    type="button"
                                    className="flex items-center bg-primary-purple-04 py-3 px-4 rounded-xl text-neutral-01 hover:text-black"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <FiLogIn className='text-lg mr-1' />
                                    <p>Masuk</p>
                                </button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <button
                type="button"
                className="fixed inset-x-0 mx-auto bottom-10 flex items-center bg-primary-purple-04 py-3 px-7 rounded-xl text-neutral-01 hover:text-black drop-shadow-high"
            >
                <span className="sr-only">View notifications</span>
                <FiPlus className='text-lg mr-5' />
                <p>Jual</p>
            </button>
        </div>
    )
}

export default Navbar