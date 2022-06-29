import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "9px",
    color: "#464646",
  },

  bar: {
    height: "16px",
    width: "8px",
    backgroundColor: "#BEE9C7",
    borderRadius: "100px",
    margin: "0px 1px",
  },

  bar_selected: {
    height: "16px",
    width: "16px",
    backgroundColor: "#BEE9C7",
    borderRadius: "4px",
    margin: "0px 1px",
  },
}));

export default useStyles;
