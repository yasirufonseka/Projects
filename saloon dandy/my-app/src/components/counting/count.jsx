import React from "react";
import CountUp from "react-countup";
import './count.css'

const StatsSection = () => {
  return (
    <div className="stats-section">
      <div className="stat-item">
        <CountUp end={278} duration={3} />
        <p>Happy Clients</p>
      </div>
      <div className="stat-item">
        <CountUp end={8} duration={3} />
        <p>Expert Beauticians</p>
      </div>
      <div className="stat-item">
        <CountUp end={96} duration={3} />
        <p>TV Programmes</p>
      </div>
      <div className="stat-item">
        <CountUp end={50} duration={3} />
        <p>Award Winnings</p>
      </div>
    </div>
  );
};

export default StatsSection;
