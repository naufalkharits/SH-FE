import dayjs from 'dayjs';
import IDR from "../utils/IDR";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import TransactionSkeleton from './skeletons/TransactionSkeleton';
import Transaction404 from "../unfound/Transaction404";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    fetchTransactionTawar,
    transactionSelectors,
} from "../redux/transactionSlice";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: "Chart.js Line Chart",
        },
    },
};

const userData = [
    {
        id: 1,
        year: 2016,
        pendapatanBersih: 80000,
        produkTerjual: 823,
    },
    {
        id: 2,
        year: 2017,
        pendapatanBersih: 45677,
        produkTerjual: 345,
    },
    {
        id: 3,
        year: 2018,
        pendapatanBersih: 78888,
        produkTerjual: 555,
    },
    {
        id: 4,
        year: 2019,
        pendapatanBersih: 90000,
        produkTerjual: 4555,
    },
    {
        id: 5,
        year: 2020,
        pendapatanBersih: 4300,
        produkTerjual: 234,
    },
];

const data = {
    labels: userData.map((data) => data.year),
    datasets: [
        {
            label: "Pendapatan Bersih",
            data: userData.map((data) => data.pendapatanBersih),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: "Produk Terjual",
            data: userData.map((data) => data.produkTerjual),
            borderColor: "rgb(50, 162, 235)",
            backgroundColor: "rgba(50, 162, 235, 0.5)",
        },
    ],
};

const Sold = () => {
    const dispatch = useDispatch();
    const [status] = useState("");
    const [as] = useState("seller");

    const transaction = useSelector(transactionSelectors.selectAll);

    const { loading } = useSelector((state) => state.transaction);

    useEffect(() => {
        dispatch(fetchTransactionTawar({ status, as }));
    }, [status, as, dispatch]);

    return (
        <>
        <div className="w-full px-5 space-y-5 mt-4">
                <p className="font-medium">History Penjualan Produk</p>
                {loading === "pending" ? (
                    <TransactionSkeleton />
                ) : 
                transaction?.map((tx) => (
                    tx.status === "COMPLETED" && (
                    <div key={tx.id} className="w-full space-y-7">
                        <div className="flex gap-6 rounded-xl">
                            <Swiper className="h-14 w-16 rounded-xl object-cover">
                                {tx.product.pictures.map((picture) => (
                                    <SwiperSlide key={picture}>
                                        <img
                                            className="h-14 w-14 rounded-xl object-cover"
                                            src={picture}
                                            alt=""
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="w-full space-y-1">
                                <div className="flex justify-between text-xs text-neutral-03">
                                    <p>Penawaran Produk</p>
                                    <p>{dayjs(tx.updatedAt).format("D MMM, HH:mm")}</p>
                                </div>
                                <p className="">{tx?.product.name}</p>
                                <p className=""><IDR price={tx?.product.price} /></p>
                                <p className="">Ditawar <IDR price={tx?.price} /></p>
                            </div>
                        </div>
                        <div className="h-px bg-[#E5E5E5]"></div>
                    </div>
                )))}
            </div>
            {/* <div className="w-full sm:p-4">
                <div className="space-y-4 rounded-2xl border border-neutral-200 p-4 shadow-md">
                    <div className="font-medium">Statisti Tokomu</div>
                    <div className="flex items-center gap-4">
                        <div className="rounded-md p-4 shadow">
                            <div>Pendapatan Bersih Baru</div>
                            <div>Rp0</div>
                            <div>0% dari 7 hari terakhir</div>
                        </div>
                        <div className="rounded-md p-4 shadow">
                            <div>Produk Terjual</div>
                            <div>0</div>
                            <div>0% dari 7 hari terakhir</div>
                        </div>
                    </div>
                    <div className="h-48 w-full">
                        <Line options={options} data={data} />
                    </div>
                    <table className="whitespace-no-wrap w-full table-auto text-left">
                    <thead>
                        <tr>
                            <th className="title-font text-gray-900 bg-gray-100 rounded-tl rounded-bl px-4 py-3 text-sm font-medium tracking-wider">
                                Plan
                            </th>
                            <th className="title-font text-gray-900 bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider">
                                Speed
                            </th>
                            <th className="title-font text-gray-900 bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider">
                                Storage
                            </th>
                            <th className="title-font text-gray-900 bg-gray-100 px-4 py-3 text-sm font-medium tracking-wider">
                                Price
                            </th>
                            <th className="title-font text-gray-900 bg-gray-100 w-10 rounded-tr rounded-br text-sm font-medium tracking-wider"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-3">Start</td>
                            <td className="px-4 py-3">5 Mb/s</td>
                            <td className="px-4 py-3">15 GB</td>
                            <td className="text-gray-900 px-4 py-3 text-lg">
                                Free
                            </td>
                            <td className="w-10 text-center">
                                <input name="plan" type="radio" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border-gray-200 border-t-2 px-4 py-3">
                                Pro
                            </td>
                            <td className="border-gray-200 border-t-2 px-4 py-3">
                                25 Mb/s
                            </td>
                            <td className="border-gray-200 border-t-2 px-4 py-3">
                                25 GB
                            </td>
                            <td className="border-gray-200 text-gray-900 border-t-2 px-4 py-3 text-lg">
                                $24
                            </td>
                            <td className="border-gray-200 w-10 border-t-2 text-center">
                                <input name="plan" type="radio" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border-gray-200 border-t-2 px-4 py-3">
                                Business
                            </td>
                            <td className="border-gray-200 border-t-2 px-4 py-3">
                                36 Mb/s
                            </td>
                            <td className="border-gray-200 border-t-2 px-4 py-3">
                                40 GB
                            </td>
                            <td className="border-gray-200 text-gray-900 border-t-2 px-4 py-3 text-lg">
                                $50
                            </td>
                            <td className="border-gray-200 w-10 border-t-2 text-center">
                                <input name="plan" type="radio" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border-gray-200 border-t-2 border-b-2 px-4 py-3">
                                Exclusive
                            </td>
                            <td className="border-gray-200 border-t-2 border-b-2 px-4 py-3">
                                48 Mb/s
                            </td>
                            <td className="border-gray-200 border-t-2 border-b-2 px-4 py-3">
                                120 GB
                            </td>
                            <td className="border-gray-200 text-gray-900 border-t-2 border-b-2 px-4 py-3 text-lg">
                                $72
                            </td>
                            <td className="border-gray-200 w-10 border-t-2 border-b-2 text-center">
                                <input name="plan" type="radio" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className="p-4">
                <Transaction404 />
            </div> */}
        </>
    );
};

export default Sold;
