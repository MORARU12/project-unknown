import { Container, Grid } from "@material-ui/core";
import AddSquare from "./components/AddSquare/AddSquare";
import RiskCard from "./components/RiskCard/RiskCard";
import InfoCard from "./components/RiskCard/RiskCard";
import SliderCard from "./components/SliderCard.tsx/SliderCard";
import TextSquare from "./components/TextSquare/TextSquare";
import UsersSquare from "./components/UsersSquare/UsersSquare";
import useStyles from "./style";

const ActionPlan = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={3}
      >
        {/* First card */}
        <Grid item md={5}>
          <RiskCard />
        </Grid>
        {/* Column cards */}
        <Grid item md={2} className={classes.grid_item}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item md={12} className={classes.grid_item}>
              <UsersSquare />
            </Grid>
            <Grid item md={12} className={classes.grid_item}>
              <TextSquare />
            </Grid>
          </Grid>
        </Grid>
        {/* Column cards */}
        <Grid item md={2} className={classes.grid_item}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item md={12} className={classes.grid_item}>
              <UsersSquare />
            </Grid>
            <Grid item md={12} className={classes.grid_item}>
              <AddSquare />
            </Grid>
          </Grid>
        </Grid>
        {/* Last cards */}
        <Grid item md={3} className={classes.grid_item}>
          <SliderCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ActionPlan;
