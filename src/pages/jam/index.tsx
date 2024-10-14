import LayoutWithoutFooter from "@/view/layout/LayoutWithoutFooter";
import classes from "@/pages/jam/style/Jam.module.scss";
import JamImg from "@/assets/images/jam.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "@/providers/locale-provider";
import Link from "next/link";
import { useState } from "react";

const Jam = () => {
  const { t9n } = useTranslation();
  const [message, setMessage] = useState("عدد وارد شده باید 16 رقم باشد");
  const [inputValue, setInputValue] = useState<number>();

  const isInputTyped =
    inputValue != undefined && !(String(inputValue).length == 16);
  const isLengthCorrect = String(inputValue).length == 16;
  const isNaN = !Boolean(inputValue);

  return (
    <LayoutWithoutFooter>
      <div className={classes.container}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={classes.card + " bg-Withe-45 dark:bg-Nero"}>
            <div className={classes.textInput}>
              <div className={classes.header}>
                <h2 className={classes.heading + " text-black dark:text-white"}>
                  {t9n.enterDigitCodeOfJam}
                </h2>
                <p className={classes.description}>{t9n.determiningJam}</p>
              </div>

              <input
                type="number"
                className={`${classes.input} ${
                  isInputTyped ? classes.inputError : ""
                }`}
                value={inputValue}
                onChange={(e) => setInputValue(() => +e.target.value)}
              />
              <span className={classes.textError}>
                {isInputTyped ? message : ""}
              </span>
            </div>
            <div className={classes.imageWrapper}>
              <Image
                src={JamImg}
                alt="Map Illustration"
                className={classes.image}
              />
            </div>
            <button
              className={`${classes.button} ${
                !isLengthCorrect ? classes.btnDisabled : ""
              }`}
              disabled={!isLengthCorrect || isNaN}
            >
              {t9n.find}
            </button>
          </div>
        </form>
      </div>
    </LayoutWithoutFooter>
  );
};
export default Jam;
