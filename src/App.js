import CustomNavbar from "./Components/CustomNavbar";
import FooterComp from "./Components/FooterComp";
import FileRoutes from "./Navigation/FileRoutes";

function App() {
	return (
		<>
			<CustomNavbar />
			<FileRoutes />
			<FooterComp />
		</>
	);
}

export default App;
