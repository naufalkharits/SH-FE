import ProfileCard from "../components/ProfileCard";

const DetailProduct = () => {
    return (
        <div className="container mx-auto px-4 xl:px-32 2xl:px-64">
            <div className="m-4 flex flex-col gap-4 sm:flex-row">
                <div className="space-y-4 sm:w-2/3 lg:w-3/4">
                    <img
                        className="w-full"
                        src="/img/detail-jam-2.png"
                        alt=""
                    />
                    <div className="hidden space-y-4 rounded-2xl border border-neutral-200 p-4 shadow sm:block">
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
                <div className="space-y-4 sm:w-1/3 sm:space-y-6 lg:w-1/4">
                    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-md">
                        <div className="mb-4 space-y-2">
                            <div>Jam Tangan Casio</div>
                            <div className="text-sm text-neutral-03">
                                Aksesoris
                            </div>
                        </div>
                        <div className="mb-6">Rp. 250.000</div>
                        <button className="mb-4 hidden w-full rounded-2xl bg-primary-purple-04 p-2 text-white hover:bg-primary-purple-05 sm:block">
                            Terbitkan
                        </button>
                        <button className="hidden w-full rounded-2xl border border-primary-purple-04 p-2 text-primary-purple-04 hover:bg-primary-purple-05 hover:text-white sm:block">
                            Edit
                        </button>
                    </div>
                    <ProfileCard />
                </div>
                <div className="space-y-4 rounded-2xl border border-neutral-200 p-4 shadow sm:hidden">
                    <div className="font-medium">Deskripsi</div>
                    <p className="text-sm text-neutral-03">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora nostrum nisi labore nesciunt necessitatibus,
                        debitis quibusdam veritatis. Ratione impedit architecto
                        maxime dolores in commodi praesentium repellat, soluta
                        vel odit id!
                    </p>
                    <p className="text-sm text-neutral-03">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores consequatur incidunt, nobis dolore, minus
                        rerum, nisi unde sint corrupti suscipit obcaecati
                        dolores odio qui ut error eius iusto alias deleniti?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
