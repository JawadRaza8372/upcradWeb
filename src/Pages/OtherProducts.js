import React from "react";
import FootballCards from "../Components/FootballCards";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const OtherProducts = () => {
	const { otherProducts } = useSelector((state) => state.project);

	const navigate = useNavigate();

	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					Other Products
				</h1>
			</div>
			<div className='col-12 col-lg-10 mx-auto'>
				<div className='row w-100'>
					{otherProducts?.map((dat) => (
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
				</div>
			</div>
		</>
	);
};

export default OtherProducts;
