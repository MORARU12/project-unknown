import { Box, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const Switcher: React.FC<any> = (props) => {
  const classes = useStyles();
  const { value, handleChange } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* Intro Tab */}
      <Grid item>
        <Typography>Explainable AI</Typography>
      </Grid>
      {/* Element Tab */}
      <Grid>
        <Box sx={{ width: "100%" }}>
          <Box className={classes.tabs_placeholder}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className={classes.tabs}
            >
              <Tab className={classes.tab} label="Chart" />
              <Tab className={classes.tab} label="Table" />
            </Tabs>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Switcher;
