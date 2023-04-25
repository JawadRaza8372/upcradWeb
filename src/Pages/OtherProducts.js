import React from "react";
import FootballCards from "../Components/FootballCards";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const OtherProducts = () => {
	const { otherProducts } = useSelector((state) => state.project);
	const { t } = useTranslation();

	const navigate = useNavigate();

	return (
		<div style={{ background: "#f0f0f0" }}>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					{t("oprod")}
				</h1>
			</div>
			<div className='col-12 col-lg-10 mx-auto'>
				<div className='row w-100'>
					{otherProducts?.map((dat) => (
						<div key={dat.id} className='col-12 col-sm-6 col-md-4 mx-auto'>
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
				</div>
			</div>
		</div>
	);
};

export default OtherProducts;
