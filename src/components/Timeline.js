import { useEffect, useState } from "react";
import axios from "axios";

import CreatePost from "./CreatePost";
import Post from "./Post";

import styled from "styled-components";

const StyledTimline = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 30px;
	margin-bottom: 10px;
	overflow: auto;
`;

const Timeline = ({ username }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const timelineURL = username
				? `http://localhost:3001/api/post/profile/${username}`
				: `http://localhost:3001/api/post/timeline/6313803782f8003244316c30`;
			const res = await axios.get(timelineURL);
			setPosts(res.data);
		};
		fetchPosts();
	}, [username]);

	return (
		<>
			<StyledTimline>
				<CreatePost />
				{posts.map((p) => (
					<Post key={p._id} post={p} />
				))}
			</StyledTimline>
		</>
	);
};

export default Timeline;
