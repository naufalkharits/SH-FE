import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailProduct from "./components/DetailProduct";
import InfoProduct from "./components/InfoProduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                <>
                <Navbar />
                <InfoProduct />
                {/* <DetailProduct/> */}
                </>
                } 
                />
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
