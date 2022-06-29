import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  intro_tab: {
    backgroundColor: "#F2F2F2",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    borderRight: "1px solid white",
  },
  container: {
    backgroundColor: "#F2F2F2",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    borderRight: "1px solid white",
  },
  no_border: {
    "& :last-child": {
      border: "none",
    },
    "& :nth-child(2)": {
      border: "none",
    },
  },

  text: {
    color: "#464646",
    fontSize: "12px",
  },
}));

export default useStyles;
