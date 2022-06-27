import { Container, Grid } from "@material-ui/core";
import AttritionBreakout from "./components/AttritionBreakout/AttritionBreakout";
import AttritionDepartment from "./components/AttritionDepartment/AttritionDepartment";
import AttritionLocation from "./components/AttritionLocation/AttritionLocation";
import ReasonsDepartment from "./components/ReasonsDepartment/ReasonsDepartment";
import ReasonsTella from "./components/ReasonsTella/ReasonsTella";
import useStyles from "./style";

const EmployeeAttrition = () => {
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
        <Grid item md={3}>
          <AttritionBreakout />
        </Grid>
        <Grid item md={5}>
          <AttritionDepartment />
        </Grid>
        <Grid item md={4}>
          <AttritionLocation />
        </Grid>
        <Grid item md={3}>
          <ReasonsTella />
        </Grid>
        <Grid item md={5}>
          <ReasonsDepartment />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployeeAttrition;
