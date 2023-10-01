
import "./style.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {Link} from "react-router-dom";
import { useDark } from "../../reducer/actiontaken";
import { All_ACTION } from "../../reducer/reducer";

const Sidebar = () => {
  const {dispatch} = useDark()
  return (
    <div className="sidebar">
      <div className="top">
      <Link to="/" style={{textDecoration:"none", color:"red"}} className="sidebarTop"> Admin Panel</Link> 
        </div>
      <hr className="myhr" />
      <div className="center">
        <ul className="sidebarlist">
          <p className="Main">Main</p>
          <Link to="/" style={{textDecoration:"none" }} className="linklist">
          <li>
            <DashboardIcon className="iconlist" />

            <span>Dashboard</span>
          </li>
          </Link>
          <p className="Lists">Lists</p>
          <Link to="/users" style={{textDecoration:"none" }} className="linklist">
          <li>
            <PeopleAltIcon className="iconlist" />
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none" }} className="linklist">
          <li>
            <StoreIcon className="iconlist" />
            <span>Products</span>
          </li>
          </Link>
          <Link to="/" style={{textDecoration:"none" }} className="linklist">
          <li>
            <CreditCardIcon className="iconlist" />
            <span>orders</span>
          </li>
          </Link>
          <Link to="/" style={{textDecoration:"none" }} className="linklist">
          <li>
            <LocalShippingIcon className="iconlist" />
            <span>Delivery</span>
          </li>
          </Link>
          <p className="Useful">Useful</p>
          <Link to="/" style={{textDecoration:"none" }} className="linklist">
          <li>
            <InsertChartIcon className="iconlist" />
            <span>Stats</span>
          </li>
          </Link>
          <Link to="/" style={{textDecoration:"none" }} className="linklist">
          <li>
            <NotificationsNoneIcon className="iconlist" />
            <span>Notifications</span>
          </li>
          </Link>
          <p className="Service">Service</p>
          <Link to="/" style={{textDecoration:"none" }} className="linklist">
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="iconlist" />
            <span>System Health</span>
          </li>
          </Link>
          <Link to="/" style={{textDecoration:"none" }} className="linklist">
          <li>
            <PsychologyOutlinedIcon className="iconlist" />
            <span>Logs</span>
          </li>
          </Link>
          <Link to="/" style={{textDecoration:"none" }} className="linklist">
          <li>
            <SettingsApplicationsIcon className="iconlist" />
            <span>Settings</span>
          </li>
          </Link>
          <p className="User">User</p>
          <Link to="/" style={{textDecoration:"none" }} className="linklist">
          <li>
            <AccountCircleIcon className="iconlist" />
            <span>Profile</span>
          </li>
          </Link>
          <Link to="/" style={{textDecoration:"none" }} className="linklist">
          <li>
            <ExitToAppIcon className="iconlist" />
            <span>Log out</span>
          </li>
          </Link>
        </ul>
      </div>
      <hr />
      <div className="bottom">
        <p>Theme</p>
        <div className="buttonbox">
          <div className="coloroptions" onClick={()=>{dispatch({type:All_ACTION.WHITE_ACTION})}}></div>
          <div className="coloroptions" onClick={()=>{dispatch({type:All_ACTION.DARK_ACTION})}}></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
