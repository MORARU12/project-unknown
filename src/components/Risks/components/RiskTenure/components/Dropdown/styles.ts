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
}));

export default useStyles;
