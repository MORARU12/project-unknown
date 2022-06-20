import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  intro_tab: {
    backgroundColor: "#e6e6e694",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    borderRight: "1px solid white",
  },
  intro_tab_checkbox: {
    backgroundColor: "#e6e6e694",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "50px",
    borderRight: "1px solid white",
  },
  checkbox: {
    color: "#bfbfbf94",
    marginRight: "25px",
  },
  no_border: {
    "& :last-child": {
      border: "none",
    },
  },
}));

export default useStyles;
