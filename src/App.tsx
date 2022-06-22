import { CssBaseline } from "@material-ui/core";
import Snackbar from "components/Snackbar/Snackbar";
import TableSection from "components/TableSection/TableSection";
import TodoPage from "pages/TodoPage";
import React from "react";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <TableSection />
    </div>
  );
};

export default App;
