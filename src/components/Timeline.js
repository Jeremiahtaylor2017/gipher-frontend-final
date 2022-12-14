import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
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
	const { user } = useContext(AuthContext);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = username
				? await axios.get(`http://localhost:3001/api/post/profile/${username}`)
				: await axios.get(
						`http://localhost:3001/api/post/timeline/${user._id}`
				  );
			setPosts(
				res.data.sort((p1, p2) => {
					return new Date(p2.createdAt) - new Date(p1.createdAt);
				})
			);
		};
		fetchPosts();
	}, [username, user._id]);

	return (
		<>
			<StyledTimline>
				{(!username || username === user.username) && <CreatePost />}
				{posts.map((p) => (
					<Post key={p._id} post={p} />
				))}
			</StyledTimline>
		</>
	);
};

export default Timeline;
