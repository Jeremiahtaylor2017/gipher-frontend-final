import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import { GiphyFetch } from "@giphy/js-fetch-api";
import { Carousel } from "@giphy/react-components";

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

		.profilePicture {
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
			width: 450px;

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
				.giphyContainer {
					margin: auto;
				}

				.lowerContainer {
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
			.carousel {
				img:hover {
					border: 2px solid #5833c3;
				}
			}
		}
	}
`;

const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);

const CreatePost = (props) => {
	const { user } = useContext(AuthContext);
	const desc = useRef();
	const [keyword, setKeyword] = useState("");
	const [giphy, setGiphy] = useState("");

	const fetchGifs = (offset) => {
		return giphyFetch.search(keyword, { offset, limit: 10 });
	};

	const handleChange = (e) => {
		setKeyword(e.target.value);
	};

	const handleClick = (e) => {
		e.preventDefault();
		setGiphy(e.target.src);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			userId: user._id,
			desc: desc.current.value
		};

		if (giphy) {
			newPost.img = giphy;
		}

		try {
			await axios.post("http://localhost:3001/api/post", newPost);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<StyledCreatePost>
				<div className="container">
					<img
						className="profilePicture"
						src={
							user.profilePicture
								? user.profilePicture
								: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
						}
						alt=""
					/>
					<div>
						<form onSubmit={handleSubmit}>
							<label>
								<textarea
									ref={desc}
									name="desc"
									placeholder="What's new?"
								></textarea>
								<div className="separator"></div>
								{giphy && (
									<div className="giphyContainer">
										<img className="showGiphy" src={giphy} alt="" />
									</div>
								)}
								<div className="lowerContainer">
									<input placeholder="Search Giphy's" onChange={handleChange} />
									<button className="search">Search</button>
									<button type="submit" className="post">
										Post
									</button>
								</div>
							</label>
							<div onClick={handleClick} className="carousel">
								<Carousel
									key={keyword}
									fetchGifs={fetchGifs}
									gifHeight={200}
									gutter={6}
								/>
							</div>
						</form>
					</div>
				</div>
			</StyledCreatePost>
		</>
	);
};

export default CreatePost;
