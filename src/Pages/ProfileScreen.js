import React, { useState } from "react";
import { getDeliveryInfo, postDeliveryInfo } from "../Database/Database";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryInfo } from "../store/projectSlice";
import { useEffect } from "react";
import { setAuth } from "../store/authSlice";
import { useTranslation } from "react-i18next";

const ProfileScreen = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const { isAuth } = useSelector((state) => state.auth);

	useEffect(() => {
		const getDelivery = async () => {
			const devRes = await getDeliveryInfo(isAuth?.uid);
			if (devRes?.data) {
				setdeliveryInfos(devRes?.data);
				dispatch(setDeliveryInfo({ deliveryInfo: devRes?.data }));
			}
		};
		if (isAuth?.uid) {
			getDelivery();
		}
	}, [isAuth?.uid, dispatch]);

	const [deliveryInfos, setdeliveryInfos] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
	});
	const succmsg = t("deliveryInfo") + " " + t("uploaded");
	const errmsg = t("intrerr");
	const handleDelieryData = async (e) => {
		e.preventDefault();
		const rest = await postDeliveryInfo(deliveryInfos, isAuth?.uid);
		if (rest === "success") {
			toast.success(`${succmsg}`, {
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
			toast.error(`${errmsg}`, {
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
					{t("logout")}
				</button>
			</div>
			<div className='row gx-0'>
				<div className='col-12 col-md-11 allCenter mx-auto'>
					<div className='deliveryFormContainer allCenter flex-column'>
						<span> {t("deliveryInfo")}</span>
						<p>{t("delivryInfotxt")}</p>
						<form className='customForm' onSubmit={handleDelieryData}>
							<div>
								<label>
									{t("enteryor")} {t("name")}
								</label>
								<input
									type={"text"}
									required
									placeholder='Your Name'
									value={deliveryInfos?.name}
									onChange={(e) =>
										setdeliveryInfos({ ...deliveryInfos, name: e.target.value })
									}
								/>
							</div>
							<div>
								<label>
									{" "}
									{t("enteryor")} {t("email")}
								</label>
								<input
									type={"email"}
									required
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
								<label>
									{t("enteryor")} {t("phone")}
								</label>
								<input
									type={"number"}
									placeholder='0093XXXXXXXXXXXX'
									value={deliveryInfos?.phone}
									required
									onChange={(e) =>
										setdeliveryInfos({
											...deliveryInfos,
											phone: e.target.value,
										})
									}
								/>
							</div>
							<div>
								<label>
									{t("enteryor")} {t("address")}
								</label>
								<input
									type={"text"}
									placeholder='Your address'
									required
									value={deliveryInfos?.address}
									onChange={(e) =>
										setdeliveryInfos({
											...deliveryInfos,
											address: e.target.value,
										})
									}
								/>
							</div>

							<button type='submit'>{t("save")}</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
