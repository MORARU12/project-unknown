import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid_container: {
    width: "fit-content",
    marginTop: "15px",
    position: "relative",
    "& :first-child": {
      marginLeft: "0",
    },
  },

  grid_item: {
    height: "25px",
    width: "25px",
    borderRadius: "100px",
    border: "2px solid #e37ee7",
    overflow: "hidden",
    marginLeft: "-5px",
    position: "relative",
  },

  grid_item_number: {
    height: "25px",
    width: "25px",
    borderRadius: "100px",
    border: "2px solid white",
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#ffe6f6",
    display: "flex",
    justifyContent: "center",
    marginLeft: "-5px",
    position: "relative",
  },

  circle_text: {
    color: "#ff64b4",
    fontSize: "9px",
  },
}));

export default useStyles;
