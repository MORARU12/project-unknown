import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Dropdown from "./components/Dropdown/Dropdown";
import GraphPlaceholder from "./components/GraphPlaceholder/GraphPlaceholder";
import TableView from "./components/TableView/TableView";
import TabsSwitcher from "./components/TabsSwitcher/TabsSwitcher";
import useStyles from "./style";

const Switcher = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {/* Intro */}
        <Container className={classes.container}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4" className={classes.h4}>
                Predicted reasons
              </Typography>
            </Grid>
            <Grid item>
              <Dropdown />
            </Grid>
            <Grid item>
              <TabsSwitcher />
            </Grid>
          </Grid>
        </Container>
        {/* Content */}
        {/* Content */}
        <Box className={classes.box2}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Grid item md={6}>
              <TableView />
            </Grid>
            <Grid item md={6}>
              {/* <ContentSection /> */}
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Switcher;
