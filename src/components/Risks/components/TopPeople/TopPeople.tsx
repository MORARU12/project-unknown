import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import GraphPlaceholder from "./components/GraphPlaceholder/GraphPlaceholder";
import TableSection from "./components/TableSection/TableSection";
import useStyles from "./style";

const TopPeople = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {/* Intro */}
        <Typography variant="h4" className={classes.h4}>
          Top 5 people
        </Typography>

        <Typography variant="h6" className={classes.h6}>
          Most likely to leave in the next 3 months
        </Typography>

        {/* Content */}
        <Box className={classes.box2}>
          <TableSection />
        </Box>

        <CardActions>
          <Button size="small" variant="contained" className={classes.btn}>
            View all
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default TopPeople;
