import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { getWalletBalanceService } from "../../../redux/wallet/wallet.services";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";

const SideBar = ({ value, handleChange, handleLogout, address }) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getWalletBalance();
  }, []);

  const getWalletBalance = async () => {
    await getWalletBalanceService().then(({ balance }) => setBalance(balance));
  };

  return (
    <div>
      <Card sx={{ m: 3, textAlign: "left" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            My Account
          </Typography>
          <Typography noWrap variant="body2">
            {address}
          </Typography>
          <Typography variant="h5" component="div">
            {balance} Coins
          </Typography>
        </CardContent>
      </Card>
      <div>
        <Tabs
          orientation="vertical"
          variant="scrollable fullWidth"
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Dashboard" sx={{ maxWidth: "500px", color: "white" }} />
          <Tab label="Send" sx={{ maxWidth: "500px", color: "white" }} />
          <Tab
            label="Transaction pool"
            sx={{ maxWidth: "500px", color: "white" }}
          />
        </Tabs>
        <Divider />
        <Button
          sx={{ mt: 2, color: "white" }}
          variant="outlined"
          onClick={handleLogout}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
