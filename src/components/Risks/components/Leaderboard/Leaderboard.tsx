import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import ContentSection from "./components/ContentSection/ContentSection";
import useStyles from "./style";

const Leaderboard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {/* Intro */}
        <Typography variant="h4" className={classes.h4}>
          LeaderBoard
        </Typography>

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
              <ContentSection />
            </Grid>
            <Grid item md={6}>
              <ContentSection />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
