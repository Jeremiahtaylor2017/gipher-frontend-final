import styled from "styled-components";

const StyledRightSidebar = styled.div`
  min-width: 300px;
`;

const RightSidebar = (props) => {
  return (
    <>
      <StyledRightSidebar>
        <h1>Right Sidebar</h1>
      </StyledRightSidebar>
    </>
  );
};

export default RightSidebar;
