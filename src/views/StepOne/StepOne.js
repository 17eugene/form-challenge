import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useLocation } from "react-router-dom";
import MainContainer from "../../components/MainContainer/mainContainer";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useData } from "../../DataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    textAlign: "center",
  },
}));

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Name should not contain numbers!")
    .required("Required field!"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers!")
    .required("Required field!"),
});

const StepOne = () => {
  const styles = useStyles();
  const { data, setValues } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
  });

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onSubmit = (data) => {
    navigate(`${pathname}step_two`);
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography className={styles.root} component="h2" variant="h5">
        Step one
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName")}
          type="text"
          id="firstName"
          label="First Name"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
          required
        />
        <Input
          {...register("lastName")}
          type="text"
          id="lastName"
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
          required
        />
        <SubmitButton isValid={isValid}>Next</SubmitButton>
      </Form>
    </MainContainer>
  );
};

export default StepOne;
