// Dependencies
import React, { useEffect, useState } from "react";
import trendingIcon from "./assets/trending-icon.svg";
import check from "./assets/check.png";
import sub from "./assets/sub.png";
import write from "./assets/write.png";

// Styles
import "./tailwind.output.css";

const App = () => {
  const [value, setValue] = useState(137);
  const [totalValue, setTotalValue] = useState(500);

  return (
    <div
      className="flex flex-col items-center h-screen"
      style={{ backgroundColor: "#EEF5FF" }}
    >
      <Card
        title="Increase case studies"
        description="12% from last week"
        value={value}
        totalValue={totalValue}
      />
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.valueAsNumber);
        }}
        type="number"
      />
    </div>
  );
};

export const Card = ({ title, description, value, totalValue }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let percent = (value / totalValue) * 100;
    if (isNaN(percent)) percent = 0;
    setPercentage(Math.round(percent));
  }, [value, totalValue]);

  return (
    <div
      id="card"
      className="flex flex-col rounded-lg p-6 m-4 bg-white shadow-md gap-y-4"
    >
      {/* Header */}
      <div id="header" className="flex flex-col gap-y-1">
        <p className="font-semibold text-xl">{title}</p>
        <div className="flex flex-row gap-x-2">
          <img alt="icon" src={trendingIcon} />
          <p className="font-light" style={{ color: "#A1A3A8" }}>
            {description}
          </p>
        </div>
      </div>

      {/* Graph */}
      <div id="graph" className="flex flex-col gap-y-2 mt-4">
        <div className="flex flex-row justify-between gap-x-32">
          <p className="font-semibold">
            ${value}M ({percentage}%)
          </p>
          <p className="font-light" style={{ color: "#A1A3A8" }}>
            Target: ${totalValue}M
          </p>
        </div>
        <div className="flex flex-row gap-x-1">
          <div
            className="h-3 rounded-full"
            style={{ width: `${percentage}%`, backgroundColor: "#0565FF" }}
          ></div>
          <div
            className="h-3 rounded-full flex-1"
            style={{ backgroundColor: "#D8DCE5" }}
          ></div>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* Actions */}
      <div className="flex justify-between gap-x-2">
        <Icon icon={sub} text="(2)" />
        <div className="flex flex-row gap-x-2">
          <Icon icon={write} />
          <Icon icon={check} />
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ icon, text }) => {
  return (
    <div
      className="rounded-full px-4 py-2 flex gap-x-1 items-center"
      style={{
        backgroundColor: "#EEF5FF",
        color: "#0565FF",
        width: "max-content"
      }}
    >
      <img className="h-5 w-5" alt="" src={icon} />
      {text && <p>{text}</p>}
    </div>
  );
};

export default App;
