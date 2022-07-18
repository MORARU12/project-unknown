import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0px 5px 10px #00000014",
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  graph_placeholder: {
    height: "200px",
    padding: 0,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  card_content: {
    backgroundColor: "#D57FE226",
    borderRadius: "10px 10px 0 0",
    padding: "30px 0 !important",
  },

  text: {
    textAlign: "right",
  },

  text2: {
    color: "#BFBFBF",
  },
}));

export default useStyles;
