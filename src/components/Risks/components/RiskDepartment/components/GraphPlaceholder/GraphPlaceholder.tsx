import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const GraphPlaceholder: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid xs={1} item>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            className={classes.number_grid}
          >
            <Grid item>
              <Typography className={classes.text}>750</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>500</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>250</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>0</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={11} item>
          <Container className={classes.graph_placeholder}>graph</Container>
        </Grid>
        <Grid xs={2} item></Grid>
        <Grid xs={10} item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={classes.months_grid}
          >
            <Grid item>
              <Typography className={classes.text}>JAN</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>FEB</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>MAR</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GraphPlaceholder;
