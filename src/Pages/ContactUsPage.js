import React from "react";
import { CustomHook } from "../CustomHook/CustomHook";
// import { toast } from "react-toastify";
// import { postData } from "../Database/Database";
import {
	AiOutlineMail,
	AiOutlineInstagram,
	AiFillYoutube,
	AiOutlineTwitter,
} from "react-icons/ai";
import { FaTiktok, FaFacebook } from "react-icons/fa";
const ContactUsPage = () => {
	const { dbTranslator } = CustomHook();
	// const [contactdata, setcontactdata] = useState({
	// 	name: "",
	// 	email: "",
	// 	msg: "",
	// });
	const contacthandle = [
		{
			symbol: <AiOutlineMail />,
			text: "info@upcards.net",
			onClickFun: () => {},
		},
		{ symbol: <AiFillYoutube />, text: "@upcardsfc", onClickFun: () => {} },
		{
			symbol: <AiOutlineInstagram />,
			text: "@upcardsfc",
			onClickFun: () => {},
		},
		{ symbol: <AiOutlineTwitter />, text: "@upcardsfc", onClickFun: () => {} },
		{ symbol: <FaFacebook />, text: "Upcards FC", onClickFun: () => {} },
		{ symbol: <FaTiktok />, text: "@upcardsfc", onClickFun: () => {} },
	];
	// const succmsg = dbTranslator("Message") + " " + dbTranslator("uploaded");
	// const errmsg = dbTranslator("intrerr");
	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const resul = await postData({ ...contactdata }, "contactUs");
	// 	if (resul?.data) {
	// 		toast.success(`${succmsg}`, {
	// 			position: "bottom-right",
	// 			autoClose: 5000,
	// 			hideProgressBar: false,
	// 			closeOnClick: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 			theme: "light",
	// 		});
	// 		setcontactdata({
	// 			name: "",
	// 			email: "",
	// 			msg: "",
	// 		});
	// 	} else {
	// 		toast.error(`${errmsg}`, {
	// 			position: "bottom-right",
	// 			autoClose: 5000,
	// 			hideProgressBar: false,
	// 			closeOnClick: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 			theme: "light",
	// 		});
	// 	}
	// };
	return (
		<>
			<div className='topHeadingDiv'>
				<h1 className='responsiveHeading text-center mainColor'>
					{dbTranslator("ContactUs")}
				</h1>
			</div>
			<div className='row gx-0' style={{ minHeight: "60vh" }}>
				<div className='col-12 col-md-11 allCenter mx-auto'>
					<div className='row w-100 gx-0'>
						{contacthandle.map((dat, index) => (
							<div
								key={index}
								className='col-12 col-md-6 col-lg-4 mx-auto mb-3'>
								<div className='allCenter flex-column contactCRD boxShadowDiv'>
									{dat?.symbol}
									<span>{dat?.text}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUsPage;
