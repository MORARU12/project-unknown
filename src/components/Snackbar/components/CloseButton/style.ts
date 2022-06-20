import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#797979",
    margin: "auto",
    fontSize: "40px",
  },
  close: {
    fontSize: "35px",
  },
}));

export default useStyles;
