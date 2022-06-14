import React from "react";

const DetailProduct = () => {
    return (
        // <div className="bg-white w-full min-h-screen flex justify-center p-5">
        //     <div className="flex space-x-4">
        //         {/* Card */}
        //         <div className="card w-0 p-2 bg-white rounded-xl">
        //             <div className="card">
        //             <img src=".\..\public\img\jam2.png" alt="" className=""/>
        //             <div className="">
        //                 <h3>Deskripsi</h3>
        //                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas optio consequatur dolore, odit quo suscipit. Omnis, sapiente? Sunt magni corrupti autem fuga cupiditate impedit nulla in, minus delectus provident temporibus?</p>
        //             </div>
        //             </div>
        //         </div>
        //         <div >
                    
        //         </div>
        //     </div>
        // </div>

        <div className="flex justify-center gap-4 m-4">
            <div className="w-2/6 space-y-4">
                <img src="/img/jam2.png" alt="" className="justify-center w-full" />
                <div className="shadow h-fit bg-white rounded p-4 space-y-2">
                    <h3>Deskripsi</h3>
                    <p className="text-neutral-03 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum nisi labore nesciunt necessitatibus, debitis quibusdam veritatis. Ratione impedit architecto maxime dolores in commodi praesentium repellat, soluta vel odit id!</p>
                    <p className="text-neutral-03 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur incidunt, nobis dolore, minus rerum, nisi unde sint corrupti suscipit obcaecati dolores odio qui ut error eius iusto alias deleniti?</p>
                </div>
            </div>
            
            <div className="space-y-5">
                <div className="bg-white w-80 h-fit shadow-md rounded space-y-4 p-4">
                    <h3>Jam Tangan Casio</h3>
                    <p className="text-neutral-03 text-sm">Aksesoris</p>
                    <h3>Rp. 250.000</h3>
                    <button className="bg-primary-purple-04 w-full text-white rounded-xl p-2">Terbitkan</button>
                    <button className="bg-white w-full text-primary-purple-04 rounded-xl p-2 border-primary-purple-04 border">Edit</button>
                </div>
                <div className="bg-white w-80 h-fit shadow rounded gap-2 p-4 flex items-center">
                        <img src="/img/logo1.png" alt="" className="w-16 h-16"/>
                        <div className="space-y-2">
                            <h3>Nama Penjual</h3>
                            <p className="text-neutral-03 text-xs">Kota</p>
                        </div>
                </div>
            </div>
            
        </div>

        

    );
};

export default DetailProduct;
