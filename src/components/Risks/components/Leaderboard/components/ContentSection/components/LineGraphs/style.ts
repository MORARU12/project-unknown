import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "14px",
    color: "#7C828A",
    width: "100%",
    textAlign: "left",
    marginBottom: "5px",
  },

  span: {
    backgroundColor: "#FF0000",
    height: "14px",
    width: "14px",
    marginRight: "5px",
    borderRadius: "4px",
    position: "relative",
  },

  grid: {
    marginBottom: "15px",
  },

  progress: {
    backgroundColor: "#7388A95A",
    borderRadius: "100px",
    overflow: "hidden",
    height: "8px",

    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#0FD52B",
      borderRadius: "100px",
    },
  },
}));

export default useStyles;
