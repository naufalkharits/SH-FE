import React from 'react'

const EditProfileSkeleton = () => {
    return (
        <>
            <div className="flex items-center justify-center space-y-2">
                <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray dark:bg-zinc-800 border border-neutral-02 dark:border-zinc-600"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">Nama</div>
                <div className="w-full h-11 rounded-2xl animate-pulse bg-gray dark:bg-zinc-800 border border-neutral-02 dark:border-zinc-600"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">Kota</div>
                <div className="w-full h-11 rounded-2xl animate-pulse bg-gray dark:bg-zinc-800 border border-neutral-02 dark:border-zinc-600"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">Alamat</div>
                <div className="w-full h-20 rounded-2xl animate-pulse bg-gray dark:bg-zinc-800 border border-neutral-02 dark:border-zinc-600"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">No Handphone</div>
                <div className="w-full h-11 rounded-2xl animate-pulse bg-gray dark:bg-zinc-800 border border-neutral-02 dark:border-zinc-600"></div>
            </div>
            <div className="w-full h-14 rounded-2xl px-6 bg-gray dark:bg-zinc-800"></div>
        </>
    )
}

export default EditProfileSkeleton