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
              <Typography>130</Typography>
            </Grid>
            <Grid item>
              <Typography>130</Typography>
            </Grid>
            <Grid item>
              <Typography>130</Typography>
            </Grid>
            <Grid item>
              <Typography>130</Typography>
            </Grid>
            <Grid item>
              <Typography>130</Typography>
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
          >
            <Grid item>
              <Typography>Jan</Typography>
            </Grid>
            <Grid item>
              <Typography>Feb</Typography>
            </Grid>
            <Grid item>
              <Typography>Mar</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GraphPlaceholder;
