import { Container, IconButton } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import useStyles from "./style";

const CloseButton = () => {
  const classes = useStyles();
  return (
    <Container className={classes.button}>
      <IconButton>
        <CloseOutlined className={classes.close} />
      </IconButton>
    </Container>
  );
};

export default CloseButton;
