import { Box, Container, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./style";

const DashboardSwitcher: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ width: "100%" }}>
        <Box className={classes.tabs_placeholder}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab className={classes.tab} label="Option 1" />
            <Tab className={classes.tab} label="Option 2" />
            <Tab className={classes.tab} label="Option 3" />
          </Tabs>
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardSwitcher;
