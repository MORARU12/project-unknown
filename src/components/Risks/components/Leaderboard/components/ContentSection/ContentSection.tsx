import { Card, Grid, Typography } from "@material-ui/core";
import LineGraphs from "./components/LineGraphs/LineGraphs";
import TabsSwitcher from "./components/TabsSwitcher/TabsSwitcher";
import useStyles from "./style";

const ContentSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid item>
        <Typography className={classes.text}>Best Departments</Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item md={6}>
            <TabsSwitcher />
          </Grid>
          <Grid item md={6}>
            <LineGraphs />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContentSection;
