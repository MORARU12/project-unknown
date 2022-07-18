import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ChevronLeftRounded, ChevronRightRounded } from "@material-ui/icons";
import useStyles from "./style";

const SliderCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {/* Top Arrow Buttons */}
      <CardActions disableSpacing className={classes.card_actions_top}>
        <IconButton aria-label="left">
          <ChevronLeftRounded className={classes.navigate_icon} />
        </IconButton>
        <IconButton aria-label="right">
          <ChevronRightRounded className={classes.navigate_icon} />
        </IconButton>
      </CardActions>
      {/* Svg Intro Icon */}
      <CardMedia
        component="img"
        // height="150"
        image=""
        alt="svg icon"
        className={classes.card_media}
      />
      <Container className={classes.container}>
        {/* Card texts */}
        <CardContent className={classes.card_content}>
          <Typography variant="h6" className={classes.h6}>
            Enthusiasm is low
          </Typography>
          <Typography variant="body2">
            If you still want that bonus, go and retain them.
          </Typography>
        </CardContent>
        {/* Bottom Buttons */}
        <CardActions disableSpacing className={classes.card_actions_bottom}>
          <Button variant="contained" className={classes.see_more}>
            See more
          </Button>
          <Typography variant="body2" className={classes.text}>
            1
            <Typography component="span" className={classes.span}>
              /3
            </Typography>
          </Typography>
        </CardActions>
      </Container>
    </Card>
  );
};

export default SliderCard;
