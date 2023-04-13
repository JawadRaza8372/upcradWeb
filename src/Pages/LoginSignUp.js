import React, { useState } from "react";
import { SignUp, login } from "../Database/Database";
import { setAuth } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const LoginSignUp = () => {
	const dispatch = useDispatch();
	const [loginInfo, setloginInfo] = useState({ email: "", password: "" });
	const [signupInfo, setsignupInfo] = useState({ email: "", password: "" });
	const handleLogin = async (e) => {
		e.preventDefault();
		const result = await login(loginInfo?.email, loginInfo?.password);
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

	return (
		<div className='col-11 col-lg-10 my-4 mx-auto'>
			<div className='row gx-0'>
				<div className='col-12 col-md-6 allCenter mx-auto'>
					<div className='formContainer'>
						<span>Login</span>
						<form className='customForm' onSubmit={handleLogin}>
							<div>
								<label>Enter Your Email</label>
								<input
									type={"email"}
									placeholder='youremail@provider.com'
									value={loginInfo?.email}
									onChange={(e) =>
										setloginInfo({ ...loginInfo, email: e.target.value })
									}
								/>
							</div>
							<div>
								<label>Enter Your Password</label>
								<input
									type={"password"}
									placeholder='*****'
									value={loginInfo?.password}
									onChange={(e) =>
										setloginInfo({ ...loginInfo, password: e.target.value })
									}
								/>
							</div>

							<button type='submit'>Login</button>
						</form>
					</div>
				</div>
				<div className='col-12 col-md-6 allCenter mx-auto'>
					<div className='formContainer'>
						<span>Register</span>
						<form className='customForm' onSubmit={handleSignUp}>
							<div>
								<label>Enter Your Email</label>
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
								<label>Enter Your Password</label>
								<input
									type={"password"}
									placeholder='*****'
									value={signupInfo?.password}
									onChange={(e) =>
										setsignupInfo({ ...signupInfo, password: e.target.value })
									}
								/>
							</div>

							<button type='submit'>Register</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginSignUp;
