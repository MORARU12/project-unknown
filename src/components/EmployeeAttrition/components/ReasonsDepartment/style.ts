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
    fontSize: "18px",
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
    fontSize: "16px",
    color: "#7C828A",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },

  span: {
    backgroundColor: "#727AD0",
    height: "10px",
    width: "10px",
    marginRight: "5px",
    borderRadius: "100px",
  },

  box2: {
    width: "100%",
    paddingTop: "15px",
  },

  container: {
    width: "160px",
  },
}));

export default useStyles;
