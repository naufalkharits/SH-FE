import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";
import Error from "./components/404";
import Modal from "./components/Modal";
import ModalStatus from "./components/ModalStatus";
import ModalTawar from "./components/ModalTawar";
import Auth from "./layouts/Auth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import InfoProfil from "./pages/InfoProfil";
import ManageProduct from "./pages/ManageProduct";
import InfoPenawar from "./pages/InfoPenawar";
import Topbar from "./components/Topbar";
import AllProduct from "./components/AllProduct";
import Wishlisted from "./components/Wishlisted";
import Sold from "./components/Sold";
import DetailProductBuyer from "./pages/DetailProductBuyer";
import UserProfile from "./pages/UserProfile";
import HistoryTransaksi from "./components/HistoryTransaksi";
import ListWishlist from "./components/ListWishlist";
import EditProduct from "./pages/EditProduct";
import Notification from "./pages/Notification";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route
                        path="product/:productId"
                        element={<DetailProduct />}
                    />
                    <Route
                        path="buy-product/:productId"
                        element={<DetailProductBuyer />}
                    />
                    <Route path="manage-product" element={<ManageProduct />}>
                        <Route index element={<AllProduct />} />
                        <Route path="wishlisted" element={<Wishlisted />} />
                        <Route path="sold" element={<Sold />} />
                    </Route>
                    <Route path="user/profile" element={<UserProfile />}>
                        <Route index element={<Navigate to={"history"} />} />
                        <Route path="history" element={<HistoryTransaksi />} />
                        <Route path="wishlist" element={<ListWishlist />} />
                    </Route>
                    <Route path="product/modal" element={<Modal />} />
                    <Route
                        path="product/modalstatus"
                        element={<ModalStatus />}
                    />
                    <Route path="product/modaltawar" element={<ModalTawar />} />
                </Route>
                <Route path="/notification" element={<Notification />} />
                <Route element={<Topbar />}>
                    <Route
                        path="/manage-product/add"
                        element={<AddProduct />}
                    />
                    <Route
                        path="/manage-product/edit/:productId"
                        element={<EditProduct />}
                    />
                    <Route path="/user/add" element={<InfoProfil />} />
                    <Route path="/user/infopenawar" element={<InfoPenawar />} />
                </Route>
                <Route element={<Auth />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
