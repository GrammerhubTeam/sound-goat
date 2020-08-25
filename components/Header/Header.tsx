import Link from "next/link";
import Router from "next/router";

const linkStyle = {
  marginRight: 15,
};

const Header = () => {
  // ===============================================
  // LIFECYCLE METHODS FOR WHEN NEXT ROUTER CHANGES
  Router.events.on("routeChangeStart", () => {
    console.log("CHANGE STARTING");
  });
  Router.events.on("routeChangeComplete", () => {
    console.log("CHANGE COMPLETED");
  });
  // ===============================================
  return (
    <ul className="navbar-nav ml-auto">
      <li>
        <Link href="/home">
          <a className="nav-link" style={linkStyle}>
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="nav-link" style={linkStyle}>
            About Us
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
