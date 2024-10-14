import classes from "./style/Header.module.scss";
import { Profile, Location } from "iconsax-react";
import BaseButton from "../base/BaseButton";
import { useTranslation } from "@/providers/locale-provider";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "../../assets/images/logo/MainLogo.png";
import Modal from "../base/Modal";
import CitySelectionBox from "../base/CitySelectionBox";
import ProfileDropDown from "../HomePage/ProfileDropDown";
import NavLink from "../base/NavLink";
const Header = () => {
  const profileDropDownRef = useRef<HTMLDivElement>(null);
  const { t9n, updateLocale } = useTranslation();
  const [locationModalFlag, setLocationModalFlag] = useState<boolean>(false);
  const [profileDropDownFlag, setProdileDropDownFlag] =
    useState<boolean>(false);
  const [hState, sethState] = useState("top");

  useEffect(() => {
    var lastVal = 0;
    console.log(hState);

    window.onscroll = function () {
      console.log("test test");

      let y = window.scrollY;
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0) {
        sethState("top");
      }
      lastVal = y;
    };
  });
  const citySelectionHandler = (status: boolean) => {
    setLocationModalFlag(status);
  };
  const handleClickOutside = (event: MouseEvent) => {
    const { target } = event;
    if (
      profileDropDownRef.current &&
      !profileDropDownRef.current.contains(target as HTMLElement)
    ) {
      setProdileDropDownFlag(false);
    }
  };

  const CitySelector: React.FC<{}> = () => {
    return (
      <div className="flex gap-2 items-center ">
        <div
          className={
            " flex flex-row gap-1 items-center cursor-pointer border-2 border-slate-300 dark:border-Dove-Gray hover:bg-slate-100 dark:hover:bg-Approx-Nero transition-colors p-2 rounded-3xl "
          }
          onClick={() => setLocationModalFlag(true)}
        >
          <span
            className={
              " text-Dove_Grey dark:text-White " + classes.categoryTitle
            }
          >
            تهران
          </span>
          <Location
            className={
              " w-5 h-5 items-center justify-center text-Dove_Grey dark:text-white"
            }
          />
        </div>
      </div>
    );
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [profileDropDownRef]);

  return (
    <div
      className={" bg-white dark:bg-Raisin-Black " + classes.headerContariner}
    >
      <div className={"flex justify-between items-center " + classes.headerRow}>
        <div className="flex items-center gap-8 justify-between self-stretch ">
          <Link
            href="/"
            className=" flex items-center justify-center flex-nowrap"
          >
            <Image className={classes.logo} src={Logo} alt="logo" />
          </Link>
          <CitySelector />
          <NavLink name={t9n.tools} />
          <NavLink name={t9n.Real_estate} path={"/advertisement/search"} />
          <NavLink name={t9n.faq} />
          <NavLink name={t9n.Terms_and_Conditions} />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Link href="/advertisement/new">
          <BaseButton size="sm" title={t9n.header_button} color="primary" />
        </Link>
        <div className={" flex items-center relative"}>
          <Profile
            className={
              " border-2 border-Dove dark:border-Grey hover:bg-slate-100 text-slate-400 dark:text-White cursor-pointer transition-colors hover:border-Light-Gray dark:hover:bg-Dove-Gray dark:hover:border-Dove-Gray " +
              classes.profileIcon
            }
            onClick={() => {
              setProdileDropDownFlag(true);
            }}
          />
          {profileDropDownFlag && (
            <div className={classes.profileDropDown} ref={profileDropDownRef}>
              <ProfileDropDown />
            </div>
          )}
        </div>
      </div>
      {locationModalFlag && (
        <Modal body={<CitySelectionBox exiteAction={citySelectionHandler} />} />
      )}
    </div>
  );
};

export default Header;
