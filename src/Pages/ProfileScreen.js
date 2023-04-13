import React, { useState } from "react";
import { postDeliveryInfo } from "../Database/Database";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const ProfileScreen = () => {
	const { isAuth } = useSelector((state) => state.auth);

	const [deliveryInfo, setdeliveryInfo] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
	});

	const handleDelieryData = async (e) => {
		e.preventDefault();
		const rest = await postDeliveryInfo(deliveryInfo, isAuth?.uid);
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
									value={deliveryInfo?.name}
									onChange={(e) =>
										setdeliveryInfo({ ...deliveryInfo, name: e.target.value })
									}
								/>
							</div>
							<div>
								<label>Enter Your Email</label>
								<input
									type={"email"}
									placeholder='youremail@provider.com'
									value={deliveryInfo?.email}
									onChange={(e) =>
										setdeliveryInfo({ ...deliveryInfo, email: e.target.value })
									}
								/>
							</div>
							<div>
								<label>Enter Your Phone Number</label>
								<input
									type={"number"}
									placeholder='0093XXXXXXXXXXXX'
									value={deliveryInfo?.phone}
									onChange={(e) =>
										setdeliveryInfo({ ...deliveryInfo, email: e.target.value })
									}
								/>
							</div>
							<div>
								<label>Enter Your address</label>
								<input
									type={"text"}
									placeholder='Your address'
									value={deliveryInfo?.address}
									onChange={(e) =>
										setdeliveryInfo({
											...deliveryInfo,
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
