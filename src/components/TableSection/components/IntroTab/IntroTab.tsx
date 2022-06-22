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
        <Grid item md={5}>
          <Container className={classes.intro_tab_checkbox}>
            <Checkbox className={classes.checkbox} />
            <Typography>Drivers</Typography>
          </Container>
        </Grid>
        <Grid item md={5}>
          <Container className={classes.intro_tab}>
            <Typography>Impact</Typography>
          </Container>
        </Grid>
        <Grid item md={2} className={classes.no_border}>
          <Container className={classes.intro_tab}>
            <Typography>Percentage</Typography>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IntroTab;
