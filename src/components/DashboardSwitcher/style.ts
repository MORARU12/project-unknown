import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabs_placeholder: {
    // backgroundColor: "white",
    borderRadius: "0px",
    overflow: "hidden",
    height: 35,
    minHeight: 35,

    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: 13,
      height: 35,
      minHeight: 35,
    },

    "& .Mui-selected": {
      backgroundColor: "#ffdde3",
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
  },
}));

export default useStyles;
