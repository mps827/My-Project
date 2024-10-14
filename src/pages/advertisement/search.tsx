import classes from "./style/Search.module.scss";
import DefaultLayout from "@/view/layout/DefaultLayout";
import AdvertisementCard from "@/components/core/AdvertisementCard";
import AdvertisementImage from "../../assets/images/advertisement.png";
import AdvertisementFilterBox from "@/components/advertisement/AdvertisementFilterBox";
import { useEffect, useState } from "react";
import AdvertisementSortBox from "@/components/advertisement/AdvertisementSortBox";
import { StaticImageData } from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Search = () => {
  const search = useSelector((state: RootState) => state.search);

  const [adsList, setAdsList] = useState<Array<tempAdType>>([]);

  interface tempAdType {
    image: string | StaticImageData;
    title: string;
    price?: string;
    address?: string;
    rooms?: string;
    surface?: string;
  }

  useEffect(() => {
    setAdsList([
      {
        image: AdvertisementImage,
        title: "۱۱۲ متر نوساز کلید نخورده ، ساری ۱۱۲ متر نوساز کلید نخورده ، ",
        price: "5,000,000,000 تومان",
        address: "تهران ، دربند",
        rooms: "۲ خوابه",
        surface: "89 متر",
      },
      {
        image: AdvertisementImage,
        title: "۱۱۲ متر نوساز کلید نخورده ، ساری ۱۱۲ متر نوساز کلید نخورده ، ",
        price: "5,000,000,000 تومان",
        address: "تهران ، دربند",
        rooms: "۲ خوابه",
        surface: "89 متر",
      },
      {
        image: AdvertisementImage,
        title: "۱۱۲ متر نوساز کلید نخورده ، ساری ۱۱۲ متر نوساز کلید نخورده ، ",
        price: "5,000,000,000 تومان",
        address: "تهران ، دربند",
        rooms: "۲ خوابه",
        surface: "89 متر",
      },
    ]);
  }, []);

  return (
    <DefaultLayout>
      <div
        className={
          "container mx-auto flex flex-row gap-5 " + classes.advertisements
        }
      >
        <AdvertisementFilterBox />
        <div className={"flex flex-col " + classes.result}>
          <AdvertisementSortBox />
          <div
            className={
              "flex justify-center items-center gap-4 " +
              (search.selectedFilters.length == 0 ? "mb-2" : "my-2")
            }
          >
            {adsList.map((ad, index) => {
              return (
                <AdvertisementCard
                  key={index}
                  image={ad.image}
                  rooms={ad.rooms}
                  title={ad.title}
                  address={ad.address}
                  price={ad.price}
                  surface={ad.surface}
                />
              );
            })}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Search;
