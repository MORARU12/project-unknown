import { CssBaseline } from "@material-ui/core";
import CostEstimate from "components/CostEstimate/CostEstimate";
import DashboardSwitcher from "components/DashboardSwitcher/DashboardSwitcher";
import EmployeeAttrition from "components/EmployeeAttrition/EmployeeAttrition";
import Forecast from "components/Forecast/Forecast";
import Risks from "components/Risks/Risks";
import Snackbar from "components/Snackbar/Snackbar";
import TableSection from "components/TableSection/TableSection";
import TodoPage from "pages/TodoPage";
import React from "react";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Risks />
    </div>
  );
};

export default App;
