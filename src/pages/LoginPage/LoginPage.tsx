import { useNavigate } from "react-router-dom";
import { Title } from "../../components/UI/Title/Title";
import { SLoginPage } from "./LoginPage.style";
import * as yup from "yup";
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginUserMutation } from "../../store/API/authApi";
import { FormInput } from "../../components/UI/FormInput/FormInput";
import { FormButton } from "../../components/UI/FormButton/FormButton";
interface IloginForm {
  userEmail: string;
  userPassword: string;
}

const loginScheme = yup.object({
  userEmail: yup
    .string()
    .email("Enter a valid email address.")
    .required("Required field"),
  userPassword: yup
    .string()
    .min(5, "At least 5 digits!")
    .required("Required field"),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser, { data: userData, isSuccess }] = useLoginUserMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginScheme),
    mode: "onBlur",
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/mainPage");
    }
  }, [isSuccess, navigate, userData]);

  const onLoginSubmit: SubmitHandler<IloginForm> = (data) => {
    const payload = {
      email: data.userEmail,
      password: data.userPassword,
    };
    loginUser(payload);
  };

  return (
    <SLoginPage>
      <Title titleText="Sign In" titleType="h1" />

      <div className="links">
        <a href="#" className="link facebook">
          <i className="fab fa-facebook-f"></i>
          Sign in with Facebook
        </a>
        <a href="#" className="link twitter">
          <i className="fab fa-twitter"></i>
          Sign in with Twitter
        </a>
        <a href="#" className="link google">
          <i className="fab fa-google-plus-g"></i>
          Sign in with Google
        </a>
      </div>

      <form action="#" onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <label>
              Login or email
              <FormInput
                isError={errors.userEmail ? true : false}
                errorMessage={errors.userEmail?.message}
                type="email"
                placeholder="Enter your email"
                {...field}
              />
            </label>
          )}
        />

        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <label>
              Password
              <FormInput
                isError={errors.userPassword ? true : false}
                errorMessage={errors.userPassword?.message}
                placeholder="Password"
                type="password"
                {...field}
              />
            </label>
          )}
        />

        <FormButton buttonText="Log in" isDisabled={false} />
      </form>

      <p>
        Don't have an account?{" "}
        <a href="#" onClick={() => navigate("/registrationPage")}>
          Sign up here
        </a>
      </p>
    </SLoginPage>
  );
};
