import React from "react";

const ProductCard = () => {
    return (
        <div className="w-44 space-y-2 rounded-md bg-white p-2 drop-shadow-low">
            <img className="w-full" src="/img/jam.png" alt="" />
            <div>
                <div className="truncate font-medium">Jam Tangan Casio</div>
                <div className="text-sm text-neutral-03">Aksesoris</div>
            </div>
            <div>Rp 250.000</div>
        </div>
    );
};

export default ProductCard;
