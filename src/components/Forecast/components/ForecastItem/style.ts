import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0px 5px 10px #00000014",
    borderRadius: "10px",
    padding: "15px 20px",
  },
  intro: {
    fontSize: "15px",
    color: "#D4D4D4",
  },
  intro_span: {
    fontSize: "16px",
    color: "#333333",
  },
  intro_container: {
    marginBottom: "10px",
    padding: "0",
  },
  users: {
    fontSize: "14px",
    color: "#707070",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  users_icon: {
    color: "#707070",
    fontSize: "25px",
    top: "6px",
    right: "2px",
    position: "relative",
  },

  chances: {
    fontSize: "12px",
    color: "#707070",
    height: "18px",
  },
  chances_span: {
    color: "white",
    backgroundColor: "#EB57A4",
    borderRadius: "10px 0px 0px 10px",
    fontSize: "12px",
    height: "18px",
    padding: "0px 5px 0px 8px",
    marginRight: "10px",
  },
  btn_container: {
    height: "18px",
    width: "18px",
    padding: "0",
    position: "relative",
  },
  btn: {
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
    top: "0",
    margin: "auto",
    height: "18px",
    width: "18px",
  },
}));

export default useStyles;
