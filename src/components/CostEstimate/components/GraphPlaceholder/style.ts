import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    borderRadius: "0",
    padding: "0",
  },
  graph_placeholder: {
    backgroundColor: "#ffdde3",
    height: "275px",
    paddding: "0",
    borderRadius: "10px",
  },
  number_grid: {
    height: "100%",
  },
  months_grid: {
    marginTop: "15px",
  },
}));

export default useStyles;
