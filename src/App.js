import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Infoproduk from "./pages/Infoproduk";
import InfoProfil from "./pages/InfoProfil";
import ManageProduct from "./pages/ManageProduct";

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
                    <Route path="product/add" element={<Infoproduk />} />
                    <Route path="/manage-product" element={<ManageProduct />} />
                    <Route path="user/add" element={<InfoProfil />} />
                    <Route path="product/modal" element={<Modal />} />
                    <Route
                        path="product/modalstatus"
                        element={<ModalStatus />}
                    />
                    <Route path="product/modaltawar" element={<ModalTawar />} />
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
