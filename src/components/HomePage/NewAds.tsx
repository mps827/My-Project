// components/NewAds.tsx
import React from "react";
import NewAdCard from "../../pages/newAd/NewAdCard";
import AdvertisementImg from "@/assets/images/advertisement.png";
import style from "./style/NewAds.module.scss";
import AdvertisementImgK1 from "@/assets/images/K1.png";
import AdvertisementImgK2 from "@/assets/images/K2.png";
import AdvertisementImgK3 from "@/assets/images/K3.png";
import AdvertisementImgK4 from "@/assets/images/K4.png";
import { CloseSquare } from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";

const NewAds: React.FC = () => {
  const { t9n } = useTranslation();
  const CloseSquareicon = () => {
    return <CloseSquare></CloseSquare>;
  };

  const adsData = [
    {
      id: 1,
      image: AdvertisementImg,
      icon: CloseSquareicon(),
    },
    {
      id: 2,
      image: AdvertisementImgK1,
      icon: CloseSquareicon(),
    },
    {
      id: 3,
      image: AdvertisementImgK2,
      icon: CloseSquareicon(),
    },
    {
      id: 4,
      image: AdvertisementImgK3,
      icon: CloseSquareicon(),
    },
    {
      id: 5,
      image: AdvertisementImgK4,
      icon: CloseSquareicon(),
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.header}>
        <span className={style.txt + " text-black dark:text-White"}>
          {t9n.advertisementImages}
        </span>
      </div>
      <div className={style.adsCard}>
        {adsData.map((ad, index) => {
          return (
            <div key={index} className={style.card}>
              <NewAdCard image={ad.image} icon={ad.icon} id={ad.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewAds;
