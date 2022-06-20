import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  snackbar: {
    position: "fixed",
    width: "475px",
    height: "85px",
    borderRadius: "100px",
    border: "1px solid #e6e6e6",
    bottom: "5%",
    right: "0",
    left: "0",
    padding: "0",
  },
  selected_items_placeholder: {
    padding: "10px 30px 10px 10px",
    boxSizing: "border-box",
    borderRight: "1px solid #e6e6e6",
  },
}));

export default useStyles;
