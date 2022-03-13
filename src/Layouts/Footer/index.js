import "./Footer.scss";
import QuestionIcon from "../../Assets/svg/question.svg";
import PlayStoreImage from "../../Assets/img/google-play.svg";

// Footer menu json
const menuListJson = {
  offering: {
    heading: "Our offerings",
    menulist: [
      "Prepaid",
      "Postpaid",
      "International roaming",
      "Apps",
      "eSIM",
      "WiFi calling",
      "JioTunes",
      "Devices",
      "LYF smartphone+",
    ],
  },
  support: {
    heading: "Support",
    menulist: [
      "Track order",
      "My account",
      "FAQ",
      "Locate us",
      "Claim your refund",
      "Feedback",
      "Contact us",
    ],
  },
  company: {
    heading: "Our company",
    menulist: [
      "Reliance Industries",
      "Reliance Foundation",
      "JioLife",
      "Careers",
      "Investor relations",
    ],
  },
  usefulllinks: {
    heading: "Useful links",
    menulist: ["Get Jio SIM", "JioAutoPay", "Brand offers", "Partner with Jio"],
  },
};

function Footer() {
  return (
    <div className="main-footer">
      <div className="top-footer wrap-content">
        <FooterMenu menuitem={menuListJson.offering} />
        <FooterMenu menuitem={menuListJson.support} />
        <FooterMenu menuitem={menuListJson.company} />
        <FooterMenu menuitem={menuListJson.usefulllinks} />
        <FooterInfoMenu />
      </div>
    </div>
  );
}

function FooterMenu({ menuitem }) {
  let heading = menuitem?.heading;
  let menuList = menuitem?.menulist;

  return (
    <div className="footer-menu-div">
      <h2 className="menu-heading">{heading}</h2>
      <ul className="footer-menu-list">
        {menuList.map((elem, i) => {
          return (
            <li className="footer-menu-item" key={i}>
              <a href="#" className="footer-menu-link">
                {elem}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function FooterInfoMenu() {
  const socialIcon = [1, 2, 3, 4, 5];

  return (
    <div className="footer-info-menu">
      <h2 className="heading1">Connect with us</h2>
      <div className="social-box">
        {socialIcon.map((elem) => {
          return (
            <a href="#" className="social-item" key={elem}>
              <img src={QuestionIcon} className="social-icon" />
            </a>
          );
        })}
      </div>
      <h2 className="heading2">Download MyJio</h2>
      <div className="download-box">
        <a href="#" className="download-link">
          <img src={PlayStoreImage} className="download-link-img" />
        </a>
        <a href="#" className="download-link">
          <img src={PlayStoreImage} className="download-link-img" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
