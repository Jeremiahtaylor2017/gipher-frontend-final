import { Link } from "react-router-dom";
import axios from "axios";

import ProfileInfo from "./ProfileInfo";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const StyledSidebar = styled.div`
	background-color: #f9f6ff;
	min-width: 300px;
	height: 100vh;
	position: sticky;
	top: 0;

	h1 {
		color: #5833c3;
		padding-top: 20px;
		padding-left: 30px;
		margin-bottom: 30px;
		font-size: 28px;
	}

	.profileInfo {
		padding-left: 30px;
	}

	div {
		ul {
			list-style: none;
			margin-top: 30px;

			li {
				color: #a8a8a8;
				line-height: 50px;

				div {
					height: 100%;
					padding-left: 30px;
					font-size: 18px;
					display: flex;
					flex-direction: row;
					align-items: center;

					svg {
						margin-right: 10px;
					}
				}
				div:hover {
					color: #5833c3;
					background-color: #eee8ff;
					cursor: pointer;
				}
			}
		}
	}
`;

const LeftSidebar = (props) => {
	const { user } = useContext(AuthContext);

	const handleDelete = async () => {
		try {
			await axios.delete(`http://localhost:3001/api/users/${user.username}`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<StyledSidebar>
			<div>
				<Link to="/" style={{ textDecoration: "none" }}>
					<h1>Gipher</h1>
				</Link>
				<div className="profileInfo">
					<ProfileInfo />
				</div>
				<div>
					<ul>
						<li>
							<div>
								<HomeOutlinedIcon />
								Home
							</div>
						</li>
						<li>
							<div>
								<NotificationsOutlinedIcon />
								Notifications
							</div>
						</li>
						<li>
							<div>
								<ChatOutlinedIcon />
								Messages
							</div>
						</li>
						<li>
							<div>
								<BookmarkBorderOutlinedIcon />
								Saved
							</div>
						</li>
						<li>
							<div>
								<SettingsOutlinedIcon />
								Settings
							</div>
						</li>
						<li>
							<div onClick={handleDelete}>
								<LogoutOutlinedIcon />
								Delete Account
							</div>
						</li>
					</ul>
				</div>
			</div>
		</StyledSidebar>
	);
};

export default LeftSidebar;
