import { forwardRef } from "react";
import { TextField } from "@material-ui/core";

const Input = forwardRef((props, ref) => {
  return (
    <TextField
      {...props}
      inputRef={ref}
      variant="outlined"
      margin="normal"
      fullWidth
    />
  );
});

export default Input;
