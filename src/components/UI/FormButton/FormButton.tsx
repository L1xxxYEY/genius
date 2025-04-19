import { SFormButton } from "./FormButton.styled";


interface IFormButtonProps {
  buttonText: string;
  buttonClick?: () => void;
  isDisabled: boolean;
}

export const FormButton = ({
  buttonText,
  buttonClick,
  isDisabled,
}: IFormButtonProps) => {
  return (
    <SFormButton disabled={isDisabled} onClick={buttonClick}>
      {buttonText}
    </SFormButton>
  );
};