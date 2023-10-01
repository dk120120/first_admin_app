import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "./datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";



const Datatable = () => {
const [data, setData] = useState(userRows);


function handle(id1){
  setData(data.filter(({id})=>{
      return id !== id1
   
  }))
 }

   const columns = [
     { field: "id", headerName: "ID", width: 70 },
     {
       field: "user",
       headerName: "User",
       width: 230,
       renderCell: (params) => {
         return (
           <div className="cellWithImage">
             <img src={`${params.row.img}`} alt="avatar" className={"cellImage"} />
             {params.row.username}
           </div>
         );
       },
     },
     { field: "email", headerName: "Email", width: 210 },
     {
       field: "age",
       headerName: "Age",
       
       width: 100,
      
     },
     {
       field: "status",
       headerName: "Status",
       width: 180,
       renderCell: (params) => {
         return (
           
             <div className={`status ${params.row.status}`}>{params.row.status}</div>
          
         );
       },
     },
     {
       field: "action",
       headerName: "Action",
       width: 200,
       renderCell: (params) => {
         return (
           <div className="action">
             <Link to="/users/test" className="linkviewButton">
              <div className="viewbutton">view</div>
              </Link>
            
              <div className="deletebutton" onClick={()=>{
                handle(params.row.id)
              }}>Delete</div>
              
           </div>
         )
       },
     },
   ];

   

  return (
    <div className="datatable">
      <div className="datatabletitle">
        <h1>Add New User</h1>
        <Link to="/users/new" className="linktitle">
          <div className="title">
            Add New
          </div>
        </Link>
      </div>
      <div>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          checkboxSelection
          className="datagrid"
        />
      </div>
    </div>
  );
};

export default Datatable;
