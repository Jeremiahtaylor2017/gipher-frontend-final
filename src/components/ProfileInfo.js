import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import styled from "styled-components";

const StyledProfileInfo = styled.div`
	div:first-child {
		display: flex;
		flex-direction: row;

		img {
			height: 100px;
			width: 100px;
			border-radius: 50%;
		}

		.userInfo {
			line-height: 1.25;
			margin: auto 10px;
			display: block;

			p:first-child {
				color: #5b5b5b;
				font-size: 16px;
				font-weight: bold;
			}

			p:nth-child(2) {
				color: #a8a8a8;
				font-size: 12px;
			}
		}
	}
`;

const ProfileInfo = ({ suggested }) => {
	const { user } = useContext(AuthContext);

	if (suggested) {
		return (
			<StyledProfileInfo>
				<div>
					<Link to={`/profile/${suggested.username}`}>
						<img
							src={
								suggested.profilePicture ||
								"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
							}
							alt=""
						/>
					</Link>
					<div className="userInfo">
						<p>{suggested.name}</p>
						<p>@{suggested.username}</p>
					</div>
				</div>
			</StyledProfileInfo>
		);
	} else {
		return (
			<StyledProfileInfo>
				<div>
					<Link to={`/profile/${user.username}`}>
						<img
							src={
								user.profilePicture ||
								"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
							}
							alt="Jeremiah Taylor"
						/>
					</Link>
					<div className="userInfo">
						<p>{user.name}</p>
						<p>@{user.username}</p>
					</div>
				</div>
			</StyledProfileInfo>
		);
	}
};

export default ProfileInfo;
