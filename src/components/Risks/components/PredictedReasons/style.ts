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

  box: {
    width: "100%",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  text: {
    fontSize: "9px",
    color: "#707070",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  span: {
    backgroundColor: "#FF0000",
    height: "14px",
    width: "14px",
    marginRight: "5px",
    borderRadius: "4px",
    position: "relative",
  },

  container: {
    width: "90%",
    borderRadius: "0",
    padding: "0",
    marginTop: "10px",
  },

  box2: {
    width: "100%",
    padding: "25px 0% 0 0%",
  },
}));

export default useStyles;
