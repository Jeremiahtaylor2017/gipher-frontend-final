import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components";

const StyledPost = styled.div`
	margin-top: 30px;

	div {
		display: flex;
		flex-direction: row;

		.profilePicture {
			align-self: flex-start;
			margin-bottom: 20px;
			margin-right: 10px;
			height: 65px;
			width: 65px;
			border-radius: 50%;
		}

		.container {
			border: 1px solid #eee8ff;
			box-shadow: 0px 0px 5px 5px #fbfaff;
			border-radius: 5px;
			width: 100%;
			display: flex;
			flex-direction: column;

			div {
				display: flex;
				flex-direction: row;
				align-items: baseline;
				width: 90%;
				margin: 0 auto 15px auto;

				.name {
					font-size: 12px;
					margin-right: 10px;
					padding-top: 15px;
					color: #5b5b5b;
					font-weight: bold;
				}

				.username {
					font-size: 10px;
					padding-top: 15px;
					color: #a8a8a8;
				}
			}

			div {
				p {
					color: #5b5b5b;
					font-size: 12px;
				}
			}

			.gif {
				justify-content: center;

				img {
					max-height: 300px;
					object-fit: contain;
				}
			}

			.interactions {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				color: #5833c3;

				span {
					font-size: 12px;
					margin-left: 5px;
				}

				.like:hover {
					cursor: pointer;
					transform: translateY(-5px);
				}
			}
		}
	}
`;

const Post = (props) => {
	return (
		<>
			<StyledPost>
				<div>
					<img
						className="profilePicture"
						src="https://www.seekpng.com/png/full/101-1011748_dwayne-the-rock-johnson-headshot.png"
						alt="The Rock"
					/>
					<div className="container">
						<div>
							<p className="name">Dwayne "The Rock" Johnson</p>
							<p className="username">@therock</p>
						</div>
						<div>
							<p>Ya'll smell that?</p>
						</div>
						<div className="gif">
							<img
								src="https://www.thesun.co.uk/wp-content/uploads/2022/01/the-rock.jpg"
								alt="Smell that?"
							/>
						</div>
						<div className="interactions">
							<FavoriteBorderOutlinedIcon className="like" />
							<span>32</span>
						</div>
					</div>
				</div>
			</StyledPost>
		</>
	);
};

export default Post;
