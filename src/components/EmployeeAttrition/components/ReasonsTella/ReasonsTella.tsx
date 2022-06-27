import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "./style";

const ReasonsTella = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h4" className={classes.h4}>
          Reasons (organisation)
          <br />
          <br />
          Telleal
        </Typography>
        <Box className={classes.box}>graph</Box>
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
      </CardContent>
    </Card>
  );
};

export default ReasonsTella;
