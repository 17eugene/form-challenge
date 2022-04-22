import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../components/MainContainer/mainContainer";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import parsePhoneNumberFromString from "libphonenumber-js";
import { useData } from "../../DataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
  },
}));

const schema = yup.object().shape({
  email: yup.string().email("Not valid format!").required("Required field!"),
  phone: yup.string().matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/),
});

const StepTwo = () => {
  const styles = useStyles();
  const {data, setValues} = useData();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {email: data.email, phone: data.phone, hasPhone: data.hasPhone}
  });

  const hasPhoneNumber = watch("hasPhone");
  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (!phoneNumber) {
      return value;
    } else {
      return phoneNumber.formatInternational()
    }
  };

  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/step_three")
    setValues(data)
  };

  return (
    <MainContainer>
      <Typography component="h1" variant="h5" className={styles.root}>
        Step two
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          type="email"
          id="email"
          label="E-mail"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />

        <FormControlLabel
          control={<Checkbox defaultValue={data.hasPhone} defaultChecked={data.hasPhone} color="primary" {...register("hasPhone")} />}
        />

        {hasPhoneNumber && (
          <Input
            {...register("phone")}
            type="tel"
            label="Phone number"
            id="phone"
            error={!!errors.phone}
            helperText={errors?.phone?.message}
            onChange={(e) => {
              e.target.value = normalizePhoneNumber(e.target.value)
            }}
          />
        )}

        <SubmitButton>Next</SubmitButton>
      </Form>
    </MainContainer>
  );
};

export default StepTwo;
