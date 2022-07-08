const IDR = ({ price }) => {
    return (
        <>
            {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
            }).format(price)}
        </>
    );
};

export default IDR;
