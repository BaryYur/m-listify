import { UserAuthType } from "@/types";

export const useSignIn = () => {};

export type SignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type ExtendedSignUpData = SignUpData & Record<"authType", UserAuthType>;

export const useSignUp = () => {};
