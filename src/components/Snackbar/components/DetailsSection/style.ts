import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "14px",
  },
  info_circle: {
    height: "40px",
    width: "40px",
    borderRadius: "100px",
    backgroundColor: "#efefefd1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#797979",
  },
}));

export default useStyles;
