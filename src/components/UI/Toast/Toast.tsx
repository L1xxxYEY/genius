import { SToast } from "./Toast.styled";


export const Toast = ({ message }: { message: string }) => {
  return <SToast>{message}</SToast>;
};
