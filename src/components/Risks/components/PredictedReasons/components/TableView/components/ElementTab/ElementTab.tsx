import { Box, Checkbox, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";

const ElementTab: React.FC = () => {
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
            <Typography className={classes.text}>Environment</Typography>
          </Container>
        </Grid>
        <Grid item md={5}>
          <Container className={classes.element_tab}>
            <Box className={classes.box}>
              <Typography className={classes.text}>Neutral</Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item md={2} className={classes.no_border}>
          <Container className={classes.element_tab}>
            <Typography className={classes.text}>5.10%</Typography>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ElementTab;
