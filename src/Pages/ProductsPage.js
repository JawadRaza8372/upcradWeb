import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FootballCards from "../Components/FootballCards";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { CustomHook } from "../CustomHook/CustomHook";
import { Modal } from "react-bootstrap";

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
	const CustomFilters = () => {
		return (
			<>
				<div
					style={{
						background: "white",
						padding: "20px",
						borderRadius: "10px",
						width: "100%",
						maxWidth: "320px",
					}}
					className='w-100'>
					<h6 className='my-4'>{dbTranslator("crdsCtag")}</h6>
					<label
						className='d-flex mb-2'
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

					<label
						className='d-flex mb-2'
						onClick={() =>
							setfilterdata({
								...filterdata,
								category: "Other",
							})
						}>
						<div
							className={
								filterdata?.category === "Other" ? "activeLabel" : "notactive"
							}
						/>

						{dbTranslator("basketball")}
					</label>

					<label
						className='d-flex mb-2'
						onClick={() =>
							setfilterdata({
								...filterdata,
								category: "Both",
							})
						}>
						<div
							className={
								filterdata?.category === "Both" ? "activeLabel" : "notactive"
							}
						/>

						{dbTranslator("all")}
					</label>
					<hr />
					<h6 className='my-4'> {dbTranslator("price")}</h6>
					<label
						className='d-flex mb-2'
						onClick={() => setfilterdata({ ...filterdata, price: "Less" })}>
						<div
							className={
								filterdata?.price === "Less" ? "activeLabel" : "notactive"
							}
						/>

						{dbTranslator("less100")}
					</label>
					<label
						className='d-flex mb-2'
						onClick={() => setfilterdata({ ...filterdata, price: "Great" })}>
						<div
							className={
								filterdata?.price === "Great" ? "activeLabel" : "notactive"
							}
						/>
						{dbTranslator("great100")}
					</label>
					<label
						className='d-flex mb-2'
						onClick={() => setfilterdata({ ...filterdata, price: "All" })}>
						<div
							className={
								filterdata?.price === "All" ? "activeLabel" : "notactive"
							}
						/>

						{dbTranslator("all")}
					</label>
					<hr />
					<h6 className='my-4'>
						{dbTranslator("prdcts")}
						{dbTranslator("ptype")}
					</h6>
					<label
						className='d-flex mb-2'
						onClick={() =>
							setfilterdata({
								...filterdata,
								productType: "Card",
							})
						}>
						<div
							className={
								filterdata?.productType === "Card" ? "activeLabel" : "notactive"
							}
						/>

						{dbTranslator("cards")}
					</label>
					<label
						className='d-flex mb-2'
						onClick={() =>
							setfilterdata({
								...filterdata,
								productType: "Other",
							})
						}>
						<div
							className={
								filterdata?.productType === "Other"
									? "activeLabel"
									: "notactive"
							}
						/>

						{dbTranslator("oprod")}
					</label>
					<label
						className='d-flex mb-2'
						onClick={() =>
							setfilterdata({
								...filterdata,
								productType: "Both",
							})
						}>
						<div
							className={
								filterdata?.productType === "Both" ? "activeLabel" : "notactive"
							}
						/>

						{dbTranslator("both")}
					</label>
				</div>
			</>
		);
	};
	return (
		<div style={{ background: "#f0f0f0" }}>
			<Modal fullscreen show={filterModel}>
				<div
					className='allCenter h-100 mx-auto'
					style={{ width: "100%", position: "relative" }}>
					<button
						onClick={() => setfilterModel(false)}
						className='btn nillbtn closeBtnn'
						style={{ top: "10px" }}>
						<AiOutlineClose style={{ marginLeft: "0px" }} fontSize={"30px"} />
					</button>
					<CustomFilters />
				</div>
			</Modal>

			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					{dbTranslator("prdcts")}
				</h1>
			</div>
			<div
				style={{
					position: "sticky",
					top: "94px",
					padding: "20px 10px",
					background: "white",
				}}
				className='row w-100 gx-0 d-flex d-md-none allCenter'>
				<button
					onClick={() => setfilterModel(true)}
					style={{ maxWidth: "250px" }}
					className='btn nillbtn mainColor secondarybg'>
					{dbTranslator("fltr")}
				</button>
			</div>
			<div className='col-12 col-lg-10 mx-auto pb-5 mt-3'>
				<div className='row gx-0 w-100'>
					<div className='col-12 col-md-3 d-none d-md-block'>
						<CustomFilters />
					</div>
					<div className='col-12 col-md-9'>
						<div className='row w-100 gx-0 mb-5'>
							{filterNewData(footballCards) &&
								filterNewData(footballCards)?.map((dat) => (
									<div key={dat.id} className='col-6 col-sm-6 col-md-4 mx-auto'>
										<FootballCards
											onClickFun={() =>
												navigate(`/cardCustomization/${dat.id}`)
											}
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
								<div
									className='allCenter w-100 mb-5'
									style={{ height: "400px" }}>
									<p>{dbTranslator("Nothingness")}</p>
								</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
