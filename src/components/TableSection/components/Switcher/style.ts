import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabs_placeholder: {
    backgroundColor: "#f1f1f1",
    borderRadius: "5px",
    overflow: "hidden",
    padding: "5px 12px",

    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: 11,
    },

    "& .Mui-selected": {
      backgroundColor: "white",
      borderRadius: "5px",
      overflow: "hidden",
    },
    "& .MuiTabs-indicator": {
      height: 0,
    },
  },

  tabs: {
    height: "fit-content",
    minHeight: "fit-content",
  },

  tab: {
    minWidth: "fit-content",
    width: "fit-content",
    height: 25,
    minHeight: 25,
  },
}));

export default useStyles;
