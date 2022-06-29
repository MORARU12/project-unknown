import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    color: "#bfbfbf94",
    marginRight: "25px",
  },
  element_tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "66px",
    borderRight: "1px solid #e6e6e6",
  },
  element_tab_checkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "66px",
    borderRight: "1px solid #e6e6e6",
  },
  box: {
    padding: "4px 25px",
    backgroundColor: "#ffe9a8",
    borderRadius: "9px",
  },
  grid_item: {
    borderTop: "1px solid #e6e6e6",
  },
  no_border: {
    "& :last-child": {
      border: "none",
    },
  },

  text: {
    color: "#464646",
    fontSize: "12px",
  },
}));

export default useStyles;
