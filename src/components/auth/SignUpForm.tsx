import classes from "./style/SignUpForm.module.scss";
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
const authRepository = () => RepoFactory.get("auth");
const SignUpForm = () => {
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
    firstName: false,
    lastName: false,
    nationalId: false,
    mobilePhoneNumber: false,
    email: false,
    password: false,
  });

  const UserIcon = () => {
    return <UserEdit />;
  };
  const CallIcon = () => {
    return <Call />;
  };
  const GoogleIcon = () => {
    return <Google />;
  };
  const EditIcon = () => {
    return <Edit2 />;
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
      case "firstName":
        setFirstNameInput(e.currentTarget.value);
        break;
      case "lastName":
        setLastNameInput(e.currentTarget.value);
        break;
      case "nationalId":
        if (e.currentTarget.value.length <= 10) {
          setNationalIdInput(e.currentTarget.value);
        }
        break;
      case "mobilePhoneNumber":
        setMobilePhoneNumberInput(e.currentTarget.value);
        break;
      case "email":
        setEmailInput(e.currentTarget.value);
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
      firstName: firstNameInput.length === 0,
      lastName: lastNameInput.length === 0,
      mobilePhoneNumber: mobilePhoneNumberInput.length === 0,
      nationalId: nationalIdInput.length === 0,
      email: !isValidEmail(emailInput),
      password: !passwordValidator(passwordInput),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };
  const SignUp = () => {
    if (!validateForm()) {
      return;
    }
    let body = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      nationalId: nationalIdInput,
      mobilePhoneNumber: mobilePhoneNumberInput,
      email: emailInput,
      password: passwordInput,
    };
    authRepository()
      .register(body)
      .then((res: AxiosResponse<any>) => {
        linkToLoginPage();
        console.log(res.data);

        dispatch(
          errorActions.setError({
            message: " ثبت نام با موفقیت ایجاد شد.",
            statusCode: 200,
          })
        );
      });
  };
  const linkToLoginPage = () => {
    router.push("/auth/login");
  };

  return (
    <div className={classes.signUpForm}>
      <div className={classes.headerTitle}>
        <h1 className="text-2xl text-White font-bold">{t9n.register_now}</h1>
        <h3 className="text-xl text-White font-normal">{t9n.Complete_info}</h3>
      </div>
      <Image src={logo} alt="logo" className={classes.logo} />
      <div className={classes.form}>
        <BaseInput
          placeholder={t9n.firstName}
          name="first name"
          handleChange={(e) => inputOnChangeHandler("firstName", e)}
          rightIcon={UserIcon()}
          value={firstNameInput}
          invalid={errors.firstName}
          invalidMsg="لطفا نام خود را وارد نمایید."
        />
        <BaseInput
          placeholder={t9n.lastName}
          name="last name"
          handleChange={(e) => inputOnChangeHandler("lastName", e)}
          invalid={errors.lastName}
          invalidMsg="لطفا نام خانوادگی خود را وارد نمایید."
          value={lastNameInput}
          rightIcon={UserIcon()}
        />
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
          <BaseInput
            placeholder={t9n.nationalId}
            name="nationalId"
            value={nationalIdInput}
            handleChange={(e) => inputOnChangeHandler("nationalId", e)}
            invalid={errors.nationalId}
            invalidMsg="لطفا کد ملی خود را وارد نمایید."
            rightIcon={EditIcon()}
          />
          <div className="show-input-length">
            <span>{nationalIdInput.length}/10</span>
          </div>
        </div>
        <BaseInput
          placeholder={t9n.email}
          name="email"
          handleChange={(e) => inputOnChangeHandler("email", e)}
          invalid={errors.email}
          invalidMsg={
            emailInput.length === 0
              ? "لطفا ایمیل خود را وارد نمایید."
              : "فرمت ایمیل صحیح نمباشد."
          }
          rightIcon={GoogleIcon()}
          value={emailInput}
        />
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
            title={t9n.Register}
            color="primary"
            hasBlock={true}
            onClickHandler={(e) => SignUp()}
          ></BaseButton>
        </div>
        <div className={classes.btnSection}>
          <BaseButton
          color={"white"}
            title={t9n.login}
            hasBlock={true}
            onClickHandler={(e) => linkToLoginPage()}
          ></BaseButton>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
