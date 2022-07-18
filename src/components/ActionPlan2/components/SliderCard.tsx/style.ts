import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    backgroundColor: "#EB57A43C",
    borderRadius: "20px",
    padding: "25px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    boxShadow: "none",
    justifyContent: "space-between",
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
    fontSize: "30px",
  },

  h6: {
    fontSize: "21px",
    marginBottom: "5px",
  },

  see_more: {
    boxShadow: "none",
    borderRadius: "100px",

    background: "linear-gradient(to left, #f52a9b, #d566ce)",
    padding: "10px 25px",

    "& span": {
      fontSize: "13px",
      color: "white",
      textTransform: "initial",
    },
  },

  text: {
    fontSize: "15px",
  },

  span: {
    fontSize: "15px",
    color: "#9c9b9d",
  },

  container: {
    padding: 0,
  },
}));

export default useStyles;
