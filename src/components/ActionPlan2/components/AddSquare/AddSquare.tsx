import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddRounded } from "@material-ui/icons";
import useStyles from "./style";

const AddSquare = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.card_content}>
        <CardActions disableSpacing className={classes.card_actions_top}>
          <IconButton>
            <AddRounded className={classes.navigate_icon} />
          </IconButton>
        </CardActions>
        {/* Body text  */}
        <Typography variant="body2" className={classes.text}>
          See more devices
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AddSquare;
