import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Dropdown from "./components/Dropdown/Dropdown";
import GraphPlaceholder from "./components/GraphPlaceholder/GraphPlaceholder";
import useStyles from "./style";

const AttritionLocation = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {/* Intro */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4" className={classes.h4}>
              Attrition by
            </Typography>
          </Grid>
          <Grid item>
            {/* Dropdown */}
            <Dropdown />
          </Grid>
        </Grid>

        {/* Content */}
        <GraphPlaceholder />
      </CardContent>
    </Card>
  );
};

export default AttritionLocation;
