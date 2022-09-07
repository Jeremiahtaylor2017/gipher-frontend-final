import LeftSidebar from "../components/LeftSidebar";
import Timeline from "../components/Timeline";
import RightSidebar from "../components/RightSidebar";

import styled from "styled-components";

const StyledHomePage = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	.timeline {
		display: flex;
		flex-direction: column;
		max-width: 600px;
		align-items: stretch;

		.home {
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
				<div className="timeline">
					<h3 className="home">HOME</h3>
					<Timeline />
				</div>
				<RightSidebar />
			</StyledHomePage>
		</>
	);
};
export default Home;
