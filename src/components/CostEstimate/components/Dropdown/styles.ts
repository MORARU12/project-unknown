import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: "15px 15px 12px 19px",
    margin: "25px 0px 10px 0px",
    backgroundColor: "#ffdde3",
    borderRadius: "100px",
    border: 0,
    outline: "none",
    "&:svg": {
      fontSize: "34px",
    },
  },

  select: {
    outline: "none",
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
