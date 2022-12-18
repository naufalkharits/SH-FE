import { useEffect, useState } from "react"
import { CgSpinner } from "react-icons/cg"
import { FiArrowLeft, FiCamera, FiChevronDown } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import EditProfileSkeleton from "../components/skeletons/EditProfileSkeleton"
import { me, updateBiodata } from "../redux/authSlice"
import { getCities, getProvinces } from "../redux/courierSlice"
import { classNameJoin } from "../utils/classNameJoin"
import { phoneNumberFormatter } from "../utils/phoneNumberFormatter"

const EditProfile = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, profile, loading, spinner } = useSelector((state) => state.auth)
  const { provinces, cities } = useSelector((state) => state.courier)
  const loadingCourier = useSelector((state) => state.courier.loading)

  const [formValue, setFormValue] = useState({
    name: "",
    province: "",
    city: "",
    address: "",
    phone_number: "",
    picture: null,
  })
  const [formData, setFormData] = useState("")

  const onPictChange = (e) => {
    const file = e.target.files
    formData.delete("picture")
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
    e.target.name === "province" &&
      !e.target.value &&
      setFormValue({
        city: "",
      })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    formValue.name && formData.set("name", formValue.name)
    formValue.province && formData.set("province", formValue.province)
    formValue.city && formData.set("city", formValue.city)
    formValue.address && formData.set("address", formValue.address)
    formValue.phone_number && formData.set("phone_number", formValue.phone_number)

    dispatch(updateBiodata({ formData, navigate, location }))
  }

  useEffect(() => {
    dispatch(getProvinces())
  }, [dispatch])

  useEffect(() => {
    formValue.province && dispatch(getCities(formValue.province.replace(/\D/g, "")))
  }, [dispatch, formValue.province])

  useEffect(() => {
    dispatch(me(user?.accessToken.token))
    setFormData(new FormData())
  }, [user, dispatch])

  useEffect(() => {
    profile &&
      setFormValue({
        name: profile.name,
        province: profile.province,
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
          className="cursor-pointer text-3xl dark:text-white"
          onClick={() => {
            navigate(-1)
          }}
        />
      </div>
      <form className="w-full space-y-4 px-5" onSubmit={onSubmit}>
        <div className="mb-8 items-center gap-6 space-y-6 ">
          {loading === "pending" ? (
            <EditProfileSkeleton />
          ) : (
            <>
              <div className="flex items-center justify-center space-y-2">
                {formValue.picture ? (
                  <label
                    className="flex h-24 w-24 items-center justify-center rounded-xl"
                    htmlFor="file">
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
                    htmlFor="file">
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
                  <span className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Nama
                  </span>
                  <input
                    className="w-full rounded-2xl border border-neutral-02 py-2 px-4 text-neutral-03 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                    type="text"
                    placeholder="Nama"
                    name="name"
                    value={formValue.name || ""}
                    onChange={onChange}
                  />
                </label>
              </div>

              <div className="">
                {/* Provinsi */}
                <label className="space-y-2">
                  <span className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Provinsi
                  </span>
                  <label className="relative block">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                      <FiChevronDown />
                    </span>
                    <select
                      className="bg-neutral-01 w-full appearance-none rounded-2xl border border-neutral-02 py-2 px-4 text-neutral-03 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                      name="province"
                      value={formValue.province || ""}
                      onChange={onChange}>
                      <option value="">Pilih Provinsi</option>
                      {Array.isArray(provinces) &&
                        provinces.map((province) => (
                          <option
                            key={province.province_id}
                            value={[province.province_id, province.province]}>
                            {province.province}
                          </option>
                        ))}
                    </select>
                  </label>
                </label>
              </div>

              <div className="">
                {/* Kota */}
                <label className="space-y-2">
                  <span className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Kota
                  </span>
                  <label className="relative block">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                      <FiChevronDown />
                    </span>
                    <select
                      className="bg-neutral-01 w-full appearance-none rounded-2xl border border-neutral-02 py-2 px-4 text-neutral-03 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                      name="city"
                      value={formValue.city || ""}
                      onChange={onChange}
                      disabled={!formValue.province || loadingCourier === "pending"}>
                      <option value="">Pilih Kota/Kabupaten</option>
                      {formValue.province &&
                        Array.isArray(cities) &&
                        cities.map((city) => (
                          <option key={city.city_id} value={[city.city_id, city.city_name]}>
                            {city.city_name}
                          </option>
                        ))}
                    </select>
                  </label>
                </label>
              </div>

              <div className="">
                {/* Alamat */}
                <label className="space-y-2">
                  <span className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    Alamat
                  </span>
                  <textarea
                    rows="2"
                    className="bg-neutral-01 h-20 w-full resize-none rounded-2xl border border-neutral-02 py-2 px-4 text-neutral-03 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                    type="text"
                    placeholder="Contoh: Jalan Ikan Hiu 33"
                    name="address"
                    value={formValue.address === null ? "" : formValue.address}
                    onChange={onChange}
                  />
                </label>
              </div>

              <div className="space-y-2">
                {/* No Handphone */}
                <label className="space-y-2">
                  <span className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                    No Handphone
                  </span>
                  <input
                    className="w-full rounded-2xl border border-neutral-02 py-2 px-4 text-neutral-03 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                    type="number"
                    placeholder="contoh: +628123456789"
                    name="phone_number"
                    value={formValue.phone_number || ""}
                    onChange={(e) => {
                      setFormValue({
                        ...formValue,
                        [e.target.name]: phoneNumberFormatter(e.target.value),
                      })
                    }}
                  />
                </label>
              </div>
              <button
                className={classNameJoin(
                  spinner
                    ? "flex cursor-wait items-center justify-center gap-2 bg-neutral-02"
                    : "bg-primary-purple-04 hover:bg-primary-purple-05",
                  "w-full rounded-2xl py-3.5 px-6 font-medium text-white"
                )}
                disabled={loading === "pending" || spinner}>
                {spinner ? (
                  <>
                    <CgSpinner className="animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Simpan</span>
                )}
              </button>
            </>
          )}
        </div>
      </form>
      <div className="hidden h-[30px] w-[30px] sm:ml-10 sm:mr-10 sm:block lg:ml-20"></div>
    </div>
  )
}

export default EditProfile
