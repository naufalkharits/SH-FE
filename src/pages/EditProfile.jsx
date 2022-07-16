import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FiCamera, FiArrowLeft, FiChevronDown } from "react-icons/fi"
import { me, updateBiodata } from "../redux/authSlice"
import { phoneNumberFormatter } from "../utils/phoneNumberFormatter"
import { CgSpinner } from "react-icons/cg"

const className = (...classes) => {
    return classes.filter(Boolean).join(" ")
}

const EditProfile = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, profile, loading, spinner } = useSelector(
        (state) => state.auth
    )

    const [formValue, setFormValue] = useState({
        name: "",
        city: "",
        address: "",
        phone_number: "",
        picture: null,
    })
    const [formData, setFormData] = useState("")

    const onPictChange = (e) => {
        const file = e.target.files
        for (let index of file) {
            formData.append("picture", index)
        }
        setFormValue({
            ...formValue,
            picture: URL.createObjectURL(file[0]),
        })
    }

    const onChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        formValue.name && formData.set("name", formValue.name)
        formValue.city && formData.set("city", formValue.city)
        formValue.address && formData.set("address", formValue.address)
        formValue.phone_number &&
            formData.set("phone_number", formValue.phone_number)

        dispatch(updateBiodata({ formData, navigate, location }))
    }

    useEffect(() => {
        dispatch(me(user?.accessToken.token))
        setFormData(new FormData())
    }, [user, dispatch])

    useEffect(() => {
        profile &&
            setFormValue({
                name: profile.name,
                city: profile.city,
                address: profile.address,
                phone_number: profile.phone_number,
                picture: profile.picture,
            })
    }, [profile])

    return (
        <div className="mx-auto mt-4 flex w-full justify-between sm:mt-10 md:w-full lg:w-[1024px]">
            <div className="hidden sm:ml-10 sm:mr-10 sm:block lg:mr-20">
                <FiArrowLeft
                    className="cursor-pointer text-3xl"
                    onClick={() => {
                        navigate(-1)
                    }}
                />
            </div>
            <form className="w-full space-y-4 px-5" onSubmit={onSubmit}>
                <div className="mb-8 items-center gap-6 space-y-6 ">
                    <div className="flex items-center justify-center space-y-2">
                        {formValue.picture ? (
                            <label
                                className="flex h-24 w-24 items-center justify-center rounded-xl"
                                htmlFor="file"
                            >
                                <input
                                    className="hidden h-full w-full"
                                    type="file"
                                    id="file"
                                    accept="image/png, image/jpeg"
                                    onChange={onPictChange}
                                />
                                <img src={formValue.picture} alt="" />
                            </label>
                        ) : (
                            <label
                                className="flex h-24 w-24 items-center justify-center rounded-xl border border-neutral-02 bg-primary-purple-01 text-neutral-03"
                                htmlFor="file"
                            >
                                <input
                                    className="hidden h-full w-full"
                                    type="file"
                                    id="file"
                                    accept="image/png, image/jpeg"
                                    onChange={onPictChange}
                                />
                                <FiCamera className="text-3xl text-primary-purple-04" />
                            </label>
                        )}
                    </div>

                    <div className="space-y-2">
                        {/* Nama */}
                        <label className="space-y-2">
                            <span className="block">Nama</span>
                            <input
                                className="w-full rounded-2xl border border-neutral-02 py-2 px-4 text-neutral-03 focus:outline-none"
                                type="text"
                                placeholder="Nama"
                                name="name"
                                value={formValue.name || ""}
                                onChange={onChange}
                            />
                        </label>
                    </div>

                    <div className="">
                        {/* Kota */}
                        <label className="space-y-2">
                            <span className="block">Kota</span>
                            <label className="relative block">
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                                    <FiChevronDown />
                                </span>
                                <select
                                    className="bg-neutral-01 w-full appearance-none rounded-2xl border border-neutral-02 py-2 px-4 text-neutral-03 focus:outline-none"
                                    name="city"
                                    value={formValue.city || ""}
                                    onChange={onChange}
                                >
                                    <option value="">
                                        Pilih Kota/Kabupaten
                                    </option>
                                    <option value="Banda Aceh">
                                        Banda Aceh
                                    </option>
                                    <option value="Bandung">Bandung</option>
                                    <option value="Batam">Batam</option>
                                    <option value="Denpasar">Denpasar</option>
                                    <option value="Jambi">Jambi</option>
                                    <option value="Jakarta">Jakarta</option>
                                    <option value="Jayapura">Jayapura</option>
                                    <option value="Palembang">Palembang</option>
                                    <option value="Palangka Raya">
                                        Palangka Raya
                                    </option>
                                    <option value="Semarang">Semarang</option>
                                    <option value="Surabaya">Surabaya</option>
                                    <option value="Yogyakarta">
                                        Yogyakarta
                                    </option>
                                </select>
                            </label>
                        </label>
                    </div>

                    <div className="">
                        {/* Alamat */}
                        <label className="space-y-2">
                            <span className="block">Alamat</span>
                            <textarea
                                rows="2"
                                className="bg-neutral-01 h-20 w-full resize-none rounded-2xl border border-neutral-02 py-2 px-4 text-neutral-03 focus:outline-none"
                                type="text"
                                placeholder="Contoh: Jalan Ikan Hiu 33"
                                name="address"
                                value={
                                    formValue.address === "null"
                                        ? ""
                                        : formValue.address
                                }
                                onChange={onChange}
                            />
                        </label>
                    </div>

                    <div className="space-y-2">
                        {/* No Handphone */}
                        <label className="space-y-2">
                            <span className="block">No Handphone</span>
                            <input
                                className="w-full rounded-2xl border border-neutral-02 py-2 px-4 text-neutral-03 focus:outline-none"
                                type="number"
                                placeholder="contoh: 08123456789"
                                name="phone_number"
                                value={formValue.phone_number || ""}
                                onChange={(e) => {
                                    setFormValue({
                                        ...formValue,
                                        [e.target.name]: phoneNumberFormatter(
                                            e.target.value
                                        ),
                                    })
                                }}
                            />
                        </label>
                    </div>
                    <button
                        className={className(
                            spinner
                                ? "flex cursor-wait items-center justify-center gap-2 bg-neutral-02"
                                : "bg-primary-purple-04 hover:bg-primary-purple-05",
                            "w-full rounded-2xl py-3.5 px-6 font-medium text-white"
                        )}
                        disabled={loading === "pending" || spinner}
                    >
                        {spinner ? (
                            <>
                                <CgSpinner className="animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : (
                            <span>Simpan</span>
                        )}
                    </button>
                </div>
            </form>
            <div className="hidden h-[30px] w-[30px] sm:ml-10 sm:mr-10 sm:block lg:ml-20"></div>
        </div>
    )
}

export default EditProfile
