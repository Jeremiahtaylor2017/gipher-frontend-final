import ProfileInfo from "./ProfileInfo";

import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";

const StyledSidebar = styled.div`
  background-color: #f9f6ff;
  width: 300px;
  height: 100vh;
  position: sticky;

  h1 {
    color: #5833c3;
    padding-top: 20px;
    padding-left: 30px;
    margin-bottom: 30px;
    font-size: 20px;
  }

  div {
    ul {
      list-style: none;
      margin-top: 30px;

      li {
        color: #a8a8a8;
        line-height: 50px;

        div {
          height: 100%;
          padding-left: 30px;
          font-size: 18px;
          display: flex;
          flex-direction: row;
          align-items: center;

          svg {
            margin-right: 10px;
          }
        }
        div:hover {
          color: #5833c3;
          background-color: #eee8ff;
          cursor: pointer;
        }
      }
    }
  }
`;

const Sidebar = (props) => {
  return (
    <StyledSidebar>
      <div>
        <h1>Gipher</h1>
        <ProfileInfo />
        <div>
          <ul>
            <li>
              <div>
                <HomeIcon />
                Home
              </div>
            </li>
            <li>
              <div>
                <NotificationsIcon />
                Notifications
              </div>
            </li>
            <li>
              <div>
                <ChatIcon />
                Messages
              </div>
            </li>
            <li>
              <div>
                <BookmarkIcon />
                Saved
              </div>
            </li>
            <li>
              <div>
                <SettingsIcon />
                Settings
              </div>
            </li>
          </ul>
        </div>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
