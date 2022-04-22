import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TableCell,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { InsertDriveFile } from "@material-ui/icons";
import { Link } from "react-router-dom";
import MainContainer from "../../components/MainContainer/mainContainer";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useData } from "../../DataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
  },
  link: {
    margin: theme.spacing(1, 0, 2),
    textAlign: "center",
    display: "block",
    textDecoration: "none",
    fontSize: "16px",
    color: "#ccac3",
  },
  table: {
    margin: theme.spacing(0, 0, 2),
  },
  tableHead: {
    fontSize: "16px",
    fontWeight: "700",
  },
}));

const Result = () => {
  const styles = useStyles();

  const { data } = useData();
  const { files } = data;
  const entries = Object.entries(data).filter(
    (entry) => entry[0] !== "files" && entry[0] !== "hasPhone"
  );

  return (
    <MainContainer>
      <Typography component="h1" variant="h5" className={styles.root}>
        Result
      </Typography>
      <TableContainer className={styles.table} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHead}>Field</TableCell>
              <TableCell className={styles.tableHead} align="right">
                Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component="h2" variant="h6">
            Uploaded files
          </Typography>
          <List>
            {files.map((file, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={file.name} />
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Link className={styles.link} to="/">
        Start over
      </Link>
      <SubmitButton>Submit</SubmitButton>
    </MainContainer>
  );
};

export default Result;
