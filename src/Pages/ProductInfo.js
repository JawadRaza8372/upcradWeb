import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setCartItems } from "../store/projectSlice";
import { toast } from "react-toastify";

const ProductInfo = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { otherProducts, cartItems } = useSelector((state) => state.project);
	const getdata = otherProducts?.filter((dat) => dat.id === id);
	const currentdata = getdata?.length > 0 ? getdata[0] : {};
	const addToCartFunction = () => {
		let newdata = [...cartItems, { pid: id, imgSrc: currentdata?.imgSrc }];
		dispatch(
			setCartItems({
				cartItems: newdata,
			})
		);
		window.localStorage.setItem("upCradCartArry", JSON.stringify(newdata));

		toast.success("Product added to cart", {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
		navigate("/otherProducts");
	};
	const check = cartItems?.filter((dat) => dat.pid === id);
	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					Product Description
				</h1>
			</div>
			<div className='container mb-4'>
				<div className='row gx-0 w-100'>
					<div className='col-12 col-md-6 my-2'>
						<img
							style={{ width: "100%", height: "350px", objectFit: "contain" }}
							src={currentdata?.imgSrc}
							alt={currentdata?.title}
						/>
					</div>
					<div
						className='col-12 col-md-6 my-2'
						style={{
							height: "auto",
							minHeight: "350px",
							paddingLeft: "20px",
						}}>
						<h2 className='mainColor'>{currentdata?.title}</h2>
						<h5 style={{ color: "lightslategray", margin: "20px 0px" }}>
							{currentdata?.description}
						</h5>
						<p
							style={{
								width: "100%",
								textTransform: "capitalize",
							}}
							className='m-0'>
							{currentdata?.price && (
								<span className='mainColor'>
									<b>Price {currentdata?.price}</b>
								</span>
							)}{" "}
							{currentdata?.oldprice && (
								<span
									style={{
										textDecorationLine: "line-through",
										color: "red",
									}}>
									{currentdata?.oldprice}
								</span>
							)}
						</p>
						{check?.length <= 0 ? (
							<button
								onClick={addToCartFunction}
								style={{ marginTop: "20px" }}
								className='btn secondarybg mainColor'>
								Add to Cart
							</button>
						) : (
							<button
								style={{ marginTop: "20px" }}
								className='btn secondarybg mainColor'>
								Added to Cart
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductInfo;
