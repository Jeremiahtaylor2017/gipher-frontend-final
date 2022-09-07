// import { useState, useEffect } from "react";
// import axios from "axios";

import ProfileInfo from "./ProfileInfo";

import styled from "styled-components";

const StyledSuggested = styled.div`
	padding-left: 25px;
	margin-right: 20px;
	margin-top: 30px;
	border: 1px solid #eee8ff;
	box-shadow: 0px 0px 5px 5px #fbfaff;
	border-radius: 5px;
	padding-bottom: 10px;

	h3 {
		color: #5b5b5b;
		font-weight: bold;
		margin-bottom: 10px;
		margin-top: 10px;
	}

	.profileInfo {
		margin-bottom: 10px;

		img {
			height: 50px !important;
			width: 50px !important;
		}
	}
`;

const Suggested = (props) => {
	// const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	const fetchSuggested = async () => {
	// 		const suggested = axios.get("http://localhost:3001/api/users/suggested");
	// 		setUsers(suggested);
	// 	};
	// 	fetchSuggested();
	// }, []);

	return (
		<>
			<StyledSuggested>
				<h3>Suggested</h3>
				{/* 
				{users.map((u) => (
					<div key={u._id}>
						<img src={u.profilePicture} alt="" />
						<p>{u.name}</p>
						<p>@{u.username}</p>
					</div>
				))} */}
				<div className="profileInfo">
					<ProfileInfo />
				</div>
				<div className="profileInfo">
					<ProfileInfo />
				</div>
				<div className="profileInfo">
					<ProfileInfo />
				</div>
				<div className="profileInfo">
					<ProfileInfo />
				</div>
			</StyledSuggested>
		</>
	);
};

export default Suggested;
