import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import WalletCreation from "./components/wallet/creation";
import WalletAccess from "./components/wallet/access";
import PrivateRoute from "./utils/private-route";
import WalletContent from "./components/wallet/dashboard";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
});

const App = () => {
  const classes = useStyles();
  const [address, setAddress] = useState(localStorage.getItem("address") || "");
  useEffect(() => {
    document.title = "My Coin";
  }, []);

  const handleLogin = (newAddress) => {
    setAddress(newAddress);
    localStorage.setItem("address", newAddress);
  };

  const handleLogout = () => {
    console.log(123);
    setAddress("");
    localStorage.clear();
  };

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute
            authed={address}
            path="/wallet"
            component={WalletContent}
            handleLogout={handleLogout}
            address={address}
            exact
          />
          <Route
            path="/wallet/creation"
            render={() =>
              !address ? <WalletCreation /> : <Redirect to="/wallet" />
            }
            exact
          />
          <Route
            path="/wallet/access"
            render={() =>
              !address ? (
                <WalletAccess handleLogin={handleLogin} />
              ) : (
                <Redirect to="/wallet" />
              )
            }
            exact
          />
          <Route path="/" render={() => <Redirect to="/wallet/access" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
