import React, { useState, useEffect } from "react";
import { SignUp, login } from "../Database/Database";
import { setAuth } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CustomHook } from "../CustomHook/CustomHook";
import { useNavigate } from "react-router-dom";

const LoginSignUp = () => {
	const { dbTranslator } = CustomHook();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loginInfoEmail, setloginInfoEmail] = useState("");
	const [loginInfoPaswd, setloginInfoPaswd] = useState("");

	const [signupInfo, setsignupInfo] = useState({ email: "", password: "" });
	const handleLogin = async (e) => {
		e.preventDefault();
		const result = await login(loginInfoEmail, loginInfoPaswd);
		if (result?.data) {
			dispatch(setAuth({ isAuth: result?.data }));
			window.localStorage.setItem(
				"upcradWebAuth",
				JSON.stringify(result?.data)
			);
		} else {
			toast.error(`${result?.error}`, {
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
	const handleSignUp = async (e) => {
		e.preventDefault();
		const result = await SignUp(signupInfo?.email, signupInfo?.password);
		if (result?.data) {
			dispatch(setAuth({ isAuth: result?.data }));
			window.localStorage.setItem(
				"upcradWebAuth",
				JSON.stringify(result?.data)
			);
		} else {
			toast.error(`${result?.error}`, {
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
	const { isAuth } = useSelector((state) => state.auth);
	useEffect(() => {
		if (isAuth?.uid) {
			navigate("/profile");
		}
	});

	if (isAuth?.uid) {
		navigate("/profile");
		return null;
	} else {
		return (
			<div className='col-11 col-lg-10 my-4 mx-auto'>
				<div className='row gx-0'>
					<div className='col-12 col-md-6 allCenter mx-auto'>
						<div className='formContainer'>
							<span>{dbTranslator("login")}</span>
							<form className='customForm' onSubmit={handleLogin}>
								<div>
									<label>
										{dbTranslator("enteryor")} {dbTranslator("email")}
									</label>
									<input
										type={"email"}
										placeholder='youremail@provider.com'
										value={loginInfoEmail}
										onChange={(e) => {
											setloginInfoEmail(e.target.value);
										}}
									/>
								</div>
								<div>
									<label>
										{dbTranslator("enteryor")} {dbTranslator("pass")}
									</label>
									<input
										type={"password"}
										placeholder='*****'
										value={loginInfoPaswd}
										onChange={(e) => {
											setloginInfoPaswd(e.target.value);
										}}
									/>
								</div>

								<button type='submit'>{dbTranslator("login")}</button>
							</form>
						</div>
					</div>
					<div className='col-12 col-md-6 allCenter mx-auto'>
						<div className='formContainer'>
							<span>{dbTranslator("regis")}</span>
							<form className='customForm' onSubmit={handleSignUp}>
								<div>
									<label>
										{dbTranslator("enteryor")} {dbTranslator("email")}
									</label>
									<input
										type={"email"}
										placeholder='youremail@provider.com'
										value={signupInfo?.email}
										onChange={(e) =>
											setsignupInfo({ ...signupInfo, email: e.target.value })
										}
									/>
								</div>
								<div>
									<label>
										{dbTranslator("enteryor")} {dbTranslator("pass")}
									</label>
									<input
										type={"password"}
										placeholder='*****'
										value={signupInfo?.password}
										onChange={(e) =>
											setsignupInfo({ ...signupInfo, password: e.target.value })
										}
									/>
								</div>

								<button type='submit'>{dbTranslator("regis")}</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default LoginSignUp;
