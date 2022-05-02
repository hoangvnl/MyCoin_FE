import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

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

const WalletAccess = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
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
                Software methods like keystore file and mnemonic phrase should
                only be used in offline settings by experienced users.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};

export default WalletAccess;