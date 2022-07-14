import Wishlisted404 from "../unfound/Wishlisted404";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getWishlistSeller } from "../redux/wishlistSlice";
import SellerWishlistsCard from "./SellerWishlistsCard";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

// const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {},
// };

// const userData = [
//     {
//         id: 1,
//         year: 2016,
//         pendapatanBersih: 80000,
//         produkTerjual: 823,
//     },
//     {
//         id: 2,
//         year: 2017,
//         pendapatanBersih: 45677,
//         produkTerjual: 345,
//     },
//     {
//         id: 3,
//         year: 2018,
//         pendapatanBersih: 78888,
//         produkTerjual: 555,
//     },
//     {
//         id: 4,
//         year: 2019,
//         pendapatanBersih: 90000,
//         produkTerjual: 4555,
//     },
//     {
//         id: 5,
//         year: 2020,
//         pendapatanBersih: 4300,
//         produkTerjual: 234,
//     },
// ];

// const data = {
//     labels: userData.map((data) => data.year),
//     datasets: [
//         {
//             label: "Produk Diminati",
//             data: userData.map((data) => data.pendapatanBersih),
//             borderColor: "rgb(255, 99, 132)",
//             backgroundColor: "rgba(255, 99, 132, 0.5)",
//         },
//         // {
//         //     label: "Dataset 2",
//         //     data: userData.map((data) => data.produkTerjual),
//         //     borderColor: "rgb(53, 162, 235)",
//         //     backgroundColor: "rgba(53, 162, 235, 0.5)",
//         // },
//     ],
// };

const Wishlisted = () => {
    const dispatch = useDispatch();
    const { sellerwishlists, updatedwishlist, loading } = useSelector((state) => state.wishlist);

    const [as] = useState("seller");

    useEffect(() => {
        dispatch(getWishlistSeller({ as }));
    }, [dispatch, as, updatedwishlist]);

    const result = 
    sellerwishlists && 
    Object.values(sellerwishlists?.reduce((jumlah, wishlist) => {
        let check = `${wishlist.product.id}`;
        if (!jumlah[check]) jumlah[check] = { ...wishlist, count: 1 }
        else jumlah[check].count += 1;
        return jumlah;
    }, {}))
    
    console.log(result?.map((test) => (
       test
    )));

    return (
        <div className="mt-4 w-full space-y-2 px-5">
            <div className="flex flex-wrap">
                {loading === "pending" ? (
                    <div>loading...</div>
                ) :
                    sellerwishlists?.length === 0 ? (
                        <div className="w-full my-16">
                            <Wishlisted404 />
                        </div>
                    ) :
                        result?.map((sellwish, id) => (
                                <div
                                    className="w-1/2 p-4 lg:w-1/3 2xl:w-1/4"
                                    key={id}
                                >
                                    <SellerWishlistsCard
                                        id={sellwish.product.id}
                                        name={sellwish.product.name}
                                        price={sellwish.product.price}
                                        category={sellwish.product.category}
                                        pictures={sellwish.product.pictures[0]}
                                        count={sellwish.count}
                                    />
                                </div>
                            ))
                }
            </div>
            {/* <div className="space-y-4 rounded-2xl border border-neutral-200 p-4 shadow-md">
                <div className="font-medium">Statisti Tokomu</div>

                <div className="w-fit rounded-md p-4 shadow">
                    <div>Produk Diminati</div>
                    <div>0</div>
                    <div>0% dari 7 hari terakhir</div>
                </div>
                <div className="h-48 w-full">
                    <Line options={options} data={data} />
                </div>
            </div> */}
        </div>
    );
};

export default Wishlisted;
