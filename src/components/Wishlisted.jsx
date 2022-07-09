import Wishlisted404 from "../unfound/Wishlisted404";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {},
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
            label: "Produk Diminati",
            data: userData.map((data) => data.pendapatanBersih),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        // {
        //     label: "Dataset 2",
        //     data: userData.map((data) => data.produkTerjual),
        //     borderColor: "rgb(53, 162, 235)",
        //     backgroundColor: "rgba(53, 162, 235, 0.5)",
        // },
    ],
};

const Wishlisted = () => {
    return (
        <>
            <div className="w-full sm:p-4">
                <div className="space-y-4 rounded-2xl border border-neutral-200 p-4 shadow-md">
                    <div className="font-medium">Statisti Tokomu</div>

                    <div className="w-fit rounded-md p-4 shadow">
                        <div>Produk Diminati</div>
                        <div>0</div>
                        <div>0% dari 7 hari terakhir</div>
                    </div>
                    <div className="h-48 w-full">
                        <Line options={options} data={data} />
                    </div>
                </div>
            </div>
            <div className="p-4">
                <Wishlisted404 />
            </div>
        </>
    );
};

export default Wishlisted;
