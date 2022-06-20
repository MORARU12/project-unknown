import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  circle: {
    height: "63px",
    width: "63px",
    borderRadius: "100px",
    backgroundColor: "#ca90e2d1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  selected_items_content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0",
  },
  items_text: {
    marginLeft: "15px",
    fontSize: "14px",
  },
  text: {
    fontSize: "14px",
  },
}));

export default useStyles;
