import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FootballCards from "../Components/FootballCards";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { FcClearFilters } from "react-icons/fc";
import { CustomHook } from "../CustomHook/CustomHook";

const ProductsPage = () => {
	const { dbTranslator } = CustomHook();

	const { footballCards, otherProducts } = useSelector(
		(state) => state.project
	);
	const [filterdata, setfilterdata] = useState({
		price: "All",
		title: "",
		productType: "Both",
		category: "Both",
	});
	const first2cond = (dataArry) => {
		const titlewala =
			filterdata?.title?.length > 0
				? dataArry?.filter(
						(dat) =>
							dat.title
								?.toLowerCase()
								?.includes(filterdata?.title?.toLowerCase()) ||
							dat.title?.toLowerCase() === filterdata?.title?.toLowerCase()
				  )
				: dataArry;
		const priceWali =
			filterdata?.price === "Less"
				? titlewala?.filter((dat) => parseInt(dat?.price) < 100)
				: filterdata?.price === "Great"
				? titlewala?.filter((dat) => parseInt(dat?.price) > 100)
				: titlewala;
		return priceWali;
	};
	const filterNewData = (dataArry) => {
		const priceWali = first2cond(dataArry);
		const typewali =
			filterdata?.productType === "Card" || filterdata?.productType === "Both"
				? priceWali
				: [];
		const smalledategory = filterdata?.category?.toLowerCase();
		if (smalledategory === "football") {
			return typewali?.filter((dat) => dat?.category === "football");
		} else if (smalledategory !== "football" && smalledategory !== "both") {
			return typewali?.filter((dat) => dat?.category !== "football");
		} else {
			return typewali;
		}
	};
	const filterNewData2 = (dataArry) => {
		const priceWali = first2cond(dataArry);
		const typewali =
			filterdata?.productType === "Other" || filterdata?.productType === "Both"
				? priceWali
				: [];
		const smalledategory = filterdata?.category?.toLowerCase();
		if (smalledategory === "football") {
			return [];
		} else if (smalledategory !== "football" && smalledategory !== "both") {
			return [];
		} else {
			return typewali;
		}
	};
	const [filterModel, setfilterModel] = useState(false);
	const navigate = useNavigate();

	return (
		<div style={{ background: "#f0f0f0" }}>
			{filterModel && (
				<div className='modalContainer'>
					<button
						onClick={() => setfilterModel(false)}
						className='btn nillbtn closeBtnn'>
						<AiOutlineClose style={{ marginLeft: "0px" }} fontSize={"30px"} />
					</button>
					<div className='container firldsContainer'>
						<div className='row w-100 my-4 inputContainer'>
							{/* <input
								type='text'
								hidden
								placeholder={dbTranslator("pnme")}
								value={filterdata?.title}
								onChange={(e) =>
									setfilterdata({ ...filterdata, title: e.target.value })
								}
							/> */}
							<div />
							<button
								className='clearbtnFilter'
								onClick={() =>
									setfilterdata({
										title: "",
										productType: "Both",
										price: "All",
									})
								}>
								<FcClearFilters
									style={{ marginLeft: "0px" }}
									fontSize={"30px"}
									className='mainColor'
								/>
							</button>
						</div>

						<div className='row w-100'>
							<div className='col-12 col-md-6 mb-4'>
								<div className='filterBox'>
									<h6> {dbTranslator("price")}</h6>
									<label>
										<div className='' />
										<input
											type='radio'
											value={"Less"}
											checked={filterdata?.price === "Less" ? true : false}
											onChange={(e) =>
												setfilterdata({ ...filterdata, price: e.target.value })
											}
										/>
										{dbTranslator("less100")}
									</label>
									<label>
										<input
											type='radio'
											value={"Great"}
											checked={filterdata?.price === "Great" ? true : false}
											onChange={(e) =>
												setfilterdata({ ...filterdata, price: e.target.value })
											}
										/>
										{dbTranslator("great100")}
									</label>
									<label>
										<input
											type='radio'
											value={"All"}
											checked={filterdata?.price === "All" ? true : false}
											onChange={(e) =>
												setfilterdata({ ...filterdata, price: e.target.value })
											}
										/>
										{dbTranslator("all")}
									</label>
								</div>
							</div>
							<div className='col-12 col-md-6 mb-4'>
								<div className='filterBox'>
									<h6>
										{dbTranslator("prdcts")}
										{dbTranslator("ptype")}
									</h6>
									<label>
										<input
											type='radio'
											value={"Card"}
											checked={
												filterdata?.productType === "Card" ? true : false
											}
											onChange={(e) =>
												setfilterdata({
													...filterdata,
													productType: e.target.value,
												})
											}
										/>
										{dbTranslator("cards")}
									</label>
									<label>
										<input
											type='radio'
											value={"Other"}
											checked={
												filterdata?.productType === "Other" ? true : false
											}
											onChange={(e) =>
												setfilterdata({
													...filterdata,
													productType: e.target.value,
												})
											}
										/>
										{dbTranslator("oprod")}
									</label>
									<label>
										<input
											type='radio'
											value={"Both"}
											checked={
												filterdata?.productType === "Both" ? true : false
											}
											onChange={(e) =>
												setfilterdata({
													...filterdata,
													productType: e.target.value,
												})
											}
										/>
										{dbTranslator("both")}
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					{dbTranslator("prdcts")}
				</h1>
			</div>

			<div className='col-12 col-lg-10 mx-auto pb-5 mt-3'>
				<div className='row allCenter justify-content-center gx-0 w-100 mb-5'>
					<div className='col-12 h-100 col-md-10 allCenter'>
						<div
							className='requiredfilter allCenter row gx-0 mx-auto'
							style={{ width: "90%" }}>
							<div className='col-8 col-md-4'>
								<label
									onClick={() =>
										setfilterdata({
											...filterdata,
											category: "Football",
										})
									}>
									<div
										className={
											filterdata?.category === "Football"
												? "activeLabel"
												: "notactive"
										}
									/>

									{dbTranslator("scards")}
								</label>
							</div>
							<div className='col-4 col-md-4'>
								<label
									onClick={() =>
										setfilterdata({
											...filterdata,
											category: "Other",
										})
									}>
									<div
										className={
											filterdata?.category === "Other"
												? "activeLabel"
												: "notactive"
										}
									/>

									{dbTranslator("basketball")}
								</label>
							</div>

							<div className='col-12 col-md-4'>
								<label
									onClick={() =>
										setfilterdata({
											...filterdata,
											category: "Both",
										})
									}>
									<div
										className={
											filterdata?.category === "Both"
												? "activeLabel"
												: "notactive"
										}
									/>

									{dbTranslator("all")}
								</label>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-2 h-100 allCenter'>
						<button
							disabled={
								footballCards?.length > 0 && otherProducts?.length > 0
									? false
									: true
							}
							onClick={() => setfilterModel(true)}
							style={{ maxWidth: "250px" }}
							className='btn mainColor secondarybg'>
							{dbTranslator("fltr")}
						</button>
					</div>
				</div>

				<div className='row w-100 gx-0 mb-5'>
					{filterNewData(footballCards) &&
						filterNewData(footballCards)?.map((dat) => (
							<div key={dat.id} className='col-12 col-sm-6 col-md-4 mx-auto'>
								<FootballCards
									onClickFun={() => navigate(`/cardCustomization/${dat.id}`)}
									isbestSeller={true}
									title={dat.title}
									sorce={dat.imgSrc}
									price={dat.price}
									oldprice={dat.oldprice}
								/>
							</div>
						))}
					{filterNewData2(otherProducts) &&
						filterNewData2(otherProducts)?.map((dat) => (
							<div key={dat.id} className='col-12 col-sm-6 col-md-4 '>
								<FootballCards
									isLargeImg={true}
									onClickFun={() => navigate(`/productInfo/${dat.id}`)}
									title={dat.title}
									sorce={dat.imgSrc}
									price={dat.price}
									oldprice={dat.oldprice}
								/>
							</div>
						))}
					{filterNewData(footballCards)?.length <= 0 &&
					filterNewData2(otherProducts)?.length <= 0 ? (
						<div className='allCenter w-100 mb-5' style={{ height: "400px" }}>
							<p>{dbTranslator("Nothingness")}</p>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
