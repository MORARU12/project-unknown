import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "65%",
    borderRadius: "0",
    padding: "0",
    marginTop: "25px",
  },
  graph_placeholder: {
    // backgroundColor: "#ffdde3",
    height: "200px",
    paddding: "0",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  number_grid: {
    height: "100%",
  },
  months_grid: {
    marginTop: "15px",
  },
  text: {
    fontSize: "12px",
    color: "#7C828A",
  },
  text2: {
    fontSize: "16px",
    color: "#7C828A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  span: {
    backgroundColor: "#727AD0",
    height: "10px",
    width: "10px",
    marginRight: "5px",
    borderRadius: "100px",
  },
}));

export default useStyles;
