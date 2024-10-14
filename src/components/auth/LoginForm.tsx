import classes from "./style/LoginForm.module.scss";
import Image from "next/image";
import logo from "../../assets/images/logo/Logo.png";
import BaseInput from "../base/BaseInput";
import { useTranslation } from "@/providers/locale-provider";
import { useEffect, useState } from "react";
import { UserEdit, Call, Edit2, Google, Lock } from "iconsax-react";
import validator from "validator";
import BaseButton from "../base/BaseButton";
import { AxiosError, AxiosResponse } from "axios";
import { RepoFactory } from "../../baseRepository/Factory";
import { useDispatch } from "react-redux";
import { loadingActions } from "@/store/loading-slice";
import { errorActions } from "@/store/error-slice";
import { useRouter } from "next/router";
import { isValidIranianNationalCode, getMobiles } from "@/core/helpers/regx";
import { passwordValidator } from "@/types/sharedTypes";
import Link from "next/link";
import { authActions } from "@/store/auth-slice";

const authRepository = () => RepoFactory.get("auth");
const LoginForm = () => {
  const router = useRouter();
  const { t9n } = useTranslation();
  const dispatch = useDispatch();
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [mobilePhoneNumberInput, setMobilePhoneNumberInput] = useState("");
  const [nationalIdInput, setNationalIdInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errors, setErrors] = useState({
    mobilePhoneNumber: false,
    password: false,
  });

  const CallIcon = () => {
    return <Call />;
  };
  const LockIcon = () => {
    return <Lock />;
  };

  const isValidEmail = (email: string) => {
    return validator.isEmail(email);
  };

  const inputOnChangeHandler = (
    field: string,
    e: React.FormEvent<HTMLInputElement>
  ) => {
    switch (field) {
      case "mobilePhoneNumber":
        setMobilePhoneNumberInput(e.currentTarget.value);
        break;
      case "password":
        setPasswordInput(e.currentTarget.value);
        break;

      default:
        break;
    }
    setErrors({ ...errors, [field]: false });
  };
  const validateForm = () => {
    const newErrors = {
      mobilePhoneNumber: mobilePhoneNumberInput.length === 0,
      password: !passwordValidator(passwordInput),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };
  const Login = () => {
    if (!validateForm()) {
      return;
    }
    let body = {
      loginIdentifier: mobilePhoneNumberInput,
      password: passwordInput,
    };
    authRepository()
      .login(body)
      .then((res: AxiosResponse<any>) => {
        if (res.status === 200 || res.status === 201) {
          console.log(res.data.email);
          
          localStorage.setItem("access_token", res.data.token);
          dispatch(authActions.setUserInfo(res.data.email));
          dispatch(authActions.setIsAuthenticated(true));
          setTimeout(() => {
            linkToLoginPage();
          }, 1000);
        }
      });
  };
  const linkToLoginPage = () => {
    router.push("/");
  };

  return (
    <div className={classes.loginForm}>
      <div className={classes.headerTitle}>
        <h1 className="text-2xl text-black dark:text-white ">
          {t9n.login_to_account}
        </h1>
      </div>
      <Image src={logo} alt="logo" className={classes.logo} />
      <div className={classes.form}>
        <div className="w-full input-with-counter">
          <BaseInput
            placeholder={t9n.mobilePhoneNumber}
            name="mobilePhoneNumber"
            handleChange={(e) => inputOnChangeHandler("mobilePhoneNumber", e)}
            invalid={errors.mobilePhoneNumber}
            invalidMsg={
              mobilePhoneNumberInput.length === 0
                ? "لطفا شماره موبایل خود را وارد نمایید."
                : "تعداد ارقام شماره موبایل صحیح نمیباشد."
            }
            // noColor={true}
            value={mobilePhoneNumberInput}
            rightIcon={CallIcon()}
          />
          <div className="show-input-length">
            <span>{mobilePhoneNumberInput.length}/11</span>
          </div>
        </div>
        <div className="w-full input-with-counter">
          <div className="show-input-length">
            <span>{nationalIdInput.length}/10</span>
          </div>
        </div>

        <BaseInput
          placeholder={t9n.password}
          name="password"
          handleChange={(e) => inputOnChangeHandler("password", e)}
          invalid={errors.password}
          invalidMsg={
            passwordInput.length === 0
              ? "لطفا رمز عبور خود را وارد نمایید."
              : "رمز عبور میباست حداقل 8 رقم ، شامل حرف کوچک انگلیسی ، حرف بزرگ انگلیسی ، نماد ها و اعداد باشد"
          }
          rightIcon={LockIcon()}
          type="password"
          value={passwordInput}
        />
      </div>

      <div className={classes.formButtons}>
        <div className={classes.btnSection}>
          <BaseButton
            title={t9n.login}
            color="primary"
            hasBlock={true}
            onClickHandler={(e) => Login()}
          ></BaseButton>
        </div>

        <Link
          className={classes.sigupLink + " text-white "}
          href="/auth/signup"
        >
          {t9n.create_account}
        </Link>
      </div>
    </div>
  );
};
export default LoginForm;
