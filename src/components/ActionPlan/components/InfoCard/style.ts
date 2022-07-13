import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0px 5px 10px #00000014",
    borderRadius: "7px",
    padding: "15px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  h4: {
    color: "#333333",
    fontSize: "22px",
  },

  h6: {
    color: "#D4D4D4",
    fontSize: "15px",
  },

  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
