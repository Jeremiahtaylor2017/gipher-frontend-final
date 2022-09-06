import { Users } from "../dummyData";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components";
import { useState } from "react";

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

				.time {
					font-size: 10px;
					padding-top: 15px;
					color: #a8a8a8;
					margin-left: 5px;
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

const Post = ({ post }) => {
	const [likes, setLikes] = useState(post.likes);
	const [isLiked, setIsLiked] = useState(false);

	const likeHandler = () => {
		setLikes(isLiked ? likes - 1 : likes + 1);
		setIsLiked(!isLiked);
	};

	return (
		<>
			<StyledPost>
				<div>
					<img
						className="profilePicture"
						src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
						alt="The Rock"
					/>
					<div className="container">
						<div>
							<p className="name">
								{Users.filter((u) => u.id === post.userId)[0].name}
							</p>
							<p className="username">
								{Users.filter((u) => u.id === post.userId)[0].username}
							</p>
							<p className="time">&#183; {post.date}</p>
						</div>
						<div>
							<p>{post?.desc}</p>
						</div>
						<div className="gif">
							<img src={post?.photo} alt="Smell that?" />
						</div>
						<div className="interactions">
							<FavoriteBorderOutlinedIcon
								onClick={likeHandler}
								className="like"
							/>
							<span>{likes}</span>
						</div>
					</div>
				</div>
			</StyledPost>
		</>
	);
};

export default Post;
