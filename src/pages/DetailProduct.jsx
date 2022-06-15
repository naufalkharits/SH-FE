import orang from "../images/orang.png";

const DetailProduct = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="m-4 flex gap-4">
                <div className="w-2/3 space-y-4">
                    <img className="w-full" src="/img/jam2.png" alt="" />
                    <div className="space-y-4 rounded-2xl border border-neutral-200 p-4 shadow">
                        <div className="font-medium">Deskripsi</div>
                        <p className="text-sm text-neutral-03">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora nostrum nisi labore nesciunt
                            necessitatibus, debitis quibusdam veritatis. Ratione
                            impedit architecto maxime dolores in commodi
                            praesentium repellat, soluta vel odit id!
                        </p>
                        <p className="text-sm text-neutral-03">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Asperiores consequatur incidunt, nobis dolore,
                            minus rerum, nisi unde sint corrupti suscipit
                            obcaecati dolores odio qui ut error eius iusto alias
                            deleniti?
                        </p>
                    </div>
                </div>

                <div className="w-1/3 space-y-6">
                    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-md">
                        <div className="mb-4 space-y-2">
                            <div>Jam Tangan Casio</div>
                            <div className="text-sm text-neutral-03">
                                Aksesoris
                            </div>
                        </div>
                        <div className="mb-6">Rp. 250.000</div>
                        <button className="mb-4 w-full rounded-2xl bg-primary-purple-04 p-2 text-white hover:bg-primary-purple-05">
                            Terbitkan
                        </button>
                        <button className="w-full rounded-2xl border border-primary-purple-04 p-2 text-primary-purple-04 hover:bg-primary-purple-05 hover:text-white">
                            Edit
                        </button>
                    </div>
                    <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4 shadow">
                        <img src={orang} alt="" />
                        <div className="space-y-1">
                            <div>Nama Penjual</div>
                            <div className="text-xs text-neutral-03">Kota</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
