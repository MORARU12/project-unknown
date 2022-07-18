import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "./style";

const RiskCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container direction="column">
        {/* Graph */}
        <Grid item>
          <Container className={classes.graph_placeholder}>graph</Container>
        </Grid>
        {/* Text card content */}
        <Grid item>
          <CardContent className={classes.card_content}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              {/* Text 1 */}
              <Grid item>
                <Typography variant="h3" className={classes.text}>
                  74%
                  <Typography variant="body2" display="block">
                    Risk level
                  </Typography>
                </Typography>
              </Grid>
              {/* Text 2 */}
              <Grid item md={6}>
                <Typography variant="h6">
                  This risk is high
                  <Typography
                    variant="body2"
                    className={classes.text2}
                    display="block"
                  >
                    The people in your department are about to leave soon
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default RiskCard;
