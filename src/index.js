import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
import "./i18n.js";
import CustomLargeLoader from "./Components/CustomLargeLoader";
import "./fonsts/DINPro-CondensedBold.ttf";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Suspense fallback={<CustomLargeLoader />}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</Suspense>
);

reportWebVitals();
