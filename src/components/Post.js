import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const StyledPost = styled.div`
	margin-top: 30px;

	.wrapper {
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
	const [likes, setLikes] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});
	const { user: currentUser } = useContext(AuthContext);

	const likeHandler = () => {
		try {
			axios.put(`http://localhost:3001/api/post/${post._id}/like`, {
				userId: currentUser._id,
			});
		} catch (error) {}
		setLikes(isLiked ? likes - 1 : likes + 1);
		setIsLiked(!isLiked);
	};

	useEffect(() => {
		setIsLiked(post.likes.includes(currentUser._id));
	}, [currentUser._id, post.likes]);

	useEffect(() => {
		const fetchUser = async () => {
			const userURL = `http://localhost:3001/api/users?userId=${post.userId}`;
			const res = await axios.get(userURL);
			setUser(res.data);
		};
		fetchUser();
	}, [post.userId]);

	return (
		<>
			<StyledPost>
				<div className="wrapper">
					<Link to={`profile/${user.username}`}>
						<img
							className="profilePicture"
							src={
								user.profilePicture
									? user.profilePicture
									: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
							}
							alt="The Rock"
						/>
					</Link>
					<div className="container">
						<div>
							<p className="name">{user.name}</p>
							<p className="username">@{user.username}</p>
							<p className="time">&#183; {format(post.createdAt)}</p>
						</div>
						<div>
							<p>{post?.desc}</p>
						</div>
						<div className="gif">
							<img src={post.img} alt="Smell that?" />
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
