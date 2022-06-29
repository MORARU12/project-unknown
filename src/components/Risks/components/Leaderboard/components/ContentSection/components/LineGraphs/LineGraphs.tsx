import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./style";

const LineGraphs: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item className={classes.grid}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <Typography className={classes.text}>Very High</Typography>
          </Grid>
          <Grid item>
            <Container className={classes.container}>
              <Box className={classes.box}></Box>
            </Container>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.grid}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <Typography className={classes.text}>Very High</Typography>
          </Grid>
          <Grid item>
            <Container className={classes.container}>
              <Box className={classes.box}></Box>
            </Container>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.grid}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <Typography className={classes.text}>Very High</Typography>
          </Grid>
          <Grid item>
            <Container className={classes.container}>
              <Box className={classes.box}></Box>
            </Container>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.grid}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <Typography className={classes.text}>Very High</Typography>
          </Grid>
          <Grid item>
            <Container className={classes.container}>
              <Box className={classes.box}></Box>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LineGraphs;
