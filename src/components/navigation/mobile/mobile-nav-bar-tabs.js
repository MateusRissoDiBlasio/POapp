import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";

export const MobileNavBarTabs = ({ handleClick }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/POApp/"
        label="Home      "
        handleClick={handleClick}
      />
      {isAuthenticated && (
        <>
          <MobileNavBarTab path="/PO" label="POapp" handleClick={handleClick} />
          <MobileNavBarTab
            path="/Profile"
            label="Profile"
            handleClick={handleClick}
          />
        </>
      )}
    </div>
  );
};
