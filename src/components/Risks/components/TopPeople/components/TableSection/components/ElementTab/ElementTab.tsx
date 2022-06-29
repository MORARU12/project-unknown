import { Box, Checkbox, Container, Grid, Typography } from "@material-ui/core";
import PersonTab from "./components/PersonTab/PersonTab";
import ProgressBar from "./components/ProgressBar/ProgressBar";
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
        <Grid item md={4}>
          <Container className={classes.person_tab}>
            <PersonTab />
          </Container>
        </Grid>
        <Grid item md={2} className={classes.no_border}>
          <Container className={classes.element_tab}>
            <ProgressBar />
          </Container>
        </Grid>
        <Grid item md={6} className={classes.no_border}>
          <Container className={classes.element_tab}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <Typography className={classes.chances}>
                  <Typography component="span" className={classes.chances_span}>
                    Team Size
                  </Typography>
                  <Typography
                    component="span"
                    className={classes.chances_span_2}
                  >
                    23%
                  </Typography>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.chances}>
                  <Typography component="span" className={classes.chances_span}>
                    Team Size
                  </Typography>
                  <Typography
                    component="span"
                    className={classes.chances_span_2}
                  >
                    23%
                  </Typography>
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.chances}>
                  <Typography component="span" className={classes.chances_span}>
                    Team Size
                  </Typography>
                  <Typography
                    component="span"
                    className={classes.chances_span_2}
                  >
                    23%
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ElementTab;
