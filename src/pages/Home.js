import LeftSidebar from "../components/LeftSidebar";
import Timeline from "../components/Timeline";
import RightSidebar from "../components/RightSidebar";

import styled from "styled-components";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: row;
`;

const Home = (props) => {
  return (
    <>
      <StyledHomePage>
        <LeftSidebar />
        <Timeline />
        <RightSidebar />
      </StyledHomePage>
    </>
  );
};
export default Home;
