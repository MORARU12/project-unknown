import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "./style";

const AttritionBreakout = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h4" className={classes.h4}>
          Attrition Breakout
        </Typography>
        <Typography variant="h6" className={classes.h6}>
          organisation
        </Typography>
        <Box className={classes.box}>graph</Box>
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
      </CardContent>
    </Card>
  );
};

export default AttritionBreakout;
