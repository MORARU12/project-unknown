import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "none",
  },

  cardMedia: {
    borderRadius: "100px",
    border: "2px solid #EB57A4",
    boxSizing: "border-box",
  },

  text: {
    fontSize: "14px",
    color: "#464646",
    marginLeft: "10px",
  },
}));

export default useStyles;
