import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailProduct from "./components/DetailProduct";
import JualButton from "./components/JualButton";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Error from "./components/404";

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
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
