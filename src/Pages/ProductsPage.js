import React from "react";
import { useNavigate } from "react-router-dom";
import FootballCards from "../Components/FootballCards";
import { useSelector } from "react-redux";

const ProductsPage = () => {
	const { footballCards } = useSelector((state) => state.project);

	const navigate = useNavigate();
	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>Products</h1>
			</div>
			<div className='col-12 col-lg-10 mx-auto'>
				<div className='row w-100'>
					{footballCards?.map((dat) => (
						<div key={dat.id} className='col-12 col-sm-6 col-md-4 '>
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
				</div>
			</div>
		</>
	);
};

export default ProductsPage;
