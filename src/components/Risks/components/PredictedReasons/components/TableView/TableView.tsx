import { Container, Typography } from "@material-ui/core";
import { useState } from "react";

import Table from "./components/Table/Table";
import useStyles from "./style";

const TableView: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.placeholder} maxWidth="md">
      <Typography className={classes.text}>Table view</Typography>
      <Table />
    </Container>
  );
};

export default TableView;
