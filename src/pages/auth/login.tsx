import classes from "./style/Login.module.scss";
import AuthLayout from "@/view/layout/AuthLayout";
import locked from "../../assets/images/locked 1.png";
import Image from "next/image";
import { Minus } from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";
import dynamic from "next/dynamic";

const LoginForm = dynamic(import("@/components/auth/LoginForm"), {
  ssr: false,
});
const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
export default Login;
