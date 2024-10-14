import ProfileLayout from "@/view/layout/ProfileLayout";
import classes from "./style/Profile.module.scss";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import ProfileAdvertisements from "@/components/profile/ProfileAdvertisments";
import { useTranslation } from "@/providers/locale-provider";
const Profile = () => {
  const { t9n } = useTranslation();
  return (
    <ProfileLayout>
      <div className={classes.profile}>
        <div className={" flex w-1/4"}>
          <ProfileSidebar />
        </div>
        <div className={" flex w-3/4 "}>
          <ProfileAdvertisements title={t9n.myAds} />
        </div>
      </div>
    </ProfileLayout>
  );
};
export default Profile;
