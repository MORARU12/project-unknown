import { Container, Grid } from "@material-ui/core";
import ElementTab from "./components/ElementTab/ElementTab";
import IntroTab from "./components/IntroTab/IntroTab";
import useStyles from "./style";

const TableSection = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="md">
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        {/* Intro Tab */}
        <IntroTab />

        {/* Element Tab */}
        <ElementTab />
      </Grid>
    </Container>
  );
};

export default TableSection;
