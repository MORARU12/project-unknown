import { Container, Grid } from "@material-ui/core";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import PredictedReasons from "./components/PredictedReasons/PredictedReasons";
import RiskDepartment from "./components/RiskDepartment/RiskDepartment";
import RiskOrganizaiton from "./components/RiskOrganisation/RiskOrganisation";
import RiskOverview from "./components/RiskOverview/RiskOverview";
import RiskTenure from "./components/RiskTenure/RiskTenure";
import TopPeople from "./components/TopPeople/TopPeople";
import useStyles from "./style";

const Risks = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item md={6}>
          <RiskOverview />
        </Grid>
        <Grid item md={6}>
          <RiskOrganizaiton />
        </Grid>
        <Grid item md={6}>
          <RiskDepartment />
        </Grid>
        <Grid item md={6}>
          <RiskTenure />
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item md={8}>
          <TopPeople />
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <Leaderboard />
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item md={12}>
          <PredictedReasons />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Risks;
