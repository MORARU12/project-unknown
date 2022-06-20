import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const ItemsSelected = () => {
  const classes = useStyles();

  return (
    <Container className={classes.selected_items_content}>
      <Box className={classes.circle}>
        <Typography variant={"h4"}>4</Typography>
      </Box>
      <Typography className={classes.items_text}>
        items
        <Typography component="span" display="block" className={classes.text}>
          selected
        </Typography>
      </Typography>
    </Container>
  );
};

export default ItemsSelected;
