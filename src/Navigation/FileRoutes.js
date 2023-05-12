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
import ProfileScreen from "../Pages/ProfileScreen";
import ProductInfo from "../Pages/ProductInfo";
import PrivacyPage from "../Pages/PrivacyPage";
import ContactUsPage from "../Pages/ContactUsPage";
import ReturnPolicyPage from "../Pages/ReturnPolicyPage";
import { CardCustomization1 } from "../Pages/CardCustomization1";

const FileRoutes = () => {
	return (
		<Routes>
			<Route path='/cards' element={<ChooseCardPage />} />
			<Route path='/auth' element={<LoginSignUp />} />
			<Route path='/profile' element={<ProfileScreen />} />
			<Route path='/productInfo/:id' element={<ProductInfo />} />
			<Route path='/support' element={<SupportPage />} />
			<Route path='/products' element={<ProductsPage />} />
			<Route path='/otherProducts' element={<OtherProducts />} />
			<Route path='/cardCustomization/:id' element={<CardCustomization />} />
			<Route path='/cardCustomization1/:id' element={<CardCustomization1 />} />
			<Route path='/success/:id' element={<SuccessPage />} />
			<Route path='/cart' element={<CartPage />} />
			<Route path='/privacy' element={<PrivacyPage />} />
			<Route path='/contact' element={<ContactUsPage />} />
			<Route path='/return' element={<ReturnPolicyPage />} />
			<Route path='/' element={<HomePage />} />
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};

export default FileRoutes;
