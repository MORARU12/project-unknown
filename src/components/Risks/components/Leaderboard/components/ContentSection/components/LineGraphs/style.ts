import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "14px",
    color: "#7C828A",
    width: "100%",
    textAlign: "left",
  },

  span: {
    backgroundColor: "#FF0000",
    height: "14px",
    width: "14px",
    marginRight: "5px",
    borderRadius: "4px",
    position: "relative",
  },

  container: {
    backgroundColor: "#7388A95A",
    height: "8px",
    width: "100%",
    display: "flex",
    borderRadius: "100px",
    marginTop: "3px",
    overflow: "hidden",
    position: "relative",
  },

  box: {
    backgroundColor: "#0FD52B",
    height: "8px",
    width: "35%",
    display: "flex",
    borderRadius: "100px",
    overflow: "hidden",
    position: "absolute",
    margin: "auto",
    left: "0",
    top: "0",
    bottom: "0",
  },

  grid: {
    marginBottom: "15px",
  },
}));

export default useStyles;
