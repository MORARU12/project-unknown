import { Container } from "@material-ui/core";
import { useState } from "react";

import Table from "./components/Table/Table";
import useStyles from "./style";

const TableSection: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return <Table />;
};

export default TableSection;
