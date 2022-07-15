import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowLeft } from "react-icons/fi";
import { CgSpinner } from "react-icons/cg";
import { register } from "../redux/authSlice";
import DangerToast from "../components/toasts/DangerToast";
import SecondHand from "../images/SecondHand.png";

const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [show, setShow] = useState(false);

    const onChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(register({ formValue, navigate }));
    };

    return (
        <>
            {show && (
                <DangerToast
                    show={show}
                    setShow={setShow}
                    message={error?.message}
                />
            )}
            <div className="space-y-8 bg-white p-8 sm:p-14">
                <FiArrowLeft
                    className="h-6 w-6 cursor-pointer sm:hidden"
                    onClick={() => {
                        navigate(-1);
                    }}
                />
                <img className="sm:hidden" src={SecondHand} alt="" />
                <div className="text-2xl font-bold">Daftar</div>
                <form onSubmit={onSubmit}>
                    <div className="mb-4 space-y-2">
                        <label className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                            Nama
                        </label>
                        <input
                            className="w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none"
                            type="text"
                            name="name"
                            // value={name}
                            placeholder="Nama Lengkap"
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-4 space-y-2">
                        <label className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                            Email
                        </label>
                        <input
                            className="w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none"
                            type="email"
                            name="email"
                            // value={email}
                            placeholder="Contoh: johndee@gmail.com"
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-8 space-y-2">
                        <label className="block after:ml-0.5 after:text-red-500 after:content-['*']">
                            Password
                        </label>
                        <input
                            className="w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none"
                            type="password"
                            name="password"
                            // value={password}
                            placeholder="Masukkan password"
                            onChange={onChange}
                            required
                        />
                    </div>
                    <button
                        className={className(
                            !formValue.email || !formValue.password
                                ? "bg-neutral-02"
                                : "",
                            loading === "pending" &&
                                "flex cursor-wait items-center justify-center gap-2 bg-neutral-02",
                            formValue.email &&
                                formValue.password &&
                                loading === "idle" &&
                                "bg-primary-purple-04 hover:bg-primary-purple-05",
                            "w-full rounded-2xl py-3 px-4 font-bold text-white"
                        )}
                        type="submit"
                        disabled={
                            !formValue.email ||
                            !formValue.password ||
                            loading === "pending"
                        }
                        onClick={() => {
                            setShow(true);
                        }}
                    >
                        {loading === "pending" ? (
                            <>
                                <CgSpinner className="animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : (
                            <span>Daftar</span>
                        )}
                    </button>
                </form>
                <p className="text-sm text-center">
                    Sudah punya akun?{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-primary-purple-04 hover:text-primary-purple-05"
                    >
                        Masuk di sini
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Register;
