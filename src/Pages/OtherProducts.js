import React from "react";
import prosuct1 from "../ownassets/products1.png";
import prosuct2 from "../ownassets/products2.png";
import FootballCards from "../Components/FootballCards";
import { useNavigate } from "react-router-dom";
const OtherProducts = () => {
	const rawdata2 = [
		{
			id: 0,
			title: "game 1 hero",
			imgSrc: prosuct1,
			price: "12$",
		},
		{
			id: 1,
			title: "game 2 monster",
			imgSrc: prosuct2,
			price: "12$",
		},
		{
			id: 2,
			title: "Game 3 conquror",
			imgSrc: prosuct1,
			price: "12$",
		},
		{
			id: 3,
			title: "Game 4 devil",
			imgSrc: prosuct2,
			price: "12$",
		},
		{
			id: 4,
			title: "game 5 monster",
			imgSrc: prosuct2,
			price: "12$",
		},
		{
			id: 5,
			title: "Game 6 conquror",
			imgSrc: prosuct1,
			price: "12$",
		},
	];
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
					{rawdata2?.map((dat) => (
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

export default OtherProducts;
