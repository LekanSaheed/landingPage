import React from "react";
import "./Header.css";
import { useGlobalContext } from "./reducers/context";

const Header = () => {
  const { dark, nav, toggleNav } = useGlobalContext();
  const navLinks = [
    { text: "HOME", link: "/", icon: "" },
    { text: "SERVICES", link: "/services", icon: "" },
    { text: "WORKS", link: "/works", icon: "" },
    { text: "ABOUT", link: "/about", icon: "" },
    { text: "BLOG", link: "/blog", icon: "" },
    { text: "CONTACT", link: "/contact", icon: "" },
  ];
  return (
    <div className={`header ${dark && "darkHeader light-text"} transit`}>
      <div className="bold-text">LEKAN</div>
      <div className="bars" onClick={() => toggleNav()}>
        <div className={`bar bar1 ${dark && "dark-bg"}`}></div>
        <div className={`bar bar2 ${dark && "dark-bg"}`}></div>
        <div className={`bar bar3 ${dark && "dark-bg"}`}></div>
      </div>
      <div
        className={` nav-container close-nav ${nav && "showNav"} ${
          dark ? " dark-home" : ""
        }`}
      >
        <div className="bars bar-close">
          <div
            className={`bar ${dark && "dark-bg"}`}
            onClick={() => toggleNav()}
          ></div>
        </div>
        {React.Children.toArray(
          navLinks.map((link) => {
            return (
              <a
                className={`${dark ? "light-text" : ""} transit`}
                href={link.link}
              >
                <li className={link.text === "CONTACT" && "bordered"}>
                  {" "}
                  {link.text}
                </li>
              </a>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Header;
