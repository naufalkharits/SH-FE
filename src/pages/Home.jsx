import React from "react";
import CategoryBuyer from "../components/CategoryBuyer";
import Hero from "../components/Hero";
import JualButton from "../components/JualButton";
import ProductCard from "../components/ProductCard";
import ProductCardTesting from "../components/ProductCard-testing";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="container mx-auto p-4">
                <CategoryBuyer />
            </div>
            <div className="container mx-auto space-y-4 p-4">
                <div className="-m-4 flex flex-wrap">
                    <ProductCard />
                    <ProductCardTesting />
                    <ProductCard />
                    <ProductCardTesting />
                    <ProductCard />
                    <ProductCardTesting />
                    <ProductCard />
                    <ProductCardTesting />
                    <ProductCard />
                    <ProductCardTesting />
                </div>
            </div>
            <JualButton />
        </>
    );
};

export default Home;
