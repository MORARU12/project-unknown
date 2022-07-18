import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    background: "linear-gradient(to left, #f52a9b, #d566ce)",
    boxShadow: "0px 5px 10px #00000014",
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  card_content: {
    padding: "15px 20px !important",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
  },

  card_actions_top: {
    padding: "0",
    display: "flex",
    justifyContent: "center",

    "& button": {
      padding: "0",
    },
  },

  navigate_icon: {
    fontSize: "60px",
    color: "white",
  },

  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    margin: "0 10px",
    textAlign: "center",
  },
}));

export default useStyles;
