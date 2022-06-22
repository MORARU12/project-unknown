import { Container } from "@material-ui/core";
import { useState } from "react";

import Switcher from "./components/Switcher/Switcher";
import Table from "./components/Table/Table";
import useStyles from "./style";

const TableSection: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.placeholder} maxWidth="md">
      <Switcher value={value} handleChange={handleChange} />

      {value === 0 ? <Table /> : value === 1 && <div>chart section</div>}
    </Container>
  );
};

export default TableSection;
