import { Routes, Route, } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products"
import Join from "../pages/Join"
import ProductsDetails from "../pages/ProductsDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";

function AllRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/join" element={<Join />} />
                <Route path="/productsdetails" element={<ProductsDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/Payment" element={<Payment />} />
            </Routes>

        </>
    )
}

export default AllRouter;