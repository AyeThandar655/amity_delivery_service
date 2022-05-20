import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as AmityLogo } from "../../assets/amity.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container" to="/">
          <AmityLogo className="logo" />
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Calculate Cost
          </Link>
          <Link className="nav-link" to="/possibleRoute">
            Possible Route
          </Link>
          <Link className="nav-link" to="/lowestCostRoute">
            Lowest Cost Route
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
