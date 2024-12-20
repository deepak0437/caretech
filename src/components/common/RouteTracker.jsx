import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";

function RouteTracker() {
  const location = useLocation();
  
  // Generate breadcrumb paths
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
      <Link to="/">Home</Link>
      {pathnames.map((value, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={routeTo} color="text.primary">
            {value}
          </Typography>
        ) : (
          <Link key={routeTo} to={routeTo}>
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default RouteTracker;
