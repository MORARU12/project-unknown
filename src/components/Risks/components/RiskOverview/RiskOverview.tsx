import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import GraphPlaceholder from "./components/GraphPlaceholder/GraphPlaceholder";
import useStyles from "./style";

const RiskOverview = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {/* Intro */}
        <Typography variant="h4" className={classes.h4}>
          Risk Overview
        </Typography>

        <Typography variant="h6" className={classes.h6}>
          15 April - 21 April
        </Typography>

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
                >
                  <Typography
                    component="span"
                    display="block"
                    className={classes.span2}
                  ></Typography>
                </Typography>
                Very High
              </Typography>
            </Grid>{" "}
            <Grid item>
              <Typography className={classes.text}>
                <Typography
                  component="span"
                  display="block"
                  className={classes.span}
                >
                  <Typography
                    component="span"
                    display="block"
                    className={classes.span2}
                  ></Typography>
                </Typography>
                High
              </Typography>
            </Grid>{" "}
            <Grid item>
              <Typography className={classes.text}>
                <Typography
                  component="span"
                  display="block"
                  className={classes.span}
                >
                  <Typography
                    component="span"
                    display="block"
                    className={classes.span2}
                  ></Typography>
                </Typography>
                Medium
              </Typography>
            </Grid>{" "}
            <Grid item>
              <Typography className={classes.text}>
                <Typography
                  component="span"
                  display="block"
                  className={classes.span}
                >
                  <Typography
                    component="span"
                    display="block"
                    className={classes.span2}
                  ></Typography>
                </Typography>
                Low
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>
                <Typography
                  component="span"
                  display="block"
                  className={classes.span}
                >
                  <Typography
                    component="span"
                    display="block"
                    className={classes.span2}
                  ></Typography>
                </Typography>
                Very Low
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RiskOverview;
