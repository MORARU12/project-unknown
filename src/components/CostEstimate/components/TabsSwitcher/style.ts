import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0",
  },
  tabs_placeholder: {
    borderRadius: "0px",
    overflow: "hidden",
    height: 35,
    minHeight: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    margin: "25px 0px 25px 0px",

    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: 12,
      height: 35,
      minHeight: 35,
    },

    "& .Mui-selected": {
      backgroundColor: "#ffdde3 !Important",
      borderRadius: "100px",
      overflow: "hidden",
    },
    "& .MuiTabs-indicator": {
      height: 0,
    },
  },

  tab: {
    minWidth: "fit-content",
    width: "fit-content",
    padding: "6px 25px",
    backgroundColor: "#efefef",
    borderRadius: "100px",
    overflow: "hidden",
    margin: "0px 10px",
  },
}));

export default useStyles;
