import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumotron">
      <h1>Pluralsight Administration</h1>
      <p>React, Redux and React Router for ultra-responsive web apps</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
  //   return (
  //     <div>

  //     </div>
  //   )
};

export default HomePage;
