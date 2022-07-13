import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    backgroundColor: "#fcebfc",
    borderRadius: "20px",
    padding: "15px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    boxShadow: "none",
  },

  card_media: {
    // backgroundColor: "white",
  },

  card_content: {
    padding: "0",
  },

  card_actions_top: {
    position: "absolute",
    right: "10px",
    top: "10px",
    padding: "0",

    "& button": {
      padding: "0",
    },
  },

  card_actions_bottom: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0",
    marginTop: "25px",
  },

  navigate_icon: {
    fontSize: "35px",
  },

  h6: {
    fontSize: "18px",
    marginBottom: "5px",
  },

  see_more: {
    boxShadow: "none",
    borderRadius: "100px",

    background: "linear-gradient(to left, #f52a9b, #d566ce)",

    "& span": {
      fontSize: "11px",
      color: "white",
      textTransform: "initial",
    },
  },

  text: {
    fontSize: "14px",
  },

  span: {
    fontSize: "14px",
    color: "#9c9b9d",
  },
}));

export default useStyles;
