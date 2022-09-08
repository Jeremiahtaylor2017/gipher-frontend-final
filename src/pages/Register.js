import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

const StyledRegisterPage = styled.div`
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100vh;
		background-color: #f9f6ff;

		img {
			max-width: 65vh;
			height: 100%;
		}

		.container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;

			.express {
				font-size: 4em;
				color: #5833c3;
			}

			.join {
				font-size: 1.5em;
				color: #5833c3;
			}

			.login {
				height: 450px;
				padding: 20px;
				border-radius: 10px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				input {
					height: 50px;
					border-radius: 10px;
					border: 1px solid #5833c3;
					width: 300px;
					padding-left: 20px;
				}
				input:focus {
					outline-color: #5833c3;
					border: 3px solid #5833c3;
				}

				button {
					height: 50px;
					border-radius: 10px;
					border: none;
					background: #5833c3;
					color: #fff;
					border-radius: 27px;
					border: none;
					width: 100%;
					cursor: pointer;
				}

				.register {
					width: 60%;
				}
			}
		}
	}
`;

const Register = (props) => {
	const email = useRef();
	const name = useRef();
	const username = useRef();
	const password = useRef();
	const reEnterPassword = useRef();
	const navigate = useNavigate();

	const handleClick = async (e) => {
		e.preventDefault();
		if (reEnterPassword.current.value !== password.current.value) {
			password.current.setCustomValidity("Passwords don't match");
		} else {
			const user = {
				email: email.current.value,
				name: name.current.value,
				username: username.current.value,
				password: password.current.value,
			};
			try {
				await axios.post("http://localhost:3001/api/auth/register", user);
				navigate("/login");
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<StyledRegisterPage>
			<div>
				<img
					src="https://images.unsplash.com/photo-1558536219-c7b71c4980ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80"
					alt="Media is Everything"
				/>
				<div className="container">
					<h1 className="express">Express Freely</h1>
					<h3 className="join">Join Gipher today.</h3>
					<form onSubmit={handleClick} className="login">
						<input ref={email} type="email" required placeholder="Email" />
						<input ref={name} required placeholder="Name" />
						<input ref={username} required placeholder="Username" />
						<input
							ref={password}
							type="password"
							required
							placeholder="Password"
							minLength="6"
						/>
						<input
							ref={reEnterPassword}
							type="password"
							required
							placeholder="Re-enter Password"
							minLength="6"
						/>
						<button type="submit">Register</button>
						<button className="register">Log In</button>
					</form>
				</div>
			</div>
		</StyledRegisterPage>
	);
};

export default Register;
