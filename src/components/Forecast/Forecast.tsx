import { Container, Grid } from "@material-ui/core";
import React from "react";
import ForecastItem from "./components/ForecastItem/ForecastItem";
import useStyles from "./style";

const Forecast = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid
        spacing={4}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item md={3}>
          <ForecastItem />
        </Grid>
        <Grid item md={3}>
          <ForecastItem />
        </Grid>
        <Grid item md={3}>
          <ForecastItem />
        </Grid>
        <Grid item md={3}>
          <ForecastItem />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Forecast;
