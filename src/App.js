import { useEffect } from "react";
import CustomNavbar from "./Components/CustomNavbar";
import FooterComp from "./Components/FooterComp";
import FileRoutes from "./Navigation/FileRoutes";
import { useDispatch } from "react-redux";
import {
	setCartItems,
	setClubs,
	setFootballCards,
	setOtherProducts,
} from "./store/projectSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAuth } from "./store/authSlice";
import { collection, getDocs } from "firebase/firestore";
import { dbs } from "./Database/Database";
import { useTranslation } from "react-i18next";
//import { useNavigate } from "react-router-dom";

function App() {
	const dispatch = useDispatch();
	const { i18n } = useTranslation();
	const changeLanguage = (code) => {
		i18n.changeLanguage(code);
	};
	const fetchAuth = async () => {
		const checkAuth = await window.localStorage.getItem("upcradWebAuth");
		const finalrest = checkAuth ? JSON.parse(checkAuth) : null;
		dispatch(setAuth({ isAuth: finalrest }));
	};
	useEffect(() => {
		fetchAuth();
		getDocs(collection(dbs, "FootballClubs")).then((projectSnaps) => {
			dispatch(
				setClubs({
					clubs: projectSnaps.docs.map((doc) => {
						return { id: doc?.id, ...doc.data() };
					}),
				})
			);
		});
		getDocs(collection(dbs, `Products`)).then((projectSnaps) => {
			dispatch(
				setOtherProducts({
					otherProducts: projectSnaps.docs.map((doc) => {
						return { id: doc?.id, ...doc.data() };
					}),
				})
			);
		});
		getDocs(collection(dbs, `metalCards`)).then((projectSnaps) => {
			dispatch(
				setFootballCards({
					footballCards: projectSnaps.docs.map((doc) => {
						return { id: doc?.id, ...doc.data() };
					}),
				})
			);
		});
		const cartdata = window.localStorage.getItem("upCradCartArry");
		dispatch(
			setCartItems({
				cartItems: JSON.parse(cartdata),
			})
		);
	});

	return (
		<>
			<CustomNavbar changeLanguage={changeLanguage} />

			<FileRoutes />
			<FooterComp />
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
