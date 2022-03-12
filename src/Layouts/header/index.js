import Logo from "../../Assets/img/Jio-Logo.png";
import CartIcon from "../../Assets/svg/cart.svg";
import AccountIcon from "../../Assets/svg/account.svg";
import QuestionIcon from "../../Assets/svg/question.svg";
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
      <div className="action-box">
        <SearchBox />
        <ActionButtons />
      </div>
    </div>
  );
}

function SearchBox() {
  return (
    <div className="search-box">
        <input type='text' className="inputbox" placeholder="Search"/>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="action-content">
      <span className="action-item">
        <img src={CartIcon} className="action-icon" />
      </span>
      <span className="action-item">
        <img src={AccountIcon} className="action-icon" />
      </span>
      <span className="action-item">
        <img src={QuestionIcon} className="action-icon" />
      </span>
    </div>
  );
}

export default Header;
