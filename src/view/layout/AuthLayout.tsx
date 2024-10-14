import classes from "./style/AuthLayout.module.scss";
import LoginFooter from "../../components/core/LoginFooter";
import loginPageImage from "../../assets/images/loginPageImage.png";
import MobileFooter from "@/components/core/MobileFooter";
import locked from "../../assets/images/locked 1.png";
import { Minus } from "iconsax-react";
import Image from "next/image";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactPortal,
} from "react";
import { useTranslation } from "@/providers/locale-provider";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

type Props = {
  children: ReactNode;
};
type PropsWithChildren<P> = P & { children?: ReactNode };

const AuthLayout = ({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const { t9n } = useTranslation();
  return (
    <div className={classes.authLayout}>
      <Image
        className={classes.image}
        src={loginPageImage}
        alt="loginPageImage"
      />
      <div className={classes.content}>
        <div className={classes.authForm}>
          <div className={classes.formContainer}>{children}</div>
          <div
            className={classes.lockSection + " bg-White dark:bg-Approx-Nero"}
          >
            <h1>
              <span className="text-Black dark:text-White text-2xl">
                متاپینگ پلتفرمی{" "}
              </span>
              <span className="text-Blue-Primary text-2xl">امن</span>
            </h1>
            <div className={classes.lock + " bg-White dark:bg-Nero"}></div>
            <Image
              className={classes.logoImage}
              src={locked}
              alt="locked image"
            />
            <div className="flex flex-row gap-1 justify-center items-center">
              <span className="text-Black dark:text-White text-xl">
                {t9n.Terms_and_Conditions}
              </span>
              <Minus className={classes.icon} />
              <span className="text-Black dark:text-White text-xl">
                {t9n.Support}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer + " bg-White dark:bg-Nero"}>
        <LoginFooter />
      </div>
      <div className={classes.mobileFooter + " bg-White dark:bg-Nero"}>
        <MobileFooter />
      </div>
    </div>
  );
};
export default AuthLayout;
