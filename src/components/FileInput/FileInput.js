import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { CloudUpload, InsertDriveFile } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: "10px",
    marginTop: theme.spacing(2),
  },
  icon: {
    marginTop: theme.spacing(1),
    color: "#888",
    fontSize: "36px",
  },
}));

const FileInput = ({ control, name }) => {
  const styles = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                className={styles.root}
                variant="outlined"
                {...getRootProps()}
              >
                <CloudUpload />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop file(s) or click to select file(s)</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((file, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={file.name} secondary={file.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    ></Controller>
  );
};

// const FileInput = ({ control, name }) => {

//     const styles = useStyles();

//   return (
//     <Controller
//       control={control}
//       name={name}
//       defaultValue={[]}
//       render={({
//           field: {onChange, onBlur, value}
//        }) => (
//         <>
//           <Dropzone onDrop={onChange}>
//             {({ getRootProps, getInputProps }) => (
//               <Paper className={styles.root} variant="outlined" {...getRootProps()}>
//                 <CloudUpload className={styles.icon} />
//                 <input name={name} onBlur={onBlur} {...getInputProps()} />
//                 <p>Drag 'n' drop files here or click to select file(s)</p>
//               </Paper>
//             )}
//           </Dropzone>
//           <List>
//             {
//             value.map((file, index) => (
//               <ListItem key={index}>
//                 <ListItemIcon>
//                   <InsertDriveFile />
//                 </ListItemIcon>
//                 <ListItemText primary={file.name} secondary={file.size} />
//               </ListItem>
//             ))
//             }
//           </List>
//         </>
//       )}
//     />
//   );
// };

export default FileInput;
