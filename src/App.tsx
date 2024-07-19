import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./style/main.css";
import { menuList } from "./asset/menuList";
import PageModule from "./component/pageModule";

function App() {
  return (
    <div id="page" className="flex flex-col w-screen App">
      <div
        id="sideMenu"
        className="flex flex-col items-center justify-around w-screen border-b shadow sm:flex-row"
      >
        <Link to="/">
          <h2 className="m-4 ml-12 text-2xl font-semibold">Neeko Blog</h2>
        </Link>
        <div className="flex flex-wrap justify-center gap-2 p-2 sm:flex-row">
          {menuList.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              className="inline-block linkStyle whitespace-nowrap "
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
      <div id="main">
        <Routes>
          <Route path="/" element={<PageModule type="introMd" />} />
          {menuList.map((menu, index) => (
            <Route key={index} path={menu.path} element={<menu.Component />} />
          ))}
          <Route
            path="/:type/:category/markdown/:name/:img"
            element={<PageModule />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
