import { Container, Grid } from "@material-ui/core";
import InfoCard from "./components/InfoCard/InfoCard";
import SliderCard from "./components/SliderCard.tsx/SliderCard";

const ActionPlan = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item md={9}>
          <InfoCard />
        </Grid>
        <Grid item md={3}>
          <SliderCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ActionPlan;
