import styled from "styled-components";

const StyledTrending = styled.div`
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

  ul {
    list-style: none;

    div {
      line-height: 1;
      margin-bottom: 30px;

      p:first-child {
        font-size: 14px;
        color: #5b5b5b;
      }

      p:nth-child(2) {
        font-size: 12px;
        color: #a8a8a8;
      }
    }
  }
  a {
    text-decoration: none;
    color: #5833c3;
    font-weight: 600;
    font-size: 12px;
  }
`;

const Trending = (props) => {
  return (
    <>
      <StyledTrending>
        <h3>Trending</h3>
        <ul>
          <li>
            <div>
              <p>#Gura</p>
              <p>47.8 giphers</p>
            </div>
          </li>
          <li>
            <div>
              <p>#UvaldeCoverUp</p>
              <p>47.8 giphers</p>
            </div>
          </li>
          <li>
            <div>
              <p>#internetdown</p>
              <p>47.8 giphers</p>
            </div>
          </li>
          <li>
            <div>
              <p>#Airbnb</p>
              <p>47.8 giphers</p>
            </div>
          </li>
          <li>
            <div>
              <p>#SummerSolstice2022</p>
              <p>47.8 giphers</p>
            </div>
          </li>
        </ul>
        <a href="/">Show more &#62;</a>
      </StyledTrending>
    </>
  );
};

export default Trending;
