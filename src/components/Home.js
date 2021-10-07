import React from "react";
import { useGlobalContext } from "./reducers/context";
import "./Home.css";

const Home = () => {
  const { dark, setTheme } = useGlobalContext();

  const cards = [
    {
      titleText: "Future Concept",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "The Big Ideas",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "Creative Solution",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
  ];
  return (
    <div className={`main-section ${dark && "dark-home"} transit`}>
      <div></div>
      <div style={{ height: "auto" }}>
        <button onClick={() => setTheme()}>{dark ? "🔆" : "🌙"}</button>
        <div className={`transit ${dark ? "home-group" : ""}`}>
          <div className="flex-column home-intro">
            <span className="bold-text theme-text">
              CREATIVE MIND. CREATIVE WORKS
            </span>
            <h1 className={`transit big-intro ${dark && "light-text"}`}>
              We are digital agency.
            </h1>
          </div>
          <button className={`btn bordered transit ${dark && "theme-text"}`}>
            GETTING STARTED
          </button>
        </div>

        {/* Cards here */}
        <aside className="card-container">
          {React.Children.toArray(
            cards.map((card) => {
              return (
                <div
                  className={` card ${dark ? "dark-card" : "light-card"}`}
                  style={{ color: !dark && "white" }}
                >
                  <div>{card.icons}</div>
                  <div className="bold-text">{card.titleText}</div>
                  <div className="line"></div>
                  <div>{card.text}</div>
                </div>
              );
            })
          )}
        </aside>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
