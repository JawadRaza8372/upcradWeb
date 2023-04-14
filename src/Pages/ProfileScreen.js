import React, { useState } from "react";
import { postDeliveryInfo } from "../Database/Database";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryInfo } from "../store/projectSlice";
import { useEffect } from "react";
import { setAuth } from "../store/authSlice";
const ProfileScreen = () => {
	const { isAuth, deliveryInfo } = useSelector((state) => state.auth);
	useEffect(() => {
		if (deliveryInfo) {
			setdeliveryInfos(deliveryInfo);
		}
	}, [deliveryInfo]);

	const dispatch = useDispatch();
	const [deliveryInfos, setdeliveryInfos] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
	});

	const handleDelieryData = async (e) => {
		e.preventDefault();
		const rest = await postDeliveryInfo(deliveryInfos, isAuth?.uid);
		if (rest === "success") {
			toast.success("Delivery information uploaded", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			dispatch(setDeliveryInfo({ deliveryInfo: deliveryInfos }));
		} else {
			toast.error("Internal Server Error", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};
	return (
		<div className='container my-4 mx-auto'>
			<div className='row gx-0'>
				<button
					onClick={() => {
						dispatch(setAuth({ isAuth: null }));
						window.localStorage.removeItem("upcradWebAuth");
					}}
					style={{ maxWidth: "150px" }}
					className='btn mainColor secondarybg'>
					Logout
				</button>
			</div>
			<div className='row gx-0'>
				<div className='col-12 col-md-11 allCenter mx-auto'>
					<div className='deliveryFormContainer allCenter flex-column'>
						<span>Delivery Information</span>
						<p>
							This data is reponsible for delivering your order on right
							location. So,Please fill it properly.
						</p>
						<form className='customForm' onSubmit={handleDelieryData}>
							<div>
								<label>Enter Your Name</label>
								<input
									type={"text"}
									placeholder='Your Name'
									value={deliveryInfos?.name}
									onChange={(e) =>
										setdeliveryInfos({ ...deliveryInfos, name: e.target.value })
									}
								/>
							</div>
							<div>
								<label>Enter Your Email</label>
								<input
									type={"email"}
									placeholder='youremail@provider.com'
									value={deliveryInfos?.email}
									onChange={(e) =>
										setdeliveryInfos({
											...deliveryInfos,
											email: e.target.value,
										})
									}
								/>
							</div>
							<div>
								<label>Enter Your Phone Number</label>
								<input
									type={"number"}
									placeholder='0093XXXXXXXXXXXX'
									value={deliveryInfos?.phone}
									onChange={(e) =>
										setdeliveryInfos({
											...deliveryInfos,
											phone: e.target.value,
										})
									}
								/>
							</div>
							<div>
								<label>Enter Your address</label>
								<input
									type={"text"}
									placeholder='Your address'
									value={deliveryInfos?.address}
									onChange={(e) =>
										setdeliveryInfos({
											...deliveryInfos,
											address: e.target.value,
										})
									}
								/>
							</div>

							<button type='submit'>Save</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
