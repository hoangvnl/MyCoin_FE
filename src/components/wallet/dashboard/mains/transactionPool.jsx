import React, { useEffect, useState } from "react";
import { GetTransactionPoolService } from "../../../../wallet-services/wallet.services";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const TransactionPool = () => {
  const [transactionPool, setTransactionPool] = useState([]);
  useEffect(() => {
    getTransactionPool();
  }, []);

  const getTransactionPool = async () => {
    await GetTransactionPoolService()
      .then((res) => setTransactionPool(res))
      .catch((error) => error.response);
  };

  const renderTransactionPool = () => {
    if (transactionPool.length === 0) {
      return "No transactions in transaction pool";
    }
    transactionPool.map((t) => console.log(t));
    return (
      <>
        <Typography variant="h3" component="div" gutterBottom>
          Transaction Pool
        </Typography>
        <List>
          {transactionPool.map((t) => (
            <>
              <ListItem>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="From:"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {t.txOuts[1].address}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="To:"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {t.txOuts[0].address}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={"Amount: " + t.txOuts[0].amount} />

                    {/* <ListItemText>To: {t.txOuts[0].address}</ListItemText>
                <ListItemText>Amount: {t.txOuts[0].amount}</ListItemText> */}
                  </ListItem>
                </List>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </>
    );
  };

  return (
    <div>
      <div>{renderTransactionPool()}</div>
    </div>
  );
};

export default TransactionPool;
