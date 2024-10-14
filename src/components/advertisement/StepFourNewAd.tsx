import classes from "./style/StepFourNewAd.module.scss";
import { Category } from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";
import BaseButton from "../base/BaseButton";
import { advertisementActions } from "@/store/advertisement-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import AdvertisementFormSubHeader from "./AdvertisementFormSubHeader";
import dynamic from "next/dynamic";
const BaseLocationPicker = dynamic(() => import("../base/BaseLocationPicker"), {
  ssr: false,
});
const StepFourNewAd = () => {
  const dispatch = useDispatch();
  const { t9n } = useTranslation();
  const advertisement = useSelector(
    (state: RootState) => state.advertisement.advertisement
  );
  console.log(advertisement);

  return (
    <div className={classes.formLayout}>
      <AdvertisementFormSubHeader />
      <div
        className={
          " flex flex-col  items-center justify-center gap-8 " +
          classes.locationBox
        }
      >
        <div className={"flex flex-row gap-3 items-center"}>
          <Category className={classes.icon} />
          <h1 className={classes.headerTitle}>
            {t9n.location + " "}
            {t9n.apartment}
          </h1>
        </div>
        <BaseLocationPicker
          zoom={12}
          center={[35.7219, 51.3347]}
          geoData={[{ lat: 35.7219, lng: 51.3347 }]}
        />
        <div className={classes.footer}>
          <BaseButton
            size="lg"
            square={true}
            title={t9n.back}
            color="outline"
            hasBlock={true}
            onClickHandler={() =>
              dispatch(advertisementActions.setNewAdStep(3))
            }
          />
          <BaseButton
            size="lg"
            square={true}
            title={t9n.continue}
            color="primary"
            hasBlock={true}
            onClickHandler={() => {
              dispatch(advertisementActions.setNewAdStep(6));
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default StepFourNewAd;
