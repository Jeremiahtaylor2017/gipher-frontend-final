import CreatePost from "./CreatePost";
import Post from "./Post";

import { Posts } from "../dummyData";

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

const Timeline = (props) => {
	return (
		<>
			<StyledTimline>
				<CreatePost />
				{Posts.map((p) => (
					<Post key={p.id} post={p} />
				))}
			</StyledTimline>
		</>
	);
};

export default Timeline;
