import React from "react";
import Category from "../components/Category";
import Hero from "../components/Hero";
import JualButton from "../components/JualButton";
import ProductCard from "../components/ProductCard";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="container my-8 mx-auto px-4">
                <Category />
            </div>
            <div className="container my-8 mx-auto flex flex-wrap justify-center gap-4 px-4">
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
            <JualButton />
        </>
    );
};

export default Home;
