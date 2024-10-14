import classes from "./style/SignUp.module.scss";
import AuthLayout from "@/view/layout/AuthLayout";
import locked from "../../assets/images/locked 1.png";
import Image from "next/image";
import { Minus } from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";
import dynamic from "next/dynamic";
const SignUpForm = dynamic(import("@/components/auth/SignUpForm"), {
  ssr: false,
});
const SignUp = () => {
  const { t9n } = useTranslation();
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};
export default SignUp;
