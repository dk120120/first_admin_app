// import React from 'react'
import "./style.scss"

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/widget";
import Featured from "../../components/Featured/featured"
import Chart from "../../components/Chart/Chart";
import ListTable from "../../components/Table/Table";

const Home = () => {
  console.log("home")

  return (
    <div className="container">
      <Sidebar />
      <div className="home">
        <Navbar />
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance" />
      </div>
      <div className="charts">
      <Featured/>
      <Chart aspect={3/2} title={"Last 6 months (revenue)"}/>
      </div>
      <div className="listcontainer">
        <div className="listtitle">Latest transactions </div>
        <ListTable />
      </div>
      </div>
    </div>
  );
};

export default Home;
