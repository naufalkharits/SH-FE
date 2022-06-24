import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/authSlice";
import { FiArrowLeft } from "react-icons/fi";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    });

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
        <div className="space-y-8 bg-white p-8 sm:p-14">
            <FiArrowLeft
                className="h-6 w-6 cursor-pointer sm:hidden"
                onClick={() => {
                    navigate(-1);
                }}
            />
            <div className="text-2xl font-bold">Daftar</div>
            <form onSubmit={onSubmit}>
                <div className="mb-4 space-y-2">
                    <label className="block">Nama</label>
                    <input
                        className="w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none"
                        type="text"
                        id="nama"
                        name="nama"
                        // value={nama}
                        placeholder="Nama Lengkap"
                        // onChange={onChange}
                        // required
                    />
                </div>
                <div className="mb-4 space-y-2">
                    <label className="block">Email</label>
                    <input
                        className="w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none"
                        type="text"
                        id="email"
                        name="email"
                        // value={email}
                        placeholder="Contoh: johndee@gmail.com"
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-8 space-y-2">
                    <label className="block">Password</label>
                    <input
                        className="w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none"
                        type="password"
                        id="password"
                        name="password"
                        // value={password}
                        placeholder="Masukkan password"
                        onChange={onChange}
                        required
                    />
                </div>
                <button
                    className="w-full rounded-2xl bg-primary-purple-04 py-3 px-4 font-bold text-white hover:bg-primary-purple-05"
                    type="submit"
                >
                    Daftar
                </button>
            </form>
            <p className="text-sm">
                Sudah punya akun?{" "}
                <Link
                    to="/login"
                    className="font-semibold text-primary-purple-04 hover:text-primary-purple-05"
                >
                    Masuk di sini
                </Link>
            </p>
        </div>
    );
};

export default Register;
