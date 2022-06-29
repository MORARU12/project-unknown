import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  placeholder: {
    marginTop: "25px",
  },
  container: {
    backgroundColor: "white",
    border: "1px solid #e6e6e6",
    borderRadius: "5px",
    overflow: "hidden",
    padding: 0,
    marginTop: "25px",
    height: "fit-content",
    minHeight: "fit-content",
  },

  text: {
    fontSize: "18px",
    color: "#464646",
  },
}));

export default useStyles;
