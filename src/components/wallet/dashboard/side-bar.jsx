import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getWalletBalanceService } from "../../../redux/wallet/wallet.services";
const SideBar = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    getWalletBalance();
  }, []);

  const getWalletBalance = async () => {
    await getWalletBalanceService().then(({ balance }) => setBalance(balance));
  };

  return (
    <div>
      <Card>
        <CardContent>My Account</CardContent>
        <CardContent>{balance} Coins</CardContent>
      </Card>
      <div>
        <form action="#">
          <Button type="submit" variant="outlined">
            Send
          </Button>
          <TextField id="outlined-basic" label="Amount" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="To Address"
            variant="outlined"
          />
        </form>
      </div>
    </div>
  );
};

export default SideBar;
