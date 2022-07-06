import { Box, FormControl, MenuItem, Select } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import React from "react";
import useStyles from "./styles";

const Dropdown = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: any) => {
    setValue(event.target.value as any);
    console.log(value);
  };

  return (
    <Box className={classes.box}>
      <FormControl fullWidth>
        <Select
          className={classes.select}
          value={value}
          onChange={handleChange}
          // disableUnderline
          margin="dense"
          displayEmpty
          disableUnderline
          IconComponent={KeyboardArrowDown}
          MenuProps={{
            classes: {
              paper: classes.paper,
            },
          }}
          inputProps={{
            classes: {
              root: classes.select,
            },
          }}
        >
          <MenuItem className={classes.menu_item} value={1}>
            Technical
          </MenuItem>
          <MenuItem className={classes.menu_item} value={2}>
            Store
          </MenuItem>
          <MenuItem className={classes.menu_item} value={3}>
            Got
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
