import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Dropdown from "./components/Dropdown/Dropdown";
import GraphPlaceholder from "./components/GraphPlaceholder/GraphPlaceholder";
import useStyles from "./style";

const RiskDepartment = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {/* Intro */}
        <Container className={classes.container}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4" className={classes.h4}>
                Risk by Department
              </Typography>
            </Grid>
            <Grid item>
              <Dropdown />
            </Grid>
          </Grid>
        </Container>
        {/* Content */}
        <GraphPlaceholder />

        <Box className={classes.box2}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography className={classes.text}>
                <Typography
                  component="span"
                  display="block"
                  className={classes.span}
                ></Typography>
                Very High
              </Typography>
            </Grid>{" "}
            <Grid item>
              <Typography className={classes.text}>
                <Typography
                  component="span"
                  display="block"
                  className={classes.span}
                ></Typography>
                High
              </Typography>
            </Grid>{" "}
            <Grid item>
              <Typography className={classes.text}>
                <Typography
                  component="span"
                  display="block"
                  className={classes.span}
                ></Typography>
                Medium
              </Typography>
            </Grid>{" "}
            <Grid item>
              <Typography className={classes.text}>
                <Typography
                  component="span"
                  display="block"
                  className={classes.span}
                ></Typography>
                Low
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>
                <Typography
                  component="span"
                  display="block"
                  className={classes.span}
                ></Typography>
                Very Low
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RiskDepartment;
