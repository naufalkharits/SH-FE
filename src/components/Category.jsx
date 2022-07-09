import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useDispatch, useSelector } from "react-redux";
import { resetOffset } from "../redux/productsSlice";
import { fetchCategories, categoryQuery } from "../redux/categoriesSlice";
import { FiSearch } from "react-icons/fi";
import CategorySkeleton from "./skeletons/CategorySkeleton";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const Category = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { categories, category, loading } = useSelector(
        (state) => state.categories
    );
    const [formValue, setFormValue] = useState([]);

    const onClick = (query) => {
        setSearchParams();
        dispatch(resetOffset());
        dispatch(categoryQuery(query));
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
                {loading === "pending" ? (
                    <CategorySkeleton />
                ) : (
                    <>
                        <div
                            className={className(
                                category === ""
                                    ? "bg-primary-purple-04 text-white"
                                    : "bg-primary-purple-01 hover:text-white",
                                "flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                            )}
                            onClick={() => {
                                onClick("");
                            }}
                        >
                            <FiSearch />
                            <span>Semua</span>
                        </div>
                        {formValue.map((cat) => (
                            <div
                                key={cat}
                                className={className(
                                    category === cat
                                        ? "bg-primary-purple-04 text-white"
                                        : "bg-primary-purple-01 hover:text-white",
                                    "ml-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl py-3 px-6 hover:bg-primary-purple-05"
                                )}
                                onClick={() => {
                                    onClick(cat);
                                }}
                            >
                                <FiSearch />
                                <span>{cat}</span>
                            </div>
                        ))}
                    </>
                )}
            </ScrollingCarousel>
        </>
    );
};

export default Category;
