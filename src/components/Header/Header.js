import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
    fontSize: "34px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta",
  },
}));

const Header = () => {
  const styles = useStyles();
  return (
    <Typography className={styles.root} component="h1" variant="h5">
      Ultimate Form Tutorial
    </Typography>
  );
};

export default Header;
