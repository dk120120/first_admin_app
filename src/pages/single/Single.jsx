import "./Single.scss";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/Chart/Chart";
import ListTable from "../../components/Table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title"> Information </h1>
            <div className="editbutton">Edit</div>

            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="avatar"
                className="itemimg"
              />
              <div className="details">
                <div className="detailItem">
                  <span className="itemkey">Email:</span>
                  <span className="itemvalue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Phone:</span>
                  <span className="itemvalue">+1 2345 67 99</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Address:</span>
                  <span className="itemvalue">Elton St 234 Garden Yd , New York</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Country:</span>
                  <span className="itemvalue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1}  title={"Last 6 months (revenue)"}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">
          Last Transactions
        
          </h1>
          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Single;
