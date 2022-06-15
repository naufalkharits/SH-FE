import React from "react";
import Category from "../components/Category";
import Hero from "../components/Hero";
import JualButton from "../components/JualButton";
import ProductCard from "../components/ProductCard";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="container my-8 mx-auto space-y-4 px-4">
                <Category />
                <div className="-m-4 flex flex-wrap">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <JualButton />
        </>
    );
};

export default Home;
