import Trending from "./Trending";
import Suggested from "./Suggested";

import styled from "styled-components";

const StyledRightSidebar = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;

const RightSidebar = (props) => {
  return (
    <>
      <StyledRightSidebar>
        <div>
          <Trending />
        </div>
        <div>
          <Suggested />
        </div>
      </StyledRightSidebar>
    </>
  );
};

export default RightSidebar;
