import styled from "styled-components";

const StyledSplashPage = styled.div`
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
				height: 300px;
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

				span {
					color: #5833c3;
				}
			}
		}
	}
`;

const Splash = (props) => {
	return (
		<StyledSplashPage>
			<div>
				<img
					src="https://images.unsplash.com/photo-1558536219-c7b71c4980ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80"
					alt="Media is Everything"
				/>
				<div className="container">
					<h1 className="express">Express Freely</h1>
					<h3 className="join">Join Gipher today.</h3>
					<div className="login">
						<input placeholder="Email" />
						<input placeholder="Password" />
						<button>Login In</button>
						<span>Forgot Password?</span>
						<button className="register">Create New Account</button>
					</div>
				</div>
			</div>
		</StyledSplashPage>
	);
};

export default Splash;