import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    boxShadow: "0px 5px 10px #00000014",
    borderRadius: "20px",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  h4: {
    color: "#464646",
    fontSize: "22px",
    marginBottom: "15px",
  },

  box2: {
    width: "100%",
    padding: "25px 5% 0 5%",
  },
}));

export default useStyles;