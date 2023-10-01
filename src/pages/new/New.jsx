import "./New.scss";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useState } from "react";

const New = ({title, inputs}) => {
 const[fileDetail, setFileDetail] = useState("")

  return (
    <div className="new">
      <Sidebar />
      <div className="newcontainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={fileDetail ? URL.createObjectURL(fileDetail) : ""}
              alt="avatar"
              className="image"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image : <DriveFolderUploadIcon className="icon" />
                </label>
                <input type="file" style={{ display: "none" }} id="file" 
                onChange={(e)=>{
                  setFileDetail(e.target.files[0])
                }}
                />
              </div>
              {/* <div className="formInput">
                <label>Name and Surname :</label>
                <input type="text" placeholder="Jon doe" />
              </div>
              <div className="formInput">
                <label>Phone :</label>
                <input type="text" placeholder="+1 6302343456" />
              </div>
              <div className="formInput">
                <label>Address :</label>
                <input type="text" placeholder="eton st 26 new york" />
              </div>
              <div className="formInput">
                <label>Username :</label>
                <input type="text" placeholder="Jon_doe" />
              </div>
              <div className="formInput">
                <label>Email :</label>
                <input type="text" placeholder="Jon_doe@gmail.com" />
              </div>
              <div className="formInput">
                <label>password :</label>
                <input type="password" placeholder="Jon doe" />
              </div>
              <div className="formInput">
                <label>Country :</label>
                <input type="text" placeholder="USA" />
              </div> */}
              {
                inputs.map((input)=>{
                  return(<>
                   <div className="formInput" key={input.id}>
                <label>{input.label} :</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
                  </>)
                })
              }
              <button className="formbutton" type="submit">
                Submit
              </button>
              <button className="formreset" type="reset">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
