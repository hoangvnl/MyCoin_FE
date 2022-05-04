import React from "react";
import { makeStyles } from "@mui/styles";
import SideBar from "./side-bar";
const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  side_bar: {
    flex: 2,
    backgroundColor: "#003784",
  },
  main_content: {
    flex: 5,
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.side_bar}>
        <SideBar />
      </div>
      <div className={classes.main_content}>Main content</div>
    </div>
  );
};

export default Dashboard;
