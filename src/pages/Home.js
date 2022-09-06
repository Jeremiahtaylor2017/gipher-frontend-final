import LeftSidebar from "../components/LeftSidebar";
import Timeline from "../components/Timeline";
import RightSidebar from "../components/RightSidebar";

import styled from "styled-components";

const StyledHomePage = styled.div`
	display: flex;
	flex-direction: row;

	div {
		display: flex;
		flex-direction: column;

		h3 {
			color: #5833c3;
			margin-top: 30px;
			margin-left: 20px;
		}
	}
`;

const Home = (props) => {
	return (
		<>
			<StyledHomePage>
				<LeftSidebar />
				<div>
					<h3>HOME</h3>
					<Timeline />
				</div>
				<RightSidebar />
			</StyledHomePage>
		</>
	);
};
export default Home;
