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
  overflow: auto;
`;

const Timeline = (props) => {
  return (
    <>
      <StyledTimline>
        <CreatePost />
        <Post />
      </StyledTimline>
    </>
  );
};

export default Timeline;
