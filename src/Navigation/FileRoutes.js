import React from "react";
import { Route, Routes } from "react-router-dom";
import { CardCustomization } from "../Pages/CardCustomization";
import CartPage from "../Pages/CartPage";
import ChooseCardPage from "../Pages/ChooseCardPage";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import LoginSignUp from "../Pages/LoginSignUp";
import OtherProducts from "../Pages/OtherProducts";
import ProductsPage from "../Pages/ProductsPage";
import SuccessPage from "../Pages/SuccessPage";
import SupportPage from "../Pages/SupportPage";

const FileRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/cards' element={<ChooseCardPage />} />
			<Route path='/auth' element={<LoginSignUp />} />
			<Route path='/support' element={<SupportPage />} />
			<Route path='/products' element={<ProductsPage />} />
			<Route path='/otherProducts' element={<OtherProducts />} />

			<Route path='/cardCustomization/:id' element={<CardCustomization />} />
			<Route path='/success/:id' element={<SuccessPage />} />
			<Route path='/cart' element={<CartPage />} />

			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};

export default FileRoutes;
