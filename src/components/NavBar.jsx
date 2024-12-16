import { NavLink } from "react-router-dom";
import project from "/package.json";

function NavBar() {
  return (
    <>
      {console.log(project.name + "@" + project.version)}
      <div className="header-bar">
        <div className="header-container">
          <div className="logo-container">
            <h1>
              EMP<span>Demo</span>{" "}
            </h1>
          </div>
          <ul className="navigation">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/read">
              <li>Employee</li>
            </NavLink>
            <NavLink to="/read-list">
              <li>List</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
