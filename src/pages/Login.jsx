import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useGoogleLogin } from "@react-oauth/google"
import { FcGoogle } from "react-icons/fc"
import { CgSpinner } from "react-icons/cg"
import { FiArrowLeft } from "react-icons/fi"
import { authResponse, login } from "../redux/authSlice"
import DangerToast from "../components/toasts/DangerToast"
import { classNameJoin } from "../utils/classNameJoin"
import SecondHand from "../images/brand/SecondHand.png"

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.auth)
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    })

    const LoginGoogle = useGoogleLogin({
        flow: "auth-code",
        scope: "profile",
        onSuccess: async (response) => {
            const code = { code: response.code }

            dispatch(authResponse({ code }))
        },
    })

    const onChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(login({ formValue, navigate }))
    }

    return (
        <>
            <DangerToast />
            <div className="space-y-8 bg-white p-8 dark:bg-zinc-900 sm:p-14">
                <FiArrowLeft
                    className="h-6 w-6 cursor-pointer dark:text-white sm:hidden"
                    onClick={() => {
                        navigate(-1)
                    }}
                />
                <img className="sm:hidden" src={SecondHand} alt="" />
                <div className="text-2xl font-bold dark:text-white">Masuk</div>
                <form onSubmit={onSubmit}>
                    <div className="mb-4 space-y-2">
                        <label className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                            Email
                        </label>
                        <input
                            className="w-full rounded-2xl border border-neutral-02 py-3 px-4 placeholder:text-neutral-03 focus:outline-none dark:border-0 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400 dark:focus:shadow-sm dark:focus:shadow-zinc-700"
                            type="email"
                            name="email"
                            // value={email}
                            placeholder="Contoh: johndee@gmail.com"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-8 space-y-2">
                        <label className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                            Password
                        </label>
                        <input
                            className="w-full rounded-2xl border border-neutral-02 py-3 px-4 placeholder:text-neutral-03 focus:outline-none dark:border-0 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-400 dark:focus:shadow-sm dark:focus:shadow-zinc-700"
                            type="password"
                            name="password"
                            // value={password}
                            placeholder="Masukkan password"
                            onChange={onChange}
                        />
                    </div>
                    <button
                        className={classNameJoin(
                            loading === "pending"
                                ? "flex cursor-wait items-center justify-center gap-2"
                                : "bg-primary-purple-04 hover:bg-primary-purple-05",
                            "w-full rounded-2xl py-3 px-4 font-bold text-white disabled:bg-neutral-02 disabled:dark:bg-zinc-500"
                        )}
                        type="submit"
                        disabled={
                            !formValue.email ||
                            !formValue.password ||
                            loading === "pending"
                        }
                    >
                        {loading === "pending" ? (
                            <>
                                <CgSpinner className="animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : (
                            <span>Masuk</span>
                        )}
                    </button>
                </form>
                <div className="text-center text-sm dark:text-white">
                    Belum punya akun?{" "}
                    <Link
                        to="/register"
                        className="font-semibold text-primary-purple-04 hover:text-primary-purple-05 dark:hover:text-primary-purple-03"
                    >
                        Daftar di sini
                    </Link>
                </div>
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-200 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-200 dark:before:border-zinc-700 dark:after:border-zinc-700">
                    <span className="mx-4 mb-0 text-center font-semibold dark:text-white">
                        OR
                    </span>
                </div>
                <button
                    className="flex w-full items-center justify-center gap-4"
                    onClick={() => LoginGoogle()}
                >
                    <FcGoogle className="text-2xl" />
                    <span className="font-bold text-[#1976d2]">
                        Sign In With Google
                    </span>
                </button>
            </div>
        </>
    )
}

export default Login
