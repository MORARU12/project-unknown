import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  element_tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "64px",
    borderRight: "1px solid #F5F5F5",
    padding: " 0px 15px",
  },

  person_tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "64px",
    borderRight: "1px solid #F5F5F5",
    padding: " 0px 15px",
  },
  box: {
    padding: "4px 25px",
    backgroundColor: "#ffe9a8",
    borderRadius: "9px",
  },
  grid_item: {
    borderTop: "1px solid #F5F5F5",
  },
  no_border: {
    "& :last-child": {
      border: "none",
    },
  },

  chances: {
    fontSize: "12px",
    color: "#707070",
  },
  chances_span: {
    color: "white",
    backgroundColor: "#EB57A4",
    borderRadius: "10px 0px 0px 10px",
    fontSize: "9px",
    height: "18px",
    padding: "2px 5px 2px 7px",
    marginRight: "2px",
    border: "1px solid #EB57A4 !important",
  },

  chances_span_2: {
    color: "#EB57A4",
    borderRadius: "0px 10px 10px 0px",
    fontSize: "9px",
    height: "18px",
    padding: "2px 5px 2px 7px",
    border: "1px solid #EB57A4 !important",
    boxSizing: "border-box",
  },
}));

export default useStyles;
