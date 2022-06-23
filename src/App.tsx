import { CssBaseline } from "@material-ui/core";
import CostEstimate from "components/CostEstimate/CostEstimate";
import DashboardSwitcher from "components/DashboardSwitcher/DashboardSwitcher";
import Forecast from "components/Forecast/Forecast";
import Snackbar from "components/Snackbar/Snackbar";
import TableSection from "components/TableSection/TableSection";
import TodoPage from "pages/TodoPage";
import React from "react";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <CostEstimate />
    </div>
  );
};

export default App;
