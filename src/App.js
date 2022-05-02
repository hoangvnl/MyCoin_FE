import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import WalletCreation from "./components/wallet/creation";
import WalletAccess from "./components/wallet/access";
import PrivateRoute from "./utils/private-route";
import { useSelector } from "react-redux";

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

  useEffect(() => {
    document.title = "My Coin";
  }, []);

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Switch>
          <Route path="/wallet/creation" component={WalletCreation} />
          <Route path="/wallet/access" component={WalletAccess} />

          {/* <Route
            path="/register"
            render={() =>
              !user ? <RegisterPage /> : <Redirect to="/classrooms" />
            }
          />
          <PrivateRoute
            path="/classrooms"
            component={ClassroomList}
            authed={user}
            exact
          />
          <PrivateRoute
            path="/classrooms/:id"
            component={ClassroomLayout}
            handleChangeTab={handleChangeTab}
            activeTab={activeTab}
            authed={user}
          />
          <PrivateRoute path="/user" component={userDetails} authed={user} />
          <PrivateRoute
            path="/join"
            component={JoinClassroomPage}
            authed={user}
          />
          <PrivateRoute
            path="/grade-reviews"
            component={GradeReviews}
            authed={user}
            exact
          />
          <PrivateRoute
            path="/grade-reviews/:id"
            component={GradeReviewDetail}
            authed={user}
          /> */}
          <Route path="/" render={() => <Redirect to="/wallet/access" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
