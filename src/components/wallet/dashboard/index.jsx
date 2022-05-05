import React from "react";
import { makeStyles } from "@mui/styles";
import SideBar from "./side-bar";
import MainContent from "./mains";

const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  side_bar: {
    flex: 2,
    backgroundColor: "#003784",
    maxWidth: "400px",
  },
  main_content: {
    flex: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const WalletContent = ({ handleLogout, address }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <div className={classes.side_bar}>
        <SideBar
          value={value}
          address={address}
          handleChange={handleChange}
          handleLogout={handleLogout}
        />
      </div>
      <div className={classes.main_content}>
        <MainContent value={value} />
      </div>
    </div>
  );
};

export default WalletContent;
