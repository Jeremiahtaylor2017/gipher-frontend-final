import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import styled from "styled-components";

const StyledCreatePost = styled.div`
	width: 100%;

	::placeholder {
		color: #5833c3;
	}

	.container {
		display: flex;
		flex-direction: row;
		width: 100%;

		img {
			align-self: flex-start;
			margin-bottom: 20px;
			margin-right: 10px;
			height: 65px;
			width: 65px;
			border-radius: 50%;
		}

		form {
			border: 1px solid #eee8ff;
			box-shadow: 0px 0px 5px 5px #fbfaff;
			border-radius: 5px;
			width: 100%;

			label {
				display: flex;
				flex-direction: column;

				textarea {
					padding-left: 30px;
					padding-right: 30px;
					padding-top: 15px;
					resize: none;
					font-family: inherit;
					border: none;
				}
				textarea:focus {
					outline: none;
				}

				.separator {
					width: 90%;
					height: 0;
					opacity: 0.1;
					border: 1px solid #5b5b5b;
					margin: 0 auto;
					margin-bottom: 20px;
				}

				div {
					width: 90%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					margin: 0 auto 15px auto;

					input {
						width: 200px;
						height: 25px;
						padding-left: 10px;
						border-radius: 27px;
						border: 1px solid #eee8ff;
						box-shadow: 0px 0px 5px 5px #fbfaff;
					}
					input:focus {
						outline-color: #5833c3;
					}

					.search {
						display: none;
					}

					.media {
						display: flex;
						flex-direction: row;
						align-items: center;
						margin: 0;
						padding-left: 25px;
						justify-content: flex-start;
						font-size: 14px;
						cursor: pointer;

						span {
							padding-right: 5px;
							color: #5833c3;
						}

						.mediaIcon {
							color: #5833c3;
						}
					}

					.post {
						font-family: inherit;
						width: 86px;
						height: 33px;
						background: #5833c3;
						color: #fff;
						border-radius: 27px;
						border: none;
					}
					.post:hover {
						cursor: pointer;
					}
				}
			}
		}
	}
`;

const CreatePost = (props) => {
	return (
		<>
			<StyledCreatePost>
				<div className="container">
					<img src="https://i.imgur.com/WmRUduL.jpeg" alt="Jeremiah Taylor" />
					<div>
						<form>
							<label>
								<textarea name="status" placeholder="What's new?"></textarea>
								<div className="separator"></div>
								<div>
									<input placeholder="Search Giphy's" />
									<button className="search">Search</button>
									<div className="media">
										<span>Photo or Video</span>
										<PermMediaOutlinedIcon className="mediaIcon" />
									</div>
									<button className="post">Post</button>
								</div>
							</label>
						</form>
					</div>
				</div>
			</StyledCreatePost>
		</>
	);
};

export default CreatePost;
