import { Container, Typography } from "@material-ui/core";
import Dropdown from "./components/Dropdown/Dropdown";
import GraphPlaceholder from "./components/GraphPlaceholder/GraphPlaceholder";
import TabsSwitcher from "./components/TabsSwitcher/TabsSwitcher";
import useStyles from "./style";

const CostEstimate = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="md">
      <Typography className={classes.h6} variant="h6">
        Average
      </Typography>
      <Typography className={classes.h4} variant="h4">
        Turnover Cost Estimate
      </Typography>
      {/* Dropdown */}
      <Dropdown />

      {/* Tabs Select */}
      <TabsSwitcher />

      {/* Graph Placeholder */}
      <GraphPlaceholder />
    </Container>
  );
};

export default CostEstimate;
