import Logo from "../../Assets/img/Jio-Logo.png";
import "./Header.scss";

function Header() {
  return (
    <div className="main-header">
      <div className="navbar wrap-content">
        <div className="brand">
          <img src={Logo} className="logo" />
        </div>
        <NavMenu />
      </div>
    </div>
  );
}

function NavMenu() {
  const menuList = ["Mobile", "JioFiber", "Business", "Shop", "Apps"];

  return (
    <div className="navbar-menu-box">
      <ul className="navbar-menu-list">
        {menuList.map((elem, i) => {
          return (
            <li className="navbar-menu-item" key={i}>
              <a href="#" className="navbar-menu-link">
                {elem}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="">
        <SearchBox />
      </div>
    </div>
  );
}

function SearchBox() {
  return (
    <>
      <input type="text" />
    </>
  );
}

export default Header;
