import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "./style";

const ProgressBar: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography className={classes.text}>Very High</Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={2}>
            <Box className={classes.bar}></Box>
          </Grid>
          <Grid item md={2}>
            <Box className={classes.bar}></Box>
          </Grid>
          <Grid item md={2}>
            <Box className={classes.bar}></Box>
          </Grid>
          <Grid item md={2}>
            <Box className={classes.bar}></Box>
          </Grid>
          <Grid item md={4}>
            <Box className={classes.bar_selected}></Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProgressBar;
