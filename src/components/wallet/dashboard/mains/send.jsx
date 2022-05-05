import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { SendTransactionService } from "../../../../redux/wallet/wallet.services";

const useStyles = makeStyles({
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

const Send = () => {
  const classes = useStyles();
  const [address, setAddress] = useState();
  const [amount, setAmount] = useState();
  const [info, setInfo] = useState();

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onSend = async () => {
    if (!address || !amount) {
      return;
    }
    setInfo("");
    await SendTransactionService(address, amount)
      .then((res) => console.log(res.data))
      .catch((err) => setInfo(err.response.data));
  };

  return (
    <Box sx={{ m: 5 }}>
      <Typography variant="h3" component="div" gutterBottom>
        Send Transaction
      </Typography>
      <div className={classes.formGroup}>
        <TextField
          sx={{ mb: 4 }}
          label="Amount"
          value={amount}
          onChange={handleChangeAmount}
          variant="outlined"
          fullWidth
          defaultValue={0}
          type="number"
        />
        <TextField
          label="To Address"
          variant="outlined"
          value={address}
          onChange={handleChangeAddress}
          fullWidth
          sx={{ mb: 4 }}
          placeholder="Address"
        />
        <Typography>{info}</Typography>
        <Button
          size="large"
          variant="outlined"
          sx={{ width: "150px" }}
          onClick={onSend}
        >
          Send
        </Button>
      </div>
    </Box>
  );
};

export default Send;
