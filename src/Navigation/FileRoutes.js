import React from "react";
import { Route, Routes } from "react-router-dom";
import { CardCustomization } from "../Pages/CardCustomization";
import CartPage from "../Pages/CartPage";
import ChooseCardPage from "../Pages/ChooseCardPage";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import SuccessPage from "../Pages/SuccessPage";

const FileRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/cards' element={<ChooseCardPage />} />
			<Route path='/cardCustomization/:id' element={<CardCustomization />} />
			<Route path='/success/:id' element={<SuccessPage />} />
			<Route path='/cart' element={<CartPage />} />

			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};

export default FileRoutes;
