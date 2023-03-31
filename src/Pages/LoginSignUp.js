import React from "react";

const LoginSignUp = () => {
	return (
		<div className='col-11 col-lg-10 my-4 mx-auto'>
			<div className='row gx-0'>
				<div className='col-12 col-md-6 allCenter mx-auto'>
					<div className='formContainer'>
						<span>Login</span>
						<form className='customForm'>
							<div>
								<label>Enter Your Email</label>
								<input type={"email"} placeholder='youremail@provider.com' />
							</div>
							<div>
								<label>Enter Your Password</label>
								<input type={"password"} placeholder='*****' />
							</div>

							<button type='submit'>Login</button>
						</form>
					</div>
				</div>
				<div className='col-12 col-md-6 allCenter mx-auto'>
					<div className='formContainer'>
						<span>Register</span>
						<form className='customForm'>
							<div>
								<label>Enter Your Email</label>
								<input type={"email"} placeholder='youremail@provider.com' />
							</div>
							<div>
								<label>Enter Your Password</label>
								<input type={"password"} placeholder='*****' />
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
