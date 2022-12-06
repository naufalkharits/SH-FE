import { useEffect, useState } from "react"
import { CgSpinner } from "react-icons/cg"
import { FiArrowLeft, FiChevronDown, FiPlus } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import EditProductSkeleton from "../components/skeletons/EditProductSkeleton"
import DangerToast from "../components/toasts/DangerToast"
import { fetchCategories } from "../redux/categoriesSlice"
import {
  getProductById,
  productsSelectors,
  setProductsError,
  setShowProductsError,
  updateProduct,
} from "../redux/productsSlice"
import { classNameJoin } from "../utils/classNameJoin"

const EditProduct = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const product = useSelector((state) => productsSelectors.selectById(state, productId))
  const { spinner, loading } = useSelector((state) => state.products)
  const { categories } = useSelector((state) => state.categories)
  const [formValue, setFormValue] = useState({
    name: "",
    price: 0,
    category: "",
    description: "",
    weight: 0,
    pictures: [],
  })
  const [formData, setFormData] = useState("")
  const [formCategory, setFormCategory] = useState([])

  const onFileChange = (e) => {
    const file = e.target.files
    const fileArray = Array.from(file)
    formData.delete("pictures")
    if (file.length > 4) {
      e.target.value = null
      dispatch(setProductsError({ message: "Images cannot be more than 4" }))
      dispatch(setShowProductsError(true))
    } else {
      const imageArray = fileArray.map((file) => {
        return URL.createObjectURL(file)
      })
      for (let index of file) {
        formData.append("pictures", index)
      }
      setFormValue({
        ...formValue,
        pictures: imageArray,
      })
    }
  }

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    formData.set("name", formValue.name)
    formData.set("price", formValue.price)
    formData.set("category", formValue.category)
    formData.set("description", formValue.description)
    formData.set("weight", formValue.weight)
    if (formData.has("pictures") === false) {
      const file = formValue.pictures
      for (let index of file) {
        formData.append("pictures", index)
      }
    }

    dispatch(updateProduct({ productId, formData, navigate }))
  }

  useEffect(() => {
    setFormData(new FormData())
    dispatch(getProductById(productId))
    dispatch(fetchCategories())
  }, [productId, dispatch])

  useEffect(() => {
    product &&
      setFormValue({
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
        weight: product.weight,
        pictures: product.pictures,
      })
    categories && setFormCategory(categories)
  }, [product, categories])

  return (
    <>
      <DangerToast />
      <div className="mx-auto mt-4 flex w-full justify-between sm:mt-10 md:w-full lg:w-[1024px]">
        <div className="hidden sm:ml-10 sm:mr-10 sm:block lg:mr-20">
          <FiArrowLeft
            className="cursor-pointer text-3xl dark:text-white"
            onClick={() => {
              navigate(-1)
            }}
          />
        </div>
        <form className="mb-8 w-full space-y-4 px-5" onSubmit={onSubmit}>
          {loading === "pending" ? (
            <EditProductSkeleton />
          ) : (
            <>
              <div className="space-y-2">
                <label className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                  Nama Produk
                </label>
                <input
                  className="w-full rounded-2xl border border-neutral-02 py-3.5 px-4 placeholder:text-neutral-03 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                  type="text"
                  placeholder="Nama Produk"
                  name="name"
                  value={formValue.name}
                  onChange={onChange}
                />
              </div>
              <div className="space-y-2">
                <label className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                  Harga Produk
                </label>
                <input
                  className="w-full rounded-2xl border border-neutral-02 py-3.5 px-4 placeholder:text-neutral-03 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                  type="number"
                  placeholder="Rp 0,00"
                  name="price"
                  value={formValue.price}
                  onChange={onChange}
                />
              </div>
              <div className="space-y-2">
                <label className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                  Kategori Produk
                </label>
                <label className="relative block">
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-03">
                    <FiChevronDown />
                  </span>
                  <select
                    className=" bg-neutral-01 w-full appearance-none rounded-2xl border border-neutral-02 bg-white py-3.5 pr-10 pl-3 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                    name="category"
                    value={formValue.category}
                    onChange={onChange}>
                    <option value="">Pilih Kategori</option>
                    {formCategory.map((category) => (
                      <option value={category} key={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="space-y-2">
                <label className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                  Bobot Produk
                </label>
                <input
                  className="w-full rounded-2xl border border-neutral-02 py-3.5 px-4 placeholder:text-neutral-03 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                  type="number"
                  placeholder="Rp 0,00"
                  name="weight"
                  value={formValue.weight}
                  onChange={onChange}
                />
              </div>
              <div className="space-y-2">
                <label className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                  Deskripsi Produk
                </label>
                <textarea
                  rows="2"
                  className="bg-neutral-01 w-full resize-none rounded-2xl border border-neutral-02 py-3 px-4 placeholder:text-neutral-03 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                  name="description"
                  value={formValue.description}
                  onChange={onChange}
                />
              </div>
              <div className="space-y-2">
                <label className="block after:ml-0.5 after:text-red-500 after:content-['*'] dark:text-white">
                  Foto Produk
                </label>
                <div className="flex flex-wrap">
                  {formValue.pictures &&
                    formValue.pictures.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt=""
                        className="mr-4 mb-4 h-24 w-24 object-contain"
                      />
                    ))}
                  <label
                    className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border border-dashed border-neutral-02 text-2xl text-neutral-03 dark:border-zinc-400 dark:text-zinc-400"
                    htmlFor="file">
                    <input
                      className="hidden h-full w-full"
                      type="file"
                      id="file"
                      name="pictures"
                      accept="image/png, image/jpeg, image/jpg"
                      multiple
                      onChange={onFileChange}
                    />
                    <FiPlus />
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="sm:w-74 w-[48%] rounded-2xl border border-primary-purple-04 py-3 text-center font-medium hover:bg-primary-purple-05 hover:text-white dark:text-white">
                  Preview
                </div>
                <button
                  className={classNameJoin(
                    spinner
                      ? "flex cursor-wait items-center justify-center gap-2"
                      : "bg-primary-purple-04 hover:bg-primary-purple-05",
                    "sm:w-74 w-[48%] rounded-2xl py-3 font-medium text-white disabled:bg-neutral-02 dark:disabled:bg-zinc-500"
                  )}
                  type="submit"
                  disabled={spinner}>
                  {spinner ? (
                    <>
                      <CgSpinner className="animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>Terbitkan</span>
                  )}
                </button>
              </div>
            </>
          )}
        </form>
        <div className="hidden h-[30px] w-[30px] sm:ml-10 sm:mr-10 sm:block lg:ml-20"></div>
      </div>
    </>
  )
}

export default EditProduct
