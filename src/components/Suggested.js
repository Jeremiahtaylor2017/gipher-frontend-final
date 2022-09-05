import ProfileInfo from "./ProfileInfo";

import styled from "styled-components";

const StyledSuggested = styled.div`
  padding-left: 25px;
  margin-right: 20px;
  margin-top: 30px;
  border: 1px solid #eee8ff;
  box-shadow: 0px 0px 5px 5px #fbfaff;
  border-radius: 5px;

  h3 {
    color: #5b5b5b;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const Suggested = (props) => {
  return (
    <>
      <StyledSuggested>
        <h3>Suggested</h3>
        <ProfileInfo />
        <ProfileInfo />
        <ProfileInfo />
        <ProfileInfo />
      </StyledSuggested>
    </>
  );
};

export default Suggested;
