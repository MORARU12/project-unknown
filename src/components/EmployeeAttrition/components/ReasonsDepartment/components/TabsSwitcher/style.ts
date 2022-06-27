import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0",
  },
  tabs_placeholder: {
    borderRadius: "0px",
    overflow: "hidden",
    height: "100%",
    minHeight: "100%",
    width: "100%",

    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: "12px",
      height: 35,
      minHeight: 35,
      minWidth: "100%",
      width: "100%",
    },

    "& .Mui-selected": {
      backgroundColor: "#ffdde3 !Important",
      borderRadius: "100px",
      overflow: "hidden",
      minWidth: "100%",
      width: "100%",
    },
    "& .MuiTabs-indicator": {
      height: 0,
      display: "none",
      minWidth: "100%",
      width: "100%",
    },
  },

  tab: {
    minWidth: "100%",
    width: "100%",
    padding: "6px 25px",
    borderRadius: "100px",
    overflow: "hidden",
    margin: "0",
    fontSize: "12px",
  },

  text: {
    fontSize: "12px",
    color: "#464646",
  },
}));

export default useStyles;
