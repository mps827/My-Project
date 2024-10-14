import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import BaseButton from "../base/BaseButton";
import AdvertisementFormStepper from "./AdvertisementStepper";

const AdvertisementFormSubHeader = () => {
  return (
    <div
      className={
        "flex items-center justify-between px-12 py-4 self-stretch z-0 bg-White dark:bg-Raisin-Black border-y border-clicked "
      }
    >
      <div className={"pageNavigator h-6"}>
        <Link href={"/"}>
          <BaseButton
            title={"صفحه اصلی"}
            RightIcon={
              <ArrowRight2
                variant={"Linear"}
                className={"w-6 h-6 text-Blue-800"}
              />
            }
            size={"sm"}
            square={true}
          />
        </Link>
      </div>
      <AdvertisementFormStepper />
      <div
        className={"adActions flex align-center justify-center gap-4 w-72 h-12"}
      >
        <BaseButton
          title={"ذخیره پیش نویس"}
          color={"primary"}
          square={true}
          size={"sm"}
        />
        <BaseButton
          title={"مشاهده جزئیات"}
          color={"outline"}
          square={true}
          size={"sm"}
        />
      </div>
    </div>
  );
};

export default AdvertisementFormSubHeader;
