import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FileInput from "../../components/FileInput/FileInput";
import Form from "../../components/Form/Form";
import MainContainer from "../../components/MainContainer/mainContainer";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useData } from "../../DataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
  },
}));

const StepThree = () => {
    const {data, setValues} = useData()
  const { control, handleSubmit } = useForm({
      defaultValues: {
          files: data.files
      }
  });
  const styles = useStyles();
  const navigate = useNavigate();

  const onSubmit = (data) => {
      navigate("/result")
      setValues(data)
  }

  return (
    <MainContainer>
      <Typography component="h1" variant="h5" className={styles.root}>Step three</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <SubmitButton>Next</SubmitButton>
      </Form>
    </MainContainer>
  );
};

export default StepThree;
