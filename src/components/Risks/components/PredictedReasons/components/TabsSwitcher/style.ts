import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabs_placeholder: {
    // backgroundColor: "white",
    borderRadius: "0px",
    overflow: "hidden",
    height: 35,
    minHeight: 35,
    marginTop: "15px",

    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: "10px",
      height: 30,
      minHeight: 30,
    },

    "& .Mui-selected": {
      backgroundColor: "#FFE7F5",
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
