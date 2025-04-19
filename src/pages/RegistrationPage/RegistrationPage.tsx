import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRegisterUserMutation } from "../../store/API/authApi";
import { SRegistrationPage } from "./RegistrationPage.styled";
import { FormInput } from "../../components/UI/FormInput/FormInput";
import { FormButton } from "../../components/UI/FormButton/FormButton";

interface IRegistrationForm {
  userName: string;
  userEmail: string;
  userPhone: string;
  userPassword: string;
  userCity: string;
}

const registrationScheme = yup.object({
  userName: yup
    .string()
    .min(2, "At least 2 letters!")
    .matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, "Name can contain letters only")
    .required("Required field"),
  userEmail: yup
    .string()
    .email("Enter a valid email address")
    .required("Required field"),
  userCity: yup
    .string()
    .required("Required field")
    .matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, "City can contain letters only"),
  userPhone: yup
    .string()
    .matches(
      /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Enter a valid phone number."
    )
    .required("Required field"),
  userPassword: yup
    .string()
    .min(5, "Minimum of 5 digits!")
    .required("Required field"),
});

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [registerUser, { data: userData, isSuccess }] =
    useRegisterUserMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationScheme),
    mode: "onBlur",
    defaultValues: {
      userName: "",
      userEmail: "",
      userCity: "",
      userPhone: "",
      userPassword: "",
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate, userData]);

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    const payload = {
      name: data.userName,
      email: data.userEmail,
      phone_number: data.userPhone,
      password: data.userPassword,
      user_city: data.userCity,
    };
    registerUser(payload);
  };

  return (
    <SRegistrationPage>
      <h1>Sign Up</h1>
      <form action="#" onSubmit={handleSubmit(onRegistrationSubmit)}>
        <Controller
          name="userName"
          control={control}
          render={({ field }) => (
            <FormInput
              isError={errors.userName ? true : false}
              errorMessage={errors.userName?.message}
              placeholder="First name and last name"
              type="text"
              {...field}
            />
          )}
        />

        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <FormInput
              isError={errors.userEmail ? true : false}
              errorMessage={errors.userEmail?.message}
              placeholder="Your email"
              type="text"
              {...field}
            />
          )}
        />

        <Controller
          name="userCity"
          control={control}
          render={({ field }) => (
            <FormInput
              isError={errors.userCity ? true : false}
              errorMessage={errors.userCity?.message}
              placeholder="Enter your city"
              type="text"
              {...field}
            />
          )}
        />

        <Controller
          name="userPhone"
          control={control}
          render={({ field }) => (
            <FormInput
              isError={errors.userPhone ? true : false}
              errorMessage={errors.userPhone?.message}
              placeholder="Phone number"
              type="tel"
              {...field}
            />
          )}
        />

        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <FormInput
              isError={errors.userPassword ? true : false}
              errorMessage={errors.userPassword?.message}
              placeholder="Password"
              type="password"
              {...field}
            />
          )}
        />

        <FormButton buttonText="Sign up" isDisabled={false} />
      </form>
    </SRegistrationPage>
  );
};