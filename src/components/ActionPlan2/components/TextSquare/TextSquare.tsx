import { Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "./style";

const TextSquare = () => {
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
        {/* Body text  */}
        <Typography variant="body2" className={classes.text}>
          People in Sales department
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TextSquare;
