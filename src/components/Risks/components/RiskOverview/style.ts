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

  h6: {
    color: "#7C828A",
    fontSize: "16px",
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
    height: "2px",
    width: "33px",
    marginRight: "5px",
    borderRadius: "100px",
    position: "relative",
  },

  span2: {
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    backgroundColor: "#FF0000",
    height: "6px",
    width: "6px",
    margin: "auto",
    borderRadius: "100px",
  },

  box2: {
    width: "100%",
    padding: "25px 5% 0 5%",
  },
}));

export default useStyles;
