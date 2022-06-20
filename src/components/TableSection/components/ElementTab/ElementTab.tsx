import { Box, Checkbox, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";

const ElementTab = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.grid_item}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item md={5}>
          <Container className={classes.element_tab_checkbox}>
            <Checkbox className={classes.checkbox} />
            <Typography>Environment</Typography>
          </Container>
        </Grid>
        <Grid item md={5}>
          <Container className={classes.element_tab}>
            <Box className={classes.box}>
              <Typography>Neutral</Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item md={2} className={classes.no_border}>
          <Container className={classes.element_tab}>
            <Typography>5.10%</Typography>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ElementTab;
