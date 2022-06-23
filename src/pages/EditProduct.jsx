import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiPlus, FiChevronDown } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import {
    fetchProductById,
    productsSelectors,
    updateProduct,
} from "../redux/productsSlice";

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useSelector((state) =>
        productsSelectors.selectById(state, productId)
    );
    const [formValue, setFormValue] = useState({
        name: "",
        price: 0,
        category: "",
        description: "",
    });
    const [formData, setFormData] = useState("");

    const onPictChange = (e) => {
        const file = e.target.files;
        for (let index of file) {
            formData.append("pictures", index);
        }
    };

    const onFormChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        formData.set("name", formValue.name);
        formData.set("price", formValue.price);
        formData.set("category", formValue.category);
        formData.set("description", formValue.description);

        dispatch(updateProduct(productId, formData));

        // navigate("/manage-product");
    };

    console.log(formValue); 

    useEffect(() => {
        setFormData(new FormData());
        dispatch(fetchProductById(productId));
    }, [productId, dispatch]);

    return (
        <div
            className="mx-auto mt-4 flex w-full justify-between sm:mt-10 md:w-full lg:w-[1024px]"
            key={product?.id}
        >
            <div className="hidden sm:ml-10 sm:mr-10 sm:block lg:mr-20">
                <FiArrowLeft
                    className="cursor-pointer text-3xl"
                    onClick={() => {
                        navigate(-1);
                    }}
                />
            </div>
            <form className="w-full space-y-4 px-5" onSubmit={onSubmit}>
                <div className="space-y-2">
                    <label className="block">Nama Produk</label>
                    <input
                        className="w-full rounded-2xl border border-neutral-02 py-3 px-4 placeholder:text-neutral-03 focus:outline-none"
                        type="text"
                        placeholder={product?.name}
                        name="name"
                        onChange={onFormChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block">Harga Produk</label>
                    <input
                        className="w-full rounded-2xl border border-neutral-02 py-3 px-4 placeholder:text-neutral-03 focus:outline-none"
                        type="number"
                        placeholder={product?.price}
                        name="price"
                        onChange={onFormChange}
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
                            name="category"
                            onChange={onFormChange}
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
                        name="description"
                        rows="2"
                        className="w-full resize-none rounded-2xl border border-neutral-02 bg-neutral-01 py-3 px-4 placeholder:text-neutral-03 focus:outline-none"
                        placeholder={product?.description}
                        onChange={onFormChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="block">Foto Produk</label>
                    <label
                        className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border border-dashed border-neutral-02 text-2xl text-neutral-03"
                        htmlFor="file"
                    >
                        <input
                            className="hidden h-full w-full"
                            type="file"
                            id="file"
                            name="pictures"
                            accept="image/png, image/jpeg, image/jpg"
                            multiple
                            onChange={onPictChange}
                        />
                        <FiPlus />
                    </label>
                </div>
                <div className="flex justify-between">
                    <button className="sm:w-74 w-[48%] rounded-xl border border-primary-purple-04 py-3 font-medium hover:bg-primary-purple-05 hover:text-white">
                        Preview
                    </button>
                    <button className="sm:w-74 w-[48%] rounded-xl bg-primary-purple-04 py-3 font-medium text-white hover:bg-primary-purple-05">
                        Terbitkan
                    </button>
                </div>
            </form>
            <div className="hidden h-[30px] w-[30px] sm:ml-10 sm:mr-10 sm:block lg:ml-20"></div>
        </div>
    );
};

export default EditProduct;
