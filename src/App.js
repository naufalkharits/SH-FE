import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import DetailProduct from "./components/DetailProduct";
<<<<<<< HEAD
import InfoProduct from "./components/InfoProduct";
=======
import Error from "./components/404";
import Auth from "./layouts/Auth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Infoproduk from "./pages/Infoproduk";
>>>>>>> 1f430dabf25843d6c94c5dc3de0513a3d8e21b4c

function App() {
    return (
        <BrowserRouter>
            <Routes>
<<<<<<< HEAD
                <Route path="/" element={
                <>
                <Navbar />
                <InfoProduct />
                {/* <DetailProduct/> */}
                </>
                } 
                />
                
=======
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route
                        path="product/:productId"
                        element={<DetailProduct />}
                    />
                    <Route 
                        path="product/add"
                        element={<Infoproduk />}
                    />
                </Route>
                <Route element={<Auth />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="*" element={<Error />} />
>>>>>>> 1f430dabf25843d6c94c5dc3de0513a3d8e21b4c
            </Routes>
        </BrowserRouter>
    );
}

export default App;
