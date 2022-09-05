import styled from "styled-components";

const StyledCreatePost = styled.div`
  width: 100%;

  ::placeholder {
    color: #5833c3;
  }

  h3 {
    color: #5833c3;
    margin-bottom: 20px;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    width: 100%;

    img {
      align-self: flex-start;
      margin-bottom: 20px;
      margin-right: 10px;
      height: 65px;
      width: 65px;
      border-radius: 50%;
    }

    form {
      border: 1px solid #eee8ff;
      box-shadow: 0px 0px 5px 5px #fbfaff;
      border-radius: 5px;
      width: 100%;

      label {
        display: flex;
        flex-direction: column;

        textarea {
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 15px;
          resize: none;
          font-family: inherit;
          border: none;
        }
        textarea:focus {
          outline: none;
        }

        .separator {
          width: 90%;
          height: 0;
          opacity: 0.1;
          border: 1px solid #5b5b5b;
          margin: 0 auto;
          margin-bottom: 20px;
        }

        div {
          width: 90%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto 15px auto;

          input {
            width: 200px;
            height: 25px;
            padding-left: 10px;
            border-radius: 27px;
            border: 1px solid #eee8ff;
            box-shadow: 0px 0px 5px 5px #fbfaff;
          }
          input:focus {
            outline-color: #5833c3;
          }

          .search {
            display: none;
          }

          .post {
            font-family: inherit;
            width: 86px;
            height: 33px;
            background: #5833c3;
            color: #fff;
            border-radius: 27px;
            border: none;
          }
          .post:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;

const CreatePost = (props) => {
  return (
    <>
      <StyledCreatePost>
        <div>
          <h3>HOME</h3>
        </div>
        <div>
          <img src="https://i.imgur.com/WmRUduL.jpeg" alt="Jeremiah Taylor" />
          <div>
            <form>
              <label>
                <textarea name="status" placeholder="What's new?"></textarea>
                <div className="separator"></div>
                <div>
                  <input placeholder="Search Giphy's" />
                  <button className="search">Search</button>
                  <button className="post">Post</button>
                </div>
              </label>
            </form>
          </div>
        </div>
      </StyledCreatePost>
    </>
  );
};

export default CreatePost;
