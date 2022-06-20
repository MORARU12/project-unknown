import { Container, Grid } from "@material-ui/core";
import CloseButton from "./components/CloseButton/CloseButton";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import ItemsSelected from "./components/ItemsSelected/ItemsSelected";
import useStyles from "./style";

const SnackBar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.snackbar}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item sm={10}>
          <Container className={classes.selected_items_placeholder}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Grid item>
                {/* Items selected section  */}
                <ItemsSelected />
              </Grid>
              <Grid item>
                {/* Details button section  */}
                <DetailsSection />
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid item sm={2}>
          {/* Close button  */}
          <CloseButton />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SnackBar;
