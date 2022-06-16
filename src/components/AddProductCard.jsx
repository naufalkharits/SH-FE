import React from "react";
import { FiPlus } from "react-icons/fi";

const AddProductCard = () => {
    return (
        <div className="w-1/2 p-4 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex h-[185.56px] cursor-pointer flex-col items-center justify-center rounded border border-dashed border-neutral-02 text-neutral-03">
                <FiPlus />
                <div>Tambah Produk</div>
            </div>
        </div>
    );
};

export default AddProductCard;
