import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-8 bg-white p-8 sm:p-14">
            <FiArrowLeft
                className="h-6 w-6 cursor-pointer sm:hidden"
                onClick={() => {
                    navigate(-1);
                }}
            />
            <div className="text-2xl font-bold">Masuk</div>
            <form
            // onSubmit={onFormSubmit}
            >
                <div className="mb-4 space-y-2">
                    <label className="block">Email</label>
                    <input
                        className="w-full rounded-2xl border border-neutral-02 py-3 px-4 focus:outline-none"
                        type="text"
                        id="email"
                        name="email"
                        // value={email}
                        placeholder="Contoh: johndee@gmail.com"
                        // onChange={onInputChange}
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
                        // onChange={onInputChange}
                        required
                    />
                </div>
                <button
                    className="w-full rounded-2xl bg-primary-purple-04 py-3 px-4 font-bold text-white hover:bg-primary-purple-05"
                    type="submit"
                >
                    Masuk
                </button>
            </form>
            <p className="text-sm">
                Belum punya akun?{" "}
                <Link
                    to="/register"
                    className="font-semibold text-primary-purple-04 hover:text-primary-purple-05"
                >
                    Daftar di sini
                </Link>
            </p>
        </div>
    );
};

export default Login;
