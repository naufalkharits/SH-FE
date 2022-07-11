import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts
import Main from "./layouts/Main";
import Auth from "./layouts/Auth";
// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import EditProduct from "./pages/EditProduct";
import Notification from "./pages/Notification";
import PreviewProduct from "./pages/PreviewProduct";
import Wishlist from "./pages/Wishlist";
import AddProduct from "./pages/AddProduct";
import EditProfile from "./pages/EditProfile";
import ManageProduct from "./pages/ManageProduct";
import InfoPenawar from "./pages/InfoPenawar";
import DetailProduct from "./pages/DetailProduct";
import Error from "./pages/404";
// middlewares
import PublicRoutes from "./middlewares/PublicRoutes";
import AuthRoutes from "./middlewares/AuthRoutes";
import UnauthRoutes from "./middlewares/UnauthRoutes";
// misc
import ModalBerhasil from "./components/modals/ModalBerhasil";
import ModalStatus from "./components/modals/ModalStatus";
import ModalTawar from "./components/modals/ModalTawar";
import Topbar from "./components/Topbar";
import AllProduct from "./components/AllProduct";
import Wishlisted from "./components/Wishlisted";
import Sold from "./components/Sold";
import HistoryTransaksi from "./components/HistoryTransaksi";
import ProfileMenu from "./components/ProfileMenu";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* publicRoutes */}
                <Route element={<PublicRoutes />}>
                    <Route path="*" element={<Error />} />
                    <Route
                        path="test/modalberhasil"
                        element={<ModalBerhasil />}
                    />
                    <Route path="test/modalstatus" element={<ModalStatus />} />
                    <Route path="test/modaltawar" element={<ModalTawar />} />
                    <Route element={<Main />}>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/product/:productId"
                            element={<DetailProduct />}
                        />
                    </Route>
                </Route>

                {/* authRoutes */}
                <Route element={<AuthRoutes />}>
                    <Route path="/notification" element={<Notification />} />
                    <Route element={<Main />}>
                        <Route
                            path="/manage-product"
                            element={<ManageProduct />}
                        >
                            <Route index element={<AllProduct />} />
                            <Route path="wishlisted" element={<Wishlisted />} />
                            <Route path="sold" element={<Sold />} />
                        </Route>
                        <Route element={<UserProfile />}>
                            <Route path="user" element={<ProfileMenu />} />
                            <Route
                                path="/order-list"
                                element={<HistoryTransaksi />}
                            />
                            <Route path="/wishlist" element={<Wishlist />} />
                        </Route>
                    </Route>
                    <Route element={<Topbar />}>
                        <Route
                            path="/manage-product/add"
                            element={<AddProduct />}
                        />
                        <Route
                            path="/manage-product/edit/:productId"
                            element={<EditProduct />}
                        />
                        <Route
                            path="/manage-product/preview/:productId"
                            element={<PreviewProduct />}
                        />
                        <Route path="/user/profile" element={<EditProfile />} />
                        <Route
                            path="/user/infopenawar"
                            element={<InfoPenawar />}
                        />
                    </Route>
                </Route>

                {/* unauthRoutes */}
                <Route element={<UnauthRoutes />}>
                    <Route element={<Auth />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
