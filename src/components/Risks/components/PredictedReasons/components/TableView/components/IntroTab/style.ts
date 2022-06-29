import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  intro_tab: {
    backgroundColor: "#F2F2F2",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "35px",
    borderRight: "1px solid white",
  },
  intro_tab_checkbox: {
    backgroundColor: "#F2F2F2",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "35px",
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
  text: {
    color: "#464646",
    fontSize: "12px",
  },
}));

export default useStyles;
