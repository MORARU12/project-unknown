import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Users from "./components/Users/Users";
import useStyles from "./style";

const UsersSquare = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.card_content}>
        {/* Intro text */}
        <Typography variant="h6" className={classes.intro_text}>
          Retain
        </Typography>
        {/* Number text */}
        <Typography variant="h4" className={classes.number_text}>
          234
        </Typography>
        {/* Circle users */}
        <Users />
      </CardContent>
    </Card>
  );
};

export default UsersSquare;
