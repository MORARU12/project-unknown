import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0px 5px 10px #00000014",
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },

  card_content: {
    padding: "15px 20px !important",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  intro_text: {
    color: "#464646",
    fontSize: "17px",
  },

  number_text: {
    color: "#464646",
    marginTop: "15px",
  },

  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#BFBFBF",
    // fontSize: "14px",
  },
}));

export default useStyles;
