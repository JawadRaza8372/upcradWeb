import { useEffect, useState } from "react";
import CustomNavbar from "./Components/CustomNavbar";
import FooterComp from "./Components/FooterComp";
import FileRoutes from "./Navigation/FileRoutes";
import { useDispatch } from "react-redux";
import {
	setCartItems,
	setFootballCards,
	setLanguages,
	setOtherProducts,
	setBanner,
	setExtraServices,
} from "./store/projectSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAuth } from "./store/authSlice";
import { useTranslation } from "react-i18next";
import { getDatabase, ref, child, get } from "firebase/database";
import CustomLargeLoader from "./Components/CustomLargeLoader";
import New404page from "./Pages/New404page";
//import { useNavigate } from "react-router-dom";

function App() {
	const [webstatus, setwebstatus] = useState("unknown");
	const dispatch = useDispatch();
	const { i18n } = useTranslation();
	const changeLanguage = (code) => {
		i18n.changeLanguage(code);
	};
	useEffect(() => {
		const fetchstatus = async () => {
			get(child(ref(getDatabase()), "/bannerimg/banner")).then((snapshot) => {
				let result = snapshot.val();
				dispatch(setBanner({ banner: result }));
			});
			await get(child(ref(getDatabase()), "/checigvalue/status")).then(
				(snapshot) => {
					let result = snapshot.val();
					setwebstatus(result);
				}
			);
		};

		const fetchAuth = async () => {
			const checkAuth = await window.localStorage.getItem("upcradWebAuth");
			const finalrest = checkAuth ? JSON.parse(checkAuth) : null;
			dispatch(setAuth({ isAuth: finalrest }));
		};

		fetchstatus();
		fetchAuth();
		get(child(ref(getDatabase()), "/metalCards")).then((snapshot) => {
			let result = snapshot.val();
			let resultarry = Object.keys(result).map((dat, index) => {
				return { id: dat, ...Object.values(result)[index] };
			});
			dispatch(
				setFootballCards({
					footballCards: resultarry,
				})
			);
		});
		get(child(ref(getDatabase()), "/languages")).then((snapshot) => {
			let result = snapshot.val();
			dispatch(
				setLanguages({
					languages: result,
				})
			);
		});
		get(child(ref(getDatabase()), "/Products")).then((snapshot) => {
			let result = snapshot.val();
			let resultarry = Object.keys(result).map((dat, index) => {
				return { id: dat, ...Object.values(result)[index] };
			});
			dispatch(
				setOtherProducts({
					otherProducts: resultarry,
				})
			);
		});

		const cartdata = window.localStorage.getItem("upcardcartArryUpdated");
		dispatch(
			setCartItems({
				cartItems: JSON.parse(cartdata),
			})
		);
		const cartdata2 = window.localStorage.getItem(
			"upcardcartArryUpdatedExtras"
		);
		dispatch(
			setExtraServices({
				extraServices: JSON.parse(cartdata2),
			})
		);
		console.log("-----------------------welcome");
	}, [dispatch]);

	return (
		<>
			{webstatus === "active" ? (
				<>
					<CustomNavbar changeLanguage={changeLanguage} />
					<FileRoutes />
					<FooterComp />
				</>
			) : webstatus === "unknown" ? (
				<>
					<CustomLargeLoader />
				</>
			) : (
				<>
					<New404page />
				</>
			)}

			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme='colored'
			/>
		</>
	);
}

export default App;
