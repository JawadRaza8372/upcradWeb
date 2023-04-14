import { useEffect } from "react";
import CustomNavbar from "./Components/CustomNavbar";
import FooterComp from "./Components/FooterComp";
import FileRoutes from "./Navigation/FileRoutes";
import { getClubs, getData } from "./Database/Database";
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
//import { useNavigate } from "react-router-dom";

function App() {
	const dispatch = useDispatch();
	// const navigate = useNavigate();
	// const { isAuth } = useSelector((state) => state.auth);
	const fetchAuth = async () => {
		const checkAuth = await window.localStorage.getItem("upcradWebAuth");
		const finalrest = checkAuth ? JSON.parse(checkAuth) : null;
		dispatch(setAuth({ isAuth: finalrest }));
	};
	const dataFetchFunction = async () => {};
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

	// useEffect(() => {
	// 	const getDelivery = async () => {
	// 		const devRes = await getDeliveryInfo(isAuth?.uid);
	// 		console.log("kya hy datat", devRes);
	// 		if (devRes?.data) {
	// 			dispatch(setDeliveryInfo({ deliveryInfo: devRes?.data }));
	// 		} else {
	// 			navigate("/profile");
	// 		}
	// 	};
	// 	if (isAuth?.uid) {
	// 		getDelivery();
	// 	}
	// }, [isAuth?.uid]);

	return (
		<>
			<CustomNavbar />
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
