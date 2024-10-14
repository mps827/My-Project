"use client";
import DefaultLayout from "@/view/layout/DefaultLayout";
import styles from "./style/adDetail.module.css";
import BaseButton from "@/components/base/BaseButton";
import { useParams } from "next/navigation";
import { useTranslation } from "@/providers/locale-provider";
import {
  Heart,
  Link2,
  Gallery,
  Car,
  Fatrows,
  Maximize1,
  Home2,
  Video,
  TableLamp,
  ShieldTick,
  ShoppingCart,
  Location,
  Sms,
  Call,
} from "iconsax-react";

function adDetails() {
  const { t9n } = useTranslation();
  const id = useParams;
  const CallIcon = () => {
    return <Call />;
  };
  const SmsIcon = () => {
    return <Sms />;
  };
  return (
    <DefaultLayout>
      <div className={styles.page}>
        <div className={styles.container + " bg-Withe-45 dark:bg-Semi-Black"}>
          <div className={styles.imagesBox}>
            <div className={styles.imgRightBox}>
              <div className={styles.imgBoxRight}>
                <div className={styles.imageCard3}></div>
                <div className={styles.tittleBox}>
                  <div className={styles.imageCard4}></div>
                  <div className={styles.iconBox}>
                    <div className={styles.iconTxtBox}>+12</div>
                    <div className={styles.iconGalleryBox}>
                      <Gallery></Gallery>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.imgCenterBox}>
              <div className={styles.imgBox}>
                <div className={styles.imageCard1}></div>
                <div className={styles.imageCard2}></div>
              </div>
            </div>

            <div className={styles.imgLeftBox}></div>
          </div>
        </div>

        <div className={styles.main}>
          <div
            className={styles.rightArticle + " bg-Withe-45 dark:bg-Semi-Black"}
          >
            <div className={styles.topR_Article}>
              <div className={styles.txt + " text-black dark:text-white"}>
                112 متر نوساز کلید نخورده ، ساری
              </div>
              <div className={styles.txt + " text-black dark:text-white"}>
                234,000,000,000 تومان
              </div>

              <div
                className={styles.assets + " bg-Withe-45 dark:bg-Semi-Black"}
              >
                <Heart></Heart>
              </div>

              <div
                className={styles.assets + " bg-Withe-45 dark:bg-Semi-Black"}
              >
                <Link2></Link2>
              </div>
            </div>

            <div className={styles.pLine + " text-black dark:text-white"}>
              ویلا در شهر ساری، واقع در استان مازندران، یکی از بهترین انتخاب‌ها
              برای خرید ملک در شمال ایران است. ساری به دلیل داشتن آب و هوای
              معتدل، طبیعت زیبا، و نزدیکی به جنگل‌ها و دریا، مقصد محبوبی برای
              افرادی است که به دنبال یک خانه دوم یا مکانی برای تعطیلات هستند
            </div>

            <div
              className={styles.txtDescription + " text-black dark:text-white"}
            >
              {t9n.moreDetails}
            </div>

            <div className={styles.possibilitiesBox}>
              <div
                className={
                  styles.txtPossibilities + " text-black dark:text-white"
                }
              >
                {t9n.facilities}
              </div>
              <div className={styles.bigBoxPossib}>
                <div className={styles.columnBox}>
                  <div className={styles.cardBox}>
                    <Car className={styles.car}></Car>
                    <div
                      className={
                        styles.txtcolumnBox + " text-black dark:text-white"
                      }
                    >
                      پارکینگ
                    </div>
                  </div>
                  <div className={styles.cardBox}>
                    <Fatrows className={styles.car}></Fatrows>
                    <div
                      className={
                        styles.txtcolumnBox + " text-black dark:text-white"
                      }
                    >
                      طبقه 3 از 5
                    </div>
                  </div>
                </div>

                <div className={styles.columnBox}>
                  <div className={styles.cardBox}>
                    <Maximize1 className={styles.car}></Maximize1>
                    <div
                      className={
                        styles.txtcolumnBox + " text-black dark:text-white"
                      }
                    >
                      112 متر
                    </div>
                  </div>
                  <div className={styles.cardBox}>
                    <Home2 className={styles.car}></Home2>
                    <div
                      className={
                        styles.txtcolumnBox + " text-black dark:text-white"
                      }
                    >
                      دوبلکس
                    </div>
                  </div>
                </div>

                <div className={styles.columnBox}>
                  <div className={styles.cardBox}>
                    <Video className={styles.car}></Video>
                    <div
                      className={
                        styles.txtcolumnBox + " text-black dark:text-white"
                      }
                    >
                      دوربین مداربسته
                    </div>
                  </div>
                  <div className={styles.cardBox}>
                    <TableLamp className={styles.car}></TableLamp>
                    <div
                      className={
                        styles.txtcolumnBox + " text-black dark:text-white"
                      }
                    >
                      5 خوابه
                    </div>
                  </div>
                </div>

                <div className={styles.columnBox}>
                  <div className={styles.cardBox}>
                    <ShieldTick className={styles.car}></ShieldTick>
                    <div
                      className={
                        styles.txtcolumnBox + " text-black dark:text-white"
                      }
                    >
                      سیستم هوشمند
                    </div>
                  </div>

                  <div className={styles.cardBox}>
                    <ShoppingCart className={styles.car}></ShoppingCart>
                    <div
                      className={
                        styles.txtcolumnBox + " text-black dark:text-white"
                      }
                    >
                      {" "}
                      100 متر تا پاساژ
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rec}></div>

            <div className={styles.loc}>
              <div className={styles.txtLoc + " text-black dark:text-white"}>
                {t9n.location}
              </div>
              <div className={styles.imgLoc}></div>
              <div className={styles.locBox}>
                <Location className={styles.iconLoc}></Location>
                <div className={styles.pLoc + " text-black dark:text-white"}>
                  ساری ، بعد از میدان اصلی ، کوچه بهار
                </div>
              </div>
            </div>

            <div className={styles.plan}>
              <div className={styles.txtPlan + " text-black dark:text-white"}>
                {t9n.interiorMap}
              </div>
              <div className={styles.imgPlan}></div>
            </div>
          </div>

          <div>
            <div
              className={styles.leftArticle + " bg-Withe-45 dark:bg-Semi-Black"}
            >
              <div
                className={
                  styles.topLeftArticle + " bg-Withe-45 dark:bg-Semi-Black"
                }
              >
                <div
                  className={
                    styles.txtLeftArticle + " text-black dark:text-white"
                  }
                >
                  {t9n.representativeInformation}
                </div>
                <div className={styles.profile}>
                  <div className={styles.prof}></div>
                  <div className={styles.profBox}>
                    <div
                      className={
                        styles.profTopTxt + " text-black dark:text-white"
                      }
                    >
                      محمد شاه محمدی
                    </div>
                    <div
                      className={styles.profTxt + " text-black dark:text-white"}
                    >
                      کارشناس حقوقی{" "}
                    </div>
                  </div>
                </div>

                <div className={styles.btn}>
                  <div className={styles.btnRight}>
                    <div className={styles.btnBoxRight}>
                      <div className={styles.btnBaseButton}>
                        <BaseButton
                          color="secondary"
                          size="lg"
                          title={t9n.telephoneCommunication}
                          RightIcon={CallIcon()}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.btnLeft}>
                    <div className={styles.btnBoxLeft}>
                      <div>
                        <BaseButton
                          color="primary"
                          size="lg"
                          title={t9n.sendMessage}
                          RightIcon={SmsIcon()}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.priceBox}>
                  <div
                    className={
                      styles.topPriceBox + " text-black dark:text-white"
                    }
                  >
                    قیمت (تومان)
                  </div>
                  <div
                    className={
                      styles.middlePrice + " text-black dark:text-white"
                    }
                  >
                    234,000,000,000
                  </div>
                  <div className={styles.boxPriceButtom}>
                    <div className={styles.btnBaseButton}>
                      <BaseButton
                        color="secondary"
                        size="lg"
                        title="محاسبه قیمت هر متر یا خرید متری"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={styles.detailBox + " bg-Withe-45 dark:bg-Semi-Black"}
              >
                <div
                  className={styles.txtDetail + " text-black dark:text-white"}
                >
                  {t9n.details}
                </div>
                <div className={styles.line}></div>
                <div className={styles.boxEnd}>
                  <div className={styles.boxEndcolumn}>
                    <div
                      className={styles.txtEnd + " text-black dark:text-white"}
                    >
                      بالکن
                    </div>
                    <div
                      className={styles.txtEnd + " text-black dark:text-white"}
                    >
                      جنس کف
                    </div>
                    <div
                      className={styles.txtEnd + " text-black dark:text-white"}
                    >
                      تعداد حمام
                    </div>
                    <div
                      className={styles.txtEnd + " text-black dark:text-white"}
                    >
                      شهر
                    </div>
                  </div>
                  <div className={styles.boxEndcolumn}>
                    <div
                      className={
                        styles.txtEndLeft + " text-black dark:text-white"
                      }
                    >
                      دارد
                    </div>
                    <div
                      className={
                        styles.txtEndLeft + " text-black dark:text-white"
                      }
                    >
                      سنگ مرمر
                    </div>
                    <div
                      className={
                        styles.txtEndLeft + " text-black dark:text-white"
                      }
                    >
                      5
                    </div>
                    <div
                      className={
                        styles.txtEndLeft + " text-black dark:text-white"
                      }
                    >
                      ساری
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default adDetails;
