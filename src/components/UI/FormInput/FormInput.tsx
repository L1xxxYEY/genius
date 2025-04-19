
import { ErrorMessage, SFormInput } from "./FormInput.styled";

interface IFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  errorMessage?: string;
}

export const FormInput = ({
  isError,
  errorMessage,
  ...props
}: IFormInputProps) => {
  return (
    <div>
      <SFormInput {...props} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};