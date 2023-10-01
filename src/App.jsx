// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {userInputs} from "./formsources"
import {productInputs} from "./formsources"
import "./components/style/dark.scss"
import { useDark } from "./reducer/actiontaken";


const App = () => {
  const {state} = useDark()
  console.log("app")

  return (
    <div className={state.darkTheme ? "dark app":"app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path={"login"} element={<Login />} />
        
            <Route path={"users"}>
              <Route index element={<List />} />
              <Route path=":userid" element={<Single />} />
              <Route path="new" element={<New title={"Add New User"} inputs={userInputs}/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productid" element={<Single />} />
              <Route path="new" element={<New title={"Add New Product"} inputs={productInputs}/>} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
