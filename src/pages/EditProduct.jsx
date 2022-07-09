import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiPlus, FiChevronDown } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import {
    getProductById,
    productsSelectors,
    updateProduct,
} from "../redux/productsSlice";
import { CgSpinner } from "react-icons/cg";
import DangerToast from "../components/toasts/DangerToast";
import { fetchCategories } from "../redux/categoriesSlice";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useSelector((state) =>
        productsSelectors.selectById(state, productId)
    );
    const { process } = useSelector((state) => state.products);
    const [formValue, setFormValue] = useState({
        name: "",
        price: 0,
        category: "",
        description: "",
        pictures: [],
    });
    const [formData, setFormData] = useState("");
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { categories } = useSelector((state) => state.categories);
    const [formCategory, setFormCategory] = useState([]);

    const onFileChange = (e) => {
        const file = e.target.files;
        const fileArray = Array.from(file);
        if (file.length > 4) {
            setShow(true);
            setErrorMessage("Gambar Tidak Boleh Lebih Dari 4");
            setTimeout(() => {
                setShow(false);
            }, 2000);
        } else {
            const imageArray = fileArray.map((file) => {
                return URL.createObjectURL(file);
            });
            for (let index of file) {
                formData.append("pictures", index);
            }
            setFormValue({
                ...formValue,
                pictures: imageArray,
            });
        }
    };

    const onChange = (e) => {
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
        if (formData.has("pictures") === false) {
            const file = formValue.pictures;
            for (let index of file) {
                formData.append("pictures", index);
            }
        }

        dispatch(updateProduct({ productId, formData, process, navigate }));
    };

    useEffect(() => {
        setFormData(new FormData());
        dispatch(getProductById(productId));
        dispatch(fetchCategories());
    }, [productId, dispatch]);

    useEffect(() => {
        product &&
            setFormValue({
                name: product.name,
                price: product.price,
                category: product.category,
                description: product.description,
                pictures: product.pictures,
            });
        categories && setFormCategory(categories);
    }, [product, categories]);

    return (
        <>
            {show && <DangerToast show={show} message={errorMessage} />}
            <div className="mx-auto mt-4 flex w-full justify-between sm:mt-10 md:w-full lg:w-[1024px]">
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
                        <label className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                            Nama Produk
                        </label>
                        <input
                            className="w-full rounded-2xl border border-neutral-02 py-3.5 px-4 placeholder:text-neutral-03 focus:outline-none"
                            type="text"
                            placeholder="Nama Produk"
                            name="name"
                            value={formValue.name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                            Harga Produk
                        </label>
                        <input
                            className="w-full rounded-2xl border border-neutral-02 py-3.5 px-4 placeholder:text-neutral-03 focus:outline-none"
                            type="number"
                            placeholder="Rp 0,00"
                            name="price"
                            value={formValue.price}
                            onChange={onChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                            Kategori
                        </label>
                        <label className="relative block">
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                                <FiChevronDown />
                            </span>
                            <select
                                className=" bg-neutral-01 w-full appearance-none rounded-2xl border border-neutral-02 py-3.5 pr-10 pl-3 focus:outline-none"
                                name="category"
                                value={formValue.category}
                                onChange={onChange}
                            >
                                <option value="">Pilih Kategori</option>
                                {formCategory.map((category) => (
                                    <option value={category} key={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="space-y-2">
                        <label className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                            Deskripsi
                        </label>
                        <textarea
                            rows="2"
                            className="bg-neutral-01 w-full resize-none rounded-2xl border border-neutral-02 py-3 px-4 placeholder:text-neutral-03 focus:outline-none"
                            placeholder="Contoh: Jalan Ikan Hiu 33"
                            name="description"
                            value={formValue.description}
                            onChange={onChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                            Foto Produk
                        </label>
                        <div className="flex flex-wrap">
                            {formValue.pictures &&
                                formValue.pictures.map((image) => (
                                    <img
                                        key={image}
                                        src={image}
                                        alt=""
                                        className="mr-4 h-24 w-24 object-contain"
                                    />
                                ))}

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
                                    onChange={onFileChange}
                                />
                                <FiPlus />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button className="sm:w-74 w-[48%] rounded-xl border border-primary-purple-04 py-3 font-medium hover:bg-primary-purple-05 hover:text-white">
                            Preview
                        </button>
                        <button
                            className={className(
                                process === "pending"
                                    ? "flex items-center justify-center gap-2"
                                    : "",
                                "sm:w-74 w-[48%] rounded-xl bg-primary-purple-04 py-3 font-medium text-white hover:bg-primary-purple-05"
                            )}
                            type="submit"
                        >
                            {process === "pending" ? (
                                <>
                                    <CgSpinner className="animate-spin" />
                                    <span>Editing...</span>
                                </>
                            ) : (
                                <span>Terbitkan</span>
                            )}
                        </button>
                    </div>
                </form>
                <div className="hidden h-[30px] w-[30px] sm:ml-10 sm:mr-10 sm:block lg:ml-20"></div>
            </div>
        </>
    );
};

export default EditProduct;
