const Notification = () => {
    return (
        <>
            <div className="container mx-auto p-4 sm:px-16 md:px-32 lg:px-48 xl:px-64 2xl:px-80 3xl:px-96">
                <div className="flex items-start gap-4">
                    <img src="/img/user.png" alt="" />
                    <div className="w-full space-y-1">
                        <div className="flex items-center justify-between">
                            <div className="text-xs text-neutral-03">
                                Penawaran produk
                            </div>
                            <div className="text-xs text-neutral-03">
                                20 Apr, 14:04
                            </div>
                        </div>
                        <div>Jam Tangan Casio</div>
                        <div>Rp 250.000</div>
                        <div>Ditawar Rp 200.000</div>
                    </div>
                </div>
                <hr className="text-neutral-02" />
                <div className="flex items-start gap-4">
                    <img src="/img/user.png" alt="" />
                    <div className="w-full space-y-1">
                        <div className="flex items-center justify-between">
                            <div className="text-neutral-03">
                                Penawaran produk
                            </div>
                            <div>20 Apr, 14:04</div>
                        </div>
                        <div>Jam Tangan Casio</div>
                        <div>Rp 250.000</div>
                        <div>Ditawar Rp 200.000</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notification;
