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
    <Container className={classes.container} maxWidth="sm">
      <Box sx={{ width: "100%" }}>
        <Box className={classes.tabs_placeholder}>
          <Tabs value={value} onChange={handleChange} orientation="vertical">
            <Tab
              className={classes.tab}
              label={
                <React.Fragment>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography className={classes.text}>
                        Technical
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.text}>78</Typography>
                    </Grid>
                  </Grid>
                </React.Fragment>
              }
            />
            <Tab
              className={classes.tab}
              label={
                <React.Fragment>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography className={classes.text}>Support</Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.text}>52</Typography>
                    </Grid>
                  </Grid>
                </React.Fragment>
              }
            />
            <Tab
              className={classes.tab}
              label={
                <React.Fragment>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography className={classes.text}>Sales</Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.text}>48</Typography>
                    </Grid>
                  </Grid>
                </React.Fragment>
              }
            />
            <Tab
              className={classes.tab}
              label={
                <React.Fragment>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography className={classes.text}>Lorem</Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.text}>31</Typography>
                    </Grid>
                  </Grid>
                </React.Fragment>
              }
            />
          </Tabs>
        </Box>
      </Box>
    </Container>
  );
};

export default DashboardSwitcher;
