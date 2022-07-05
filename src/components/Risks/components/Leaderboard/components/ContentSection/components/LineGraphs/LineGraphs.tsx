import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import LinearProgress from "@material-ui/core/LinearProgress";

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
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <Typography className={classes.text}>Very High</Typography>
          </Grid>
          <Grid item>
            <LinearProgress
              className={classes.progress}
              variant="determinate"
              value={50}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.grid}>
        <Grid
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <Typography className={classes.text}>Very High</Typography>
          </Grid>
          <Grid item>
            <LinearProgress
              className={classes.progress}
              variant="determinate"
              value={40}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.grid}>
        <Grid
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <Typography className={classes.text}>Very High</Typography>
          </Grid>
          <Grid item>
            <LinearProgress
              className={classes.progress}
              variant="determinate"
              value={70}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.grid}>
        <Grid
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <Typography className={classes.text}>Very High</Typography>
          </Grid>
          <Grid item>
            <LinearProgress
              className={classes.progress}
              variant="determinate"
              value={20}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LineGraphs;
