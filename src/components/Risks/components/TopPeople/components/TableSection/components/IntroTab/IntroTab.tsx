import { Checkbox, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const IntroTab: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item md={4}>
          <Container className={classes.container}>
            <Typography className={classes.text}>Full name</Typography>
          </Container>
        </Grid>
        <Grid item md={2} className={classes.no_border}>
          <Container className={classes.intro_tab}>
            <Typography className={classes.text}>Risk</Typography>
          </Container>
        </Grid>
        <Grid item md={6} className={classes.no_border}>
          <Container className={classes.intro_tab}>
            <Typography className={classes.text}>Top 3 Drivers</Typography>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IntroTab;
