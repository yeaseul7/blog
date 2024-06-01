import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./style/main.css";
import { menuList } from "./asset/menuList";

function App() {
  return (
    <Router>
      <div id="page" className="flex flex-col w-screen App">
        <div
          id="sideMenu"
          className="flex flex-row items-center justify-around w-screen border-b shadow"
        >
          <h2 className="m-4 ml-12 text-2xl font-semibold">SSaong Blog</h2>
          <div className="flex gap-4">
            {menuList.map((menu, index) => (
              <Link
                to={menu.path}
                key={index}
                className="inline-block linkStyle whitespace-nowrap "
              >
                {menu.name}
              </Link>
            ))}
            <button className="linkStyle">테마</button>
            <button className="linkStyle">검색</button>
          </div>
        </div>
        <div id="main">
          <Routes>
            {menuList.map((menu, index) => (
              <Route
                key={index}
                path={menu.path}
                element={<menu.Component />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
