import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FootballCards from "../Components/FootballCards";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { FcClearFilters } from "react-icons/fc";
import { useTranslation } from "react-i18next";

const ProductsPage = () => {
	const { t } = useTranslation();

	const { footballCards, otherProducts } = useSelector(
		(state) => state.project
	);
	const [filterdata, setfilterdata] = useState({
		price: "All",
		title: "",
		productType: "Both",
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
		return typewali;
	};
	const filterNewData2 = (dataArry) => {
		const priceWali = first2cond(dataArry);
		const typewali =
			filterdata?.productType === "Other" || filterdata?.productType === "Both"
				? priceWali
				: [];
		return typewali;
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
							<input
								type='text'
								placeholder={t("pnme")}
								value={filterdata?.title}
								onChange={(e) =>
									setfilterdata({ ...filterdata, title: e.target.value })
								}
							/>

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
									<h6> {t("price")}</h6>
									<label>
										<input
											type='radio'
											value={"Less"}
											checked={filterdata?.price === "Less" ? true : false}
											onChange={(e) =>
												setfilterdata({ ...filterdata, price: e.target.value })
											}
										/>
										{t("less100")}
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
										{t("great100")}
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
										{t("all")}
									</label>
								</div>
							</div>
							<div className='col-12 col-md-6 mb-4'>
								<div className='filterBox'>
									<h6> {t("ptype")}</h6>
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
										{t("scards")}
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
										{t("oprod")}
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
										{t("both")}
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					{t("prdcts")}
				</h1>
			</div>

			<div className='col-12 col-lg-10 mx-auto pb-5 mt-3'>
				<div className='row allCenter justify-content-end w-100 mb-5'>
					<button
						disabled={
							footballCards?.length > 0 && otherProducts?.length > 0
								? false
								: true
						}
						onClick={() => setfilterModel(true)}
						style={{ maxWidth: "150px" }}
						className='btn mainColor secondarybg'>
						{t("fltr")}
					</button>
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
							<p>{t("Nothingness")}</p>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
