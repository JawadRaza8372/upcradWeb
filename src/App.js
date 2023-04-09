import { useEffect } from "react";
import CustomNavbar from "./Components/CustomNavbar";
import FooterComp from "./Components/FooterComp";
import FileRoutes from "./Navigation/FileRoutes";
import { getClubs } from "./Database/Database";
import { useDispatch } from "react-redux";
import { setClubs } from "./store/projectSlice";

function App() {
	const dispatch = useDispatch();
	const getClubsFun = async () => {
		const result = await getClubs();
		dispatch(setClubs({ clubs: result }));
	};
	useEffect(() => {
		getClubsFun();
	}, []);

	return (
		<>
			<CustomNavbar />
			<FileRoutes />
			<FooterComp />
		</>
	);
}

export default App;
