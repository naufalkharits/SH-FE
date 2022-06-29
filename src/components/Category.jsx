import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import {
    categoryQuery,
    fetchCategories,
    resetPageOffset,
} from "../redux/productsSlice";
import { FiSearch } from "react-icons/fi";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const Category = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.products);
    const { category } = useSelector((state) => state.products);
    const [formValue, setFormValue] = useState([]);

    const onClick = (query) => {
        dispatch(categoryQuery(query));
        dispatch(resetPageOffset());
    };

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        categories && setFormValue(categories);
    }, [categories]);

    return (
        <>
            <div className="mb-4 font-medium sm:font-bold">
                Telusuri Kategori
            </div>
            <ScrollingCarousel leftIcon={false} rightIcon={false}>
                {category === "" ? (
                    <div
                        className="flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-primary-purple-04 py-3 px-6 text-white hover:bg-primary-purple-05"
                        onClick={() => {
                            onClick("");
                        }}
                    >
                        <FiSearch />
                        <span>Semua</span>
                    </div>
                ) : (
                    <div
                        className="flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6 hover:bg-primary-purple-05 hover:text-white"
                        onClick={() => {
                            onClick("");
                        }}
                    >
                        <FiSearch />
                        <span>Semua</span>
                    </div>
                )}
                {formValue.map((cat) =>
                    category === cat ? (
                        <div
                            key={cat}
                            className="ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-primary-purple-04 py-3 px-6 text-white hover:bg-primary-purple-05"
                            onClick={() => {
                                onClick(cat);
                            }}
                        >
                            <FiSearch />
                            <span>{cat}</span>
                        </div>
                    ) : (
                        <div
                            key={cat}
                            className="ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-primary-purple-01 py-3 px-6 hover:bg-primary-purple-05 hover:text-white"
                            onClick={() => {
                                onClick(cat);
                            }}
                        >
                            <FiSearch />
                            <span>{cat}</span>
                        </div>
                    )
                )}
            </ScrollingCarousel>
        </>
    );
};

export default Category;
