import React from "react";
import Send from "./send";
import Dashboard from "./dashboard";
import TransactionPool from "./transactionPool";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <div sx={{ p: 3 }}>{children}</div>}
    </div>
  );
}

const MainContent = ({ value }) => {
  return (
    <div>
      <TabPanel value={value} index={0}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Send />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TransactionPool />
      </TabPanel>
    </div>
  );
};

export default MainContent;
