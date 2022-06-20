import { Grid, IconButton, Typography } from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import React from "react";
import useStyles from "./style";

const DetailsSection = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Grid item>
        <IconButton className={classes.info_circle}>
          <InfoOutlined />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography className={classes.text}>Details</Typography>
      </Grid>
    </Grid>
  );
};

export default DetailsSection;
