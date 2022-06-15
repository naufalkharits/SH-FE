const ProductCard = () => {
    return (
        <div className="w-1/2 p-4 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="cursor-pointer space-y-2 rounded-md border border-neutral-200 bg-white p-2 shadow-md">
                <img className="w-full" src="/img/jam.png" alt="" />
                <div>
                    <div className="truncate font-medium">Jam Tangan Casio</div>
                    <div className="text-sm text-neutral-03">Aksesoris</div>
                </div>
                <div>Rp 250.000</div>
            </div>
        </div>
    );
};

export default ProductCard;
