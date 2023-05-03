import React, { useState } from "react";
import { CustomHook } from "../CustomHook/CustomHook";
import { toast } from "react-toastify";
import { postData } from "../Database/Database";
const ContactUsPage = () => {
	const { dbTranslator } = CustomHook();
	const [contactdata, setcontactdata] = useState({
		name: "",
		email: "",
		msg: "",
	});
	const succmsg = dbTranslator("Message") + " " + dbTranslator("uploaded");
	const errmsg = dbTranslator("intrerr");
	const handleSubmit = async (e) => {
		e.preventDefault();
		const resul = await postData({ ...contactdata }, "contactUs");
		if (resul?.data) {
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
			setcontactdata({
				name: "",
				email: "",
				msg: "",
			});
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
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					{dbTranslator("ContactUs")}
				</h1>
			</div>
			<div className='row gx-0'>
				<div className='col-12 col-md-11 allCenter mx-auto'>
					<div className='deliveryFormContainer allCenter flex-column'>
						<form className='customForm' onSubmit={handleSubmit}>
							<div>
								<label>
									{dbTranslator("enteryor")} {dbTranslator("name")}
								</label>
								<input
									type={"text"}
									placeholder={dbTranslator("name")}
									required
									value={contactdata?.name}
									onChange={(e) =>
										setcontactdata({ ...contactdata, name: e.target.value })
									}
								/>
							</div>
							<div>
								<label>
									{" "}
									{dbTranslator("enteryor")} {dbTranslator("email")}
								</label>
								<input
									type={"email"}
									required
									placeholder='youremail@provider.com'
									value={contactdata?.email}
									onChange={(e) =>
										setcontactdata({
											...contactdata,
											email: e.target.value,
										})
									}
								/>
							</div>
							<div>
								<label>
									{dbTranslator("enteryor")} {dbTranslator("Message")}
								</label>
								<textarea
									type={"text"}
									placeholder={dbTranslator("Message")}
									value={contactdata?.msg}
									required
									onChange={(e) =>
										setcontactdata({
											...contactdata,
											msg: e.target.value,
										})
									}
								/>
							</div>

							<button type='submit'>{dbTranslator("save")}</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUsPage;
