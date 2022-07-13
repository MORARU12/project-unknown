import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Users from "./components/Users/Users";
import useStyles from "./style";

const InfoCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container direction="row">
        <Grid item md={8}>
          <CardContent>
            {/* Intro text */}
            <Typography variant="h5">
              This is what you
              <Typography variant="h5" display="block">
                Need to do
              </Typography>
            </Typography>
            <Users />
            <Users />
            <Users />
          </CardContent>
        </Grid>
        <Grid item md={4}>
          <Container className={classes.container}>
            <Typography variant="h3">
              50%
              <Typography variant="body2" display="block">
                Chance of attrition
              </Typography>
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InfoCard;
