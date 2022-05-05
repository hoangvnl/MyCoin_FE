import React, { useRef } from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { accessWalletService } from "../../../wallet-services/wallet.services";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#004c90",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

const WalletAccess = ({ handleLogin }) => {
  const classes = useStyles();
  const inputPrivateKeyRef = useRef(null);
  const handleUploadPrivateKey = async (event) => {
    const formData = new FormData();
    const file = event.target.files[0];
    event.target.value = null;
    formData.append("private_key", file);

    await accessWalletService(formData)
      .then((res) => {
        handleLogin(res);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={classes.wrapper}>
      <input
        type="file"
        style={{ display: "none" }}
        ref={inputPrivateKeyRef}
        onChange={handleUploadPrivateKey}
      />
      <div>
        <Typography variant="h3" sx={{ color: "white" }}>
          Access my wallet
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "white" }}>
          Don't have wallet? {}
          <Link
            href="/wallet/creation"
            variant="subtitle1"
            sx={{ color: "#05c0a5" }}
          >
            Create Wallet
          </Link>
        </Typography>
      </div>
      <Box
        sx={{
          border: 1,
          borderColor: "white",
          width: "550px",
          borderRadius: "16px",
        }}
      >
        <Card
          sx={{
            backgroundColor: "transparent",
            color: "white",
            textAlign: "left",
          }}
          onClick={() => inputPrivateKeyRef.current.click()}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Software
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Private Key
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};

export default WalletAccess;
