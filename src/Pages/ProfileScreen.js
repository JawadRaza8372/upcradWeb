import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../store/authSlice";
import { CustomHook } from "../CustomHook/CustomHook";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
	const { dbTranslator } = CustomHook();
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	if (isAuth) {
		return (
			<div
				className='container my-4 mx-auto allCenter flex-column'
				style={{ minHeight: "70vh" }}>
				<div className='row gx-0 h-100'>
					<h4 className='thirdClr'>
						User Email :{" "}
						<span style={{ textTransform: "lowercase" }}>{isAuth?.email}</span>
					</h4>
				</div>
				<div className='row gx-0 h-100 my-4'>
					<p style={{ fontWeight: "bold" }}>
						User ID :{" "}
						<span style={{ textTransform: "lowercase" }}>{isAuth?.uid}</span>
					</p>
				</div>
				<div className='row gx-0 h-100'>
					<button
						onClick={() => {
							dispatch(setAuth({ isAuth: null }));
							window.localStorage.removeItem("upcradWebAuth");
						}}
						style={{ maxWidth: "150px" }}
						className='btn mainColor secondarybg'>
						{dbTranslator("logout")}
					</button>
				</div>

				{/* <div className='row gx-0'>
					<div className='col-12 col-md-11 allCenter mx-auto'>
						<div className='deliveryFormContainer allCenter flex-column'>
							<span> {dbTranslator("deliveryInfo")}</span>
							<p>{dbTranslator("delivryInfotxt")}</p>
							<form className='customForm' onSubmit={handleDelieryData}>
								<div>
									<label>
										{dbTranslator("enteryor")} {dbTranslator("name")}
									</label>
									<input
										type={"text"}
										required
										placeholder='Your Name'
										value={deliveryInfos?.name}
										onChange={(e) =>
											setdeliveryInfos({
												...deliveryInfos,
												name: e.target.value,
											})
										}
									/>
								</div>

								<div>
									<label>
										{dbTranslator("enteryor")} {dbTranslator("phone")}
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
										{dbTranslator("enteryor")} {dbTranslator("address")}
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

								<button type='submit'>{dbTranslator("save")}</button>
							</form>
						</div> </div></div>*/}
			</div>
		);
	} else {
		navigate("/auth");
		return null;
	}
};

export default ProfileScreen;
