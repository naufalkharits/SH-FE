import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchTransactionTawar, transactionSelectors } from "../redux/transactionSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TransactionCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [status] = useState("");
    const [as] = useState("seller");

    const transaction = useSelector(transactionSelectors.selectAll)

    // const clicked = () => {
    //     setModalOn(true);
    // };

    useEffect(() => {
        dispatch(fetchTransactionTawar({ status, as }));
    }, [status, as]);

    return (
        <>
        {transaction?.map((tx) => (
        <div className="flex gap-6 rounded-xl"
        key={tx.id}>
            <img
                src="/img/jam-2.png"
                alt=""
                className="h-14 w-14 rounded-xl object-cover"
            />
                <div className="w-full space-y-1">
                    <div className="flex justify-between text-xs text-neutral-03">
                        <p>{tx.status}</p>
                        <p>{tx.updatedAt}</p>
                    </div>
                    <p className="">{tx?.Product.name}</p>
                    <p className="">Rp. {tx?.Product.price}</p>
                    <p className="">Ditawar Rp. {tx?.price}</p>
                    {tx.status==="PENDING"&&
                    <div className="flex justify-end">
                    <button className="mr-4 w-1/3 rounded-2xl border border-primary-purple-04 py-2">
                            Tolak
                        </button>
                        <button
                        // onClick={clicked}
                            className="w-1/3 rounded-2xl bg-primary-purple-04 py-2 text-white"
                        >
                            Terima
                        </button>
                    </div>
                    }
                </div>
            </div>
            ))}
        </>
        
    );
};

export default TransactionCard;
