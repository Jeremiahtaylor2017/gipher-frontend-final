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
				padding-left: 20px;
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

					h3 {
						color: #5b5b5b;
						font-weight: bold;
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
								src="https://pbs.twimg.com/profile_banners/1201591719336087552/1578508442/1500x500"
								alt=""
							/>
							<img
								src="https://pbs.twimg.com/profile_images/1233508087669100544/Dy9xUml6_400x400.jpg"
								alt=""
							/>
						</div>
						<div className="infoContainer">
							<button>Edit Profile</button>
							<div className="user">
								<h3>JT</h3>
								<p>@tvnnelvision</p>
							</div>
							<div className="info">
								<p>twitch.tv</p>
								<p>Joined September 2022</p>
							</div>
							<div className="following">
								<p>175 Following</p>
								<p>61 Followers</p>
							</div>
						</div>
					</div>
					<Timeline />
				</div>
				<RightSidebar />
			</StyledProfilePage>
		</>
	);
};

export default Profile;
