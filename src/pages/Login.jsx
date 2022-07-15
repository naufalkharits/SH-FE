import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useGoogleLogin } from "@react-oauth/google"
import { GoogleLogin } from "@react-oauth/google"
import { FcGoogle } from "react-icons/fc"
import { FiArrowLeft } from "react-icons/fi"
import { CgSpinner } from "react-icons/cg"
import { authResponse, login } from "../redux/authSlice"
import DangerToast from "../components/toasts/DangerToast"
import SecondHand from "../images/SecondHand.png"

const className = (...classes) => {
    return classes.filter(Boolean).join(" ")
}

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, error } = useSelector((state) => state.auth)
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    })
    const [show, setShow] = useState(false)

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
                        navigate(-1)
                    }}
                />
                <img className="sm:hidden" src={SecondHand} alt="" />
                <div className="text-2xl font-bold">Masuk</div>
                <form onSubmit={onSubmit}>
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
                            setShow(true)
                        }}
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
                <p className="mb-8 w-full text-center">Or</p>

                {/* <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                /> */}
                <button
                    className="flex w-full items-center justify-between rounded-2xl border border-neutral-05 py-3 px-4 font-bold text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                    onClick={() => LoginGoogle()}
                >
                    <FcGoogle className="rounded-2xl bg-white text-2xl" />
                    <p>Sign In With Google</p>
                    <div className="w-5"></div>
                </button>
                <p className="text-center text-sm">
                    Belum punya akun?{" "}
                    <Link
                        to="/register"
                        className="font-semibold text-primary-purple-04 hover:text-primary-purple-05"
                    >
                        Daftar di sini
                    </Link>
                </p>
            </div>
        </>
    )
}

export default Login
