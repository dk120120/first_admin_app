// import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import "./style.scss";
import { useDark } from "../../reducer/actiontaken";
import { All_ACTION } from "../../reducer/reducer";
const Navbar = () => {
  const { state, dispatch } = useDark();
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
          </div>
          <div
            className="item itemx"
            onClick={() => {
              dispatch({ type: All_ACTION.TOGGLE_ACTION });
            }}
          >
            {state.darkTheme ? (
              <Brightness4Icon className="icon" />
            ) : (
              <DarkModeOutlinedIcon className="icon" />
            )}
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrIN_phrkQozJkBJi9v7jqOEazcPIad5SYA&usqp=CAU"
              alt={"user"}
              className="adminpic"
            />
          </div>
          <div className="item">
            <SettingsOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
