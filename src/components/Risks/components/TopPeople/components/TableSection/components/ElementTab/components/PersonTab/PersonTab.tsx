import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "./style";

const PersonTab: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <CardMedia
            component="img"
            height="38px"
            image="https://media-pictures.depop.com/b0/28601844/1075436786_a6bdfd062e0444a7b3fee15fa2869878/U1.jpg"
            alt="green iguana"
            className={classes.cardMedia}
          />
        </Grid>
        <Grid item>
          <Typography className={classes.text}>Giovanni Giorgio</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PersonTab;
