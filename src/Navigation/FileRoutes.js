import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
import ProfileScreen from "../Pages/ProfileScreen";
import ProductInfo from "../Pages/ProductInfo";
import { useSelector } from "react-redux";

const FileRoutes = () => {
	let ProtectedRoute = ({ children }) => {
		const { isAuth } = useSelector((state) => state.auth);
		return isAuth ? children : <Navigate to='/auth' />;
	};
	let AuthRoute = ({ children }) => {
		const { isAuth } = useSelector((state) => state.auth);
		return isAuth ? <Navigate to='/profile' /> : children;
	};

	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/cards' element={<ChooseCardPage />} />
			<Route
				path='/auth'
				element={
					<AuthRoute>
						<LoginSignUp />
					</AuthRoute>
				}
			/>
			<Route
				path='/profile'
				element={
					<ProtectedRoute>
						<ProfileScreen />
					</ProtectedRoute>
				}
			/>
			<Route path='/productInfo/:id' element={<ProductInfo />} />
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
