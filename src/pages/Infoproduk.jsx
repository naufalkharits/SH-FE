import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiPlus, FiChevronDown } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { insertProduct } from "../redux/productsSlice";

const Infoproduk = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [pictures, setPictures] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            insertProduct({
                name,
                price,
                category,
                description,
                pictures,
            })
        );
    };

    return (
        <div className="mx-auto mt-4 flex w-full justify-between sm:mt-10 md:w-full lg:w-[1024px]">
            <div className="hidden sm:ml-10 sm:mr-10 sm:block lg:mr-20">
                <FiArrowLeft className="text-3xl" />
            </div>
            <form className="w-full space-y-4 px-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label className="block">Nama Produk</label>
                    <input
                        className="w-full rounded-2xl border border-neutral-02 py-3 px-4 placeholder:text-neutral-03 focus:outline-none"
                        type="text"
                        placeholder="Nama Produk"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block">Harga Produk</label>
                    <input
                        className="w-full rounded-2xl border border-neutral-02 py-3 px-4 placeholder:text-neutral-03 focus:outline-none"
                        type="number"
                        placeholder="Rp 0,00"
                        id="price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block">Category</label>
                    <label className="relative block">
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                            <FiChevronDown />
                        </span>
                        <select
                            className=" w-full appearance-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 pr-10 pl-3 focus:outline-none"
                            id="category"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Pilih Kategori</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Property">Property</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Sport">Sport</option>
                            <option value="Office">Office</option>
                        </select>
                    </label>
                </div>
                <div className="space-y-2">
                    <label className="block">Deskripsi</label>
                    <textarea
                        id="description"
                        name=""
                        rows="2"
                        className="w-full resize-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 px-4 placeholder:text-neutral-03 focus:outline-none"
                        placeholder="Contoh: Jalan Ikan Hiu 33"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block">Foto Produk</label>
                    <label
                        className="flex h-24 w-24 items-center justify-center rounded-xl border border-dashed border-neutral-02 text-2xl text-neutral-03"
                        htmlFor="file"
                    >
                        <input
                            className="hidden h-full w-full"
                            type="file"
                            id="file"
                            accept="image/png, image/jpeg"
                            multiple
                            onChange={(e) => {
                                setPictures(e.target.files[0]);
                            }}
                        />
                        <FiPlus />
                    </label>
                </div>
                <div className="flex justify-between">
                    <button className="sm:w-74 w-[48%] rounded-xl border border-primary-purple-04  py-3 font-medium">
                        Preview
                    </button>
                    <button className="sm:w-74 w-[48%] rounded-xl bg-primary-purple-04 py-3 font-medium text-white">
                        Terbitkan
                    </button>
                </div>
            </form>
            <div className="hidden h-[30px] w-[30px] sm:ml-10 sm:mr-10 sm:block lg:ml-20"></div>
        </div>
    );
};

export default Infoproduk;
