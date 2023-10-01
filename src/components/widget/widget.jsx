import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"; 
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"; 
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"; 


const Widget = ({type}) => {

let data;

const amount = 100;
const diff = 20;


switch(type){
  case "user":
    data ={
        title:"USERS"
        , isMoney:false,
        link:"see all users",
        icon:(<PersonOutlinedIcon className="icon" style={{
          color:"crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }} />)
    };
    break;
    case "order":
      data={
        title:"ORDERS",
        isMoney:false,
        link:"view all orders",
        icon:(<ShoppingCartOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
          }}
        />)
      };
      break;

      case "earning":
        data={
          title:"EARNINGS",
          isMoney:true,
          link:"view all earnings",
          icon:(
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        };
        break;
        case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
      default:break;
}

  return (
    <div className="widget">
      <div className="left">
        <div > {data.title}</div>
        <div>{data.isMoney && "$" } {amount}</div>
        <div>{data.link}</div>
      </div>
      <div className="right">
        <div className = "percentageincrease">
          <ExpandLessIcon className="icon"/>
          <h4>+{diff}%</h4>
        </div>
        <div>
        {data.icon}
        </div>
      </div>
    </div>
  );
};

export default Widget;
