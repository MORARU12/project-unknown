import { CardMedia, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";

const Users = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.grid_container}>
      <Grid item className={classes.grid_item}>
        <CardMedia
          component="img"
          image="https://media-pictures.depop.com/b0/28601844/1075436786_a6bdfd062e0444a7b3fee15fa2869878/U1.jpg"
          alt="green iguana"
        />
      </Grid>
      <Grid item className={classes.grid_item}>
        <CardMedia
          component="img"
          image="https://media-pictures.depop.com/b0/28601844/1075436786_a6bdfd062e0444a7b3fee15fa2869878/U1.jpg"
          alt="green iguana"
        />
      </Grid>
      <Grid item className={classes.grid_item}>
        <CardMedia
          component="img"
          image="https://media-pictures.depop.com/b0/28601844/1075436786_a6bdfd062e0444a7b3fee15fa2869878/U1.jpg"
          alt="green iguana"
        />
      </Grid>
      <Grid item className={classes.grid_item_number}>
        <Typography variant="body2" className={classes.circle_text}>
          +5
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Users;
