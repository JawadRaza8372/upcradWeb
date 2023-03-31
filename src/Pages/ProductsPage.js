import React from "react";
import { useNavigate } from "react-router-dom";
import FootballCards from "../Components/FootballCards";
import design1 from "../ownassets/design1.png";
import design2 from "../ownassets/design2.png";
import design3 from "../ownassets/design3.png";
import design4 from "../ownassets/design4.png";

const ProductsPage = () => {
	const rawdata = [
		{
			id: 0,
			title: "Design 1 hero",
			imgSrc: design1,
			price: "12$",
			oldprice: "15$",
		},
		{
			id: 1,
			title: "design 2 monster",
			imgSrc: design2,
			price: "12$",
			oldprice: "15$",
		},
		{
			id: 2,
			title: "design 3 conquror",
			imgSrc: design3,
			price: "12$",
			oldprice: "15$",
		},
		{
			id: 3,
			title: "design 4 devil",
			imgSrc: design4,
			price: "12$",
			oldprice: "15$",
		},
		{
			id: 4,
			title: "design 2 monster",
			imgSrc: design2,
			price: "12$",
			oldprice: "15$",
		},
		{
			id: 5,
			title: "design 3 conquror",
			imgSrc: design3,
			price: "12$",
			oldprice: "15$",
		},
		{
			id: 6,
			title: "design 4 devil",
			imgSrc: design4,
			price: "12$",
			oldprice: "15$",
		},
		{
			id: 7,
			title: "design 2 monster",
			imgSrc: design2,
			price: "12$",
			oldprice: "15$",
		},
	];
	const navigate = useNavigate();
	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading mainColor'>Products</h1>
			</div>
			<div className='col-12 col-lg-10 mx-auto'>
				<div className='row w-100'>
					{rawdata?.map((dat) => (
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
