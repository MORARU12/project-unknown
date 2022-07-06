import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: "11px 15px 9px 19px",
    backgroundColor: "#F8F8F8",
    borderRadius: "100px",
    border: 0,
    outline: "none",
    "&:svg": {
      fontSize: "30px",
    },
  },

  select: {
    outline: "none",
    fontSize: "12px",
    color: "#464646",
    borderColor: "transparent",
    "&:before": {
      borderColor: "transparent",
    },
    "&:after": {
      borderColor: "transparent",
    },
    paddingRight: "6px",
  },

  paper: {
    background: "white",
    borderRadius: "15px",
    boxShadow: "0px 5px 20px #00000029",
    padding: " 0px 8px",
  },

  menu_item: {
    backgroundColor: "white",
    borderRadius: "100px",
    "&.Mui-selected": {
      backgroundColor: "#FFE7F5",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#FFE7F5",
    },
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
}));

export default useStyles;
