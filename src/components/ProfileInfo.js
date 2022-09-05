import styled from "styled-components";

const StyledProfileInfo = styled.div`
  div:first-child {
    display: flex;
    flex-direction: row;
    /* padding-left: 30px; */

    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }

    div {
      line-height: 1.25;
      margin: auto 10px;
      display: block;

      p:first-child {
        color: #5b5b5b;
        font-size: 16px;
        font-weight: bold;
      }

      p:nth-child(2) {
        color: #a8a8a8;
        font-size: 12px;
      }
    }
  }
`;

const ProfileInfo = (props) => {
  return (
    <StyledProfileInfo>
      <div>
        <img src="https://i.imgur.com/WmRUduL.jpeg" alt="Jeremiah Taylor" />
        <div>
          <p>Jeremiah Taylor</p>
          <p>@jeremiahtaylor</p>
        </div>
      </div>
    </StyledProfileInfo>
  );
};

export default ProfileInfo;
