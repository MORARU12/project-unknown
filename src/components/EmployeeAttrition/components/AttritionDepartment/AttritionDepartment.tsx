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

const AttritionDepartment = () => {
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
              Attrition by
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
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Container>
                        <Typography className={classes.text}>
                          <Typography
                            component="span"
                            display="block"
                            className={classes.span}
                          ></Typography>
                          Yes
                        </Typography>
                      </Container>
                    </Grid>
                    <Grid item>
                      <Container>
                        <Typography className={classes.text}>
                          <Typography
                            component="span"
                            display="block"
                            className={classes.span}
                          ></Typography>
                          No
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

export default AttritionDepartment;
