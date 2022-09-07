import { useContext } from "react";

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

const ProfileInfo = (props) => {
	const { user } = useContext(AuthContext);

	return (
		<StyledProfileInfo>
			<div>
				<img
					src={
						user.profilePicture
							? user.profilePicture
							: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
					}
					alt="Jeremiah Taylor"
				/>
				<div className="userInfo">
					<p>{user.name}</p>
					<p>@{user.username}</p>
				</div>
			</div>
		</StyledProfileInfo>
	);
};

export default ProfileInfo;
