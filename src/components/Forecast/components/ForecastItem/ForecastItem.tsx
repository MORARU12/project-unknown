import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowDown, PersonOutline } from "@material-ui/icons";
import React from "react";
import useStyles from "./style";

const ForecastItem = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Container className={classes.intro_container}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography className={classes.intro}>
              TEAM
              <Typography
                component="span"
                display="block"
                className={classes.intro_span}
              >
                Male
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.users}>
              <Typography component="span">
                <PersonOutline className={classes.users_icon} />
              </Typography>
              583
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography className={classes.chances}>
            <Typography component="span" className={classes.chances_span}>
              5.6x
            </Typography>
            More chances to leave
          </Typography>
        </Grid>
        <Grid item>
          <Container className={classes.btn_container}>
            <IconButton className={classes.btn}>
              <KeyboardArrowDown />
            </IconButton>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ForecastItem;
