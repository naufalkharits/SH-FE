import React from "react";
import Category from "../components/Category";
import Hero from "../components/Hero";
import JualButton from "../components/JualButton";
import ProductCard from "../components/ProductCard";
import ProductCardTesting from "../components/ProductCard-testing";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="container my-8 mx-auto space-y-4 px-4">
                <Category />
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
