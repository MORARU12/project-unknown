import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Dropdown from "./components/Dropdown/Dropdown";
import TabsSwitcher from "./components/TabsSwitcher/TabsSwitcher";
import useStyles from "./style";

const ReasonsDepartment = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {/* Intro */}
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography variant="h4" className={classes.h4}>
              Reasons by
            </Typography>
          </Grid>
          <Grid item>
            {/* Dropdown */}
            <Dropdown />
          </Grid>
        </Grid>
        {/* Content */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {/* Tabs */}
          <Grid item md={6}>
            <TabsSwitcher />
          </Grid>
          {/* Graph */}
          <Grid item md={6}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Box className={classes.box}>graph</Box>
              </Grid>
              <Grid item>
                <Box className={classes.box2}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Container className={classes.container}>
                        <Typography className={classes.text}>
                          <Typography
                            component="span"
                            display="block"
                            className={classes.span}
                          ></Typography>
                          Salary
                        </Typography>
                      </Container>
                    </Grid>
                    <Grid item>
                      <Container className={classes.container}>
                        <Typography className={classes.text}>
                          <Typography
                            component="span"
                            display="block"
                            className={classes.span}
                          ></Typography>
                          Long Hours
                        </Typography>
                      </Container>
                    </Grid>
                    <Grid item>
                      <Container className={classes.container}>
                        <Typography className={classes.text}>
                          <Typography
                            component="span"
                            display="block"
                            className={classes.span}
                          ></Typography>
                          Manager
                        </Typography>
                      </Container>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ReasonsDepartment;
