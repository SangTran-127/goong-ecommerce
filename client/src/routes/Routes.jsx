import React from 'react'
import { Route, Routes as Switch } from "react-router-dom"
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Home from "../pages/Home";
import Product from "../pages/Product";
const Routes = () => {
    return (
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="catalog" element={<Catalog />}>
                <Route path=":slug" element={<Product />} />
            </Route>
            <Route path="cart" element={<Cart />} />

        </Switch>
    )
}

export default Routes