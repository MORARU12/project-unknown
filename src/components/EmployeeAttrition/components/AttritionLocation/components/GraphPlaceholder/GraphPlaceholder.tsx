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
              <Typography className={classes.text}>130</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>130</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>130</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>130</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>130</Typography>
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
            justifyContent="center"
            alignItems="center"
            className={classes.months_grid}
          >
            <Grid item>
              <Container>
                <Typography className={classes.text2}>
                  <Typography
                    component="span"
                    display="block"
                    className={classes.span}
                  ></Typography>
                  Yes
                </Typography>
              </Container>
            </Grid>
            <Grid item>
              <Container>
                <Typography className={classes.text2}>
                  <Typography
                    component="span"
                    display="block"
                    className={classes.span}
                  ></Typography>
                  No
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GraphPlaceholder;
