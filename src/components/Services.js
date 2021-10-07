import React from "react";
import { useGlobalContext } from "./reducers/context";
import "./Services.css";
const Services = () => {
  const { dark } = useGlobalContext();

  const cards = [
    {
      titleText: "Digital Strategy",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "UX Designs",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "Ui Designs",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "Social Media",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "Design Concept",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
    {
      titleText: "Media Pairing",
      icons: "",
      text: "Nulla sint dolor nisi est sit laborum culpa nostrud ipsum.",
    },
  ];
  return (
    <div
      className={`service-container main-section ${
        dark ? "dark-service" : "light-service"
      }`}
    >
      <div></div>
      <div style={{ marginTop: "20px" }} className="flex-column">
        <div className="flex-row">
          <div className="line"></div>
          <h1>Services.</h1>
        </div>
        <span className="theme-text bold-text">OUR SERVICES FOR CLIENTS</span>

        <aside className="card-container">
          {React.Children.toArray(
            cards.map((card) => {
              return (
                <div
                  className={` card cardhover ${
                    dark ? "dark-card" : "light-card"
                  }`}
                  style={{ color: !dark && "white" }}
                >
                  <div>{card.icons}</div>
                  <div className="bold-text title-text">{card.titleText}</div>
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

export default Services;
