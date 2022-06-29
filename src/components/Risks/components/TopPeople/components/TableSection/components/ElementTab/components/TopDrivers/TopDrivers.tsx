import { Grid } from "@material-ui/core";
import useStyles from "./style";

const TopDrivers: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item md={4}></Grid>
      <Grid item md={4}></Grid>
      <Grid item md={4}></Grid>
    </Grid>
  );
};

export default TopDrivers;
