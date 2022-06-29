import { Container, Grid } from "@material-ui/core";
import React from "react";
import ElementTab from "../ElementTab/ElementTab";
import IntroTab from "../IntroTab/IntroTab";
import useStyles from "./style";

const Table = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        {/* Intro Tab */}
        <IntroTab />

        {/* Element Tab */}
        <ElementTab />
      </Grid>
    </Container>
  );
};

export default Table;
