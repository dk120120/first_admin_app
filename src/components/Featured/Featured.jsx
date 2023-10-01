// import React from 'react's
import "./featured.scss";
import { MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1>Total Revenue</h1>
        <MoreVert className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredchart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={4} />
        </div>

        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <KeyboardArrowDownIcon className="icon" />
              <p>$12.4k</p>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult">
              <KeyboardArrowUpIcon className="icon" />
              <p>$12.4k</p>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult">
              <KeyboardArrowDownIcon className="icon" />
              <p>$12.4k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
