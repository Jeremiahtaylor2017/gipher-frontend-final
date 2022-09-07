import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import LeftSidebar from "../components/LeftSidebar";
import Timeline from "../components/Timeline";
import RightSidebar from "../components/RightSidebar";

import styled from "styled-components";

const StyledProfilePage = styled.div`
	display: flex;
	flex-direction: row;

	.profile {
		width: 100%;
		padding-top: 10px;
		margin-bottom: 10px;
		overflow: auto;
		.container {
			div:first-child {
				color: #5b5b5b;

				h3 {
					font-weight: bold;
				}
			}

			.images {
				height: 320px;
				position: relative;

				img:first-child {
					width: 100%;
					height: 250px;
					object-fit: cover;
				}

				img:nth-child(2) {
					width: 150px;
					height: 150px;
					border-radius: 50%;
					object-fit: cover;
					position: absolute;
					left: 0;
					top: 175px;
					margin-left: 25px;
					border: 3px solid #5833c3;
				}
			}

			.infoContainer {
				box-shadow: 0px 0px 5px 5px #fbfaff;
				border-radius: 5px;
				margin-left: 5px;
				margin-right: 5px;
				margin-top: 15px;

				button {
					font-family: inherit;
					width: 86px;
					height: 33px;
					background: #5833c3;
					color: #fff;
					border-radius: 27px;
					border: none;
					margin-left: 20px;
					margin-top: 10px;
					float: right;
					margin-right: 20px;
				}
				button:hover {
					cursor: pointer;
				}

				.user {
					padding-left: 20px;
					height: 50px;
					margin-top: 10px;
					display: flex;
					align-items: center;

					h3 {
						color: #5b5b5b;
						font-weight: bold;
						margin-right: 10px;
					}

					p {
						color: #a8a8a8;
						font-size: 12px;
					}
				}

				.info {
					padding-left: 20px;
					display: flex;
					flex-direction: row;

					p:first-child {
						margin-right: 20px;
						color: #5b5b5b;
					}

					p:nth-child(2) {
						color: #a8a8a8;
					}
				}

				.following {
					display: flex;
					flex-direction: row;
					padding-left: 20px;
					margin-top: 10px;
					color: #5b5b5b;

					p:first-child {
						margin-right: 20px;
					}
				}
			}
		}
	}
`;

const Profile = (props) => {
	const [user, setUser] = useState({});
	const username = useParams().username;

	useEffect(() => {
		const fetchUser = async () => {
			const userURL = `http://localhost:3001/api/users?username=${username}`;
			const res = await axios.get(userURL);
			setUser(res.data);
		};
		fetchUser();
	}, [username]);

	return (
		<>
			<StyledProfilePage>
				<LeftSidebar />
				<div className="profile">
					<div className="container">
						<div>
							<h3>JT</h3>
							<p>700 Giphers</p>
						</div>
						<div className="images">
							<img
								src={
									user.coverPicture ||
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCpXpQb1Cs0Cpn0BrQb6VIb8-zxtV1B_H-LhOIE-U&s"
								}
								alt=""
							/>
							<img
								src={
									user.profilePicture ||
									"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
								}
								alt=""
							/>
						</div>
						<div className="infoContainer">
							<button>Edit Profile</button>
							<div className="user">
								<h3>{user.name}</h3>
								<p>@{user.username}</p>
							</div>
							<div className="info">
								<p>{user.bio ? user.bio : "No bio yet"}</p>
								<p>Joined September 2022</p>
							</div>
							<div className="following">
								<p>175 Following</p>
								<p>61 Followers</p>
							</div>
						</div>
					</div>
					<Timeline username={username} />
				</div>
				<RightSidebar />
			</StyledProfilePage>
		</>
	);
};

export default Profile;
