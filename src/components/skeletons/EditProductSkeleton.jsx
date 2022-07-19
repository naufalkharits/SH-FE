import React from 'react'

const EditProductSkeleton = () => {
    return (
        <>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">Nama Produk</div>
                <div className="w-full h-14 rounded-2xl animate-pulse bg-gray dark:bg-zinc-800 border border-neutral-02 dark:border-zinc-600"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">Harga Produk</div>
                <div className="w-full h-14 rounded-2xl animate-pulse bg-gray dark:bg-zinc-800 border border-neutral-02 dark:border-zinc-600"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">Kategori</div>
                <div className="w-full h-14 rounded-2xl animate-pulse bg-gray dark:bg-zinc-800 border border-neutral-02 dark:border-zinc-600"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">Deskripsi</div>
                <div className="w-full h-[5.5rem] rounded-2xl animate-pulse bg-gray dark:bg-zinc-800 border border-neutral-02 dark:border-zinc-600"></div>
            </div>
            <div className="space-y-2">
                <div className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">Foto Produk</div>
                <div className="flex flex-wrap">
                    <div className="w-24 h-24 mr-4 mb-4 rounded-2xl animate-pulse border border-neutral-02 bg-gray dark:bg-zinc-800 dark:border-zinc-600"></div>
                    <div className="w-24 h-24 mr-4 mb-4 rounded-2xl animate-pulse border border-neutral-02 bg-gray dark:bg-zinc-800 dark:border-zinc-600"></div>
                    <div className="w-24 h-24 mr-4 mb-4 rounded-2xl animate-pulse border border-neutral-02 bg-gray dark:bg-zinc-800 dark:border-zinc-600"></div>
                    <div className="w-24 h-24 mb-4 rounded-2xl animate-pulse border border-neutral-02 bg-gray dark:bg-zinc-800 dark:border-zinc-600"></div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="sm:w-74 w-[48%] h-12 rounded-2xl py-3 animate-pulse bg-gray dark:bg-zinc-800 border border-neutral-02 dark:border-zinc-600"></div>
                <div className="sm:w-74 w-[48%] h-12 rounded-2xl py-3 animate-pulse bg-gray dark:bg-zinc-800 border border-neutral-02 dark:border-zinc-600"></div>
            </div>
        </>
    )
}

export default EditProductSkeleton