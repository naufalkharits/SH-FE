import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";
import Error from "./pages/404";
import ModalBerhasil from "./components/modals/ModalBerhasil";
import ModalStatus from "./components/modals/ModalStatus";
import ModalTawar from "./components/modals/ModalTawar";
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
import UserText from "./components/UserText";
import RequireAuth from "./middlewares/RequireAuth";
import UnrequireAuth from "./middlewares/UnrequireAuth";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* public */}
                <Route path="*" element={<Error />} />
                <Route element={<Main />}>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/product/:productId"
                        element={<DetailProduct />}
                    />
                    <Route
                        path="/buy-product/:productId"
                        element={<DetailProductBuyer />}
                    />
                </Route>
                {/* required */}
                <Route
                    element={
                        <RequireAuth>
                            <Main />
                        </RequireAuth>
                    }
                >
                    <Route path="/manage-product" element={<ManageProduct />}>
                        <Route index element={<AllProduct />} />
                        <Route path="wishlisted" element={<Wishlisted />} />
                        <Route path="sold" element={<Sold />} />
                    </Route>
                    <Route element={<UserProfile />}>
                        <Route path="user" element={<UserText />} />
                        <Route
                            path="/order-list"
                            element={<HistoryTransaksi />}
                        />
                        <Route path="/wishlist" element={<ListWishlist />} />
                    </Route>
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
                    <Route path="/user/profile" element={<InfoProfil />} />
                    <Route path="/user/infopenawar" element={<InfoPenawar />} />
                </Route>
                <Route
                    element={
                        <UnrequireAuth>
                            <Auth />
                        </UnrequireAuth>
                    }
                >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="test/modalberhasil" element={<ModalBerhasil />} />
                <Route path="test/modalstatus" element={<ModalStatus />} />
                <Route path="test/modaltawar" element={<ModalTawar />} />

                {/* unrequired */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
