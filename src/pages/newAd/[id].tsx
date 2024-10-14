"use client";
import DefaultLayout from "@/view/layout/DefaultLayout";
import styles from "./styles/new.module.css";
import BaseButton from "@/components/base/BaseButton";
import { useParams } from "next/navigation";
import NewAds from "@/components/HomePage/NewAds";
import {
  Category,
  ArrowDown2,
  TickSquare,
  Add,
  Minus,
  InfoCircle,
  Heart,
  Location,
  TableLamp,
  Ruler,
} from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";

const newAd = () => {
  const { t9n } = useTranslation();
  const id = useParams;
  return (
    <DefaultLayout>
      <div className={styles.page + " bg-Withe-45 dark:bg-Nero"}>
        <div className={styles.container}>
          <div
            className={styles.rightArticle + " bg-Withe-45 dark:bg-Semi-Black"}
          >
            <div className={styles.header}>
              <Category></Category>
              <div className={styles.txtHeader + " text-black dark:text-white"}>
                {t9n.featuresOfADetachedHouse}
              </div>
            </div>

            <div className={styles.box1}>
              <div className={styles.txt + " text-black dark:text-white"}>
                {t9n.advertisementInformation}
              </div>
              <div
                className={styles.txtPrimary + " text-black dark:text-white"}
              >
                {t9n.adName}
              </div>
              <div className={styles.box2}>
                <div className={styles.txt3 + " text-black dark:text-white"}>
                  ویلا دوبلکس استخردار
                </div>
              </div>
            </div>

            <div className={styles.box3}>
              <NewAds></NewAds>
            </div>

            <div className={styles.box4}>
              <div className={styles.txt + " text-black dark:text-white"}>
                {t9n.location}
              </div>
              <div className={styles.locBox}>
                <div className={styles.locBox1}>
                  <div
                    className={
                      styles.txtPrimary + " text-black dark:text-white"
                    }
                  >
                    {t9n.province}
                  </div>
                  <div className={styles.inputBox}>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      تهران
                    </div>
                    <ArrowDown2></ArrowDown2>
                  </div>
                </div>
                <div className={styles.locBox1}>
                  <div
                    className={
                      styles.txtPrimary + " text-black dark:text-white"
                    }
                  >
                    {t9n.city}
                  </div>
                  <div className={styles.inputBox}>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      تهران
                    </div>
                    <ArrowDown2></ArrowDown2>
                  </div>
                </div>
                <div className={styles.locBox1}>
                  <div
                    className={
                      styles.txtPrimary + " text-black dark:text-white"
                    }
                  >
                    {t9n.area}
                  </div>
                  <div className={styles.inputBox}>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      فردوس غرب
                    </div>
                    <ArrowDown2></ArrowDown2>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.box5}>
              <div className={styles.txt + " text-black dark:text-white"}>
                {t9n.price}
              </div>
              <div className={styles.priceBox}>
                <div className={styles.priceBox1}>
                  <div
                    className={
                      styles.txtPrimary + " text-black dark:text-white"
                    }
                  >
                    {t9n.theTotalPriceOfTheProperty}
                  </div>
                  <div className={styles.inputBox}>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      35,800,000,000
                    </div>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      تومان
                    </div>
                  </div>
                </div>

                <div className={styles.priceBox1}>
                  <div
                    className={
                      styles.txtPrimary + " text-black dark:text-white"
                    }
                  >
                    {t9n.pricePerMeter}
                  </div>
                  <div className={styles.inputBox}>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      16,000,000
                    </div>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      تومان
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.box6}>
              <div className={styles.txt + " text-black dark:text-white"}>
                {t9n.meterage}
              </div>
              <div className={styles.metrBox}>
                <div className={styles.metrBox1}>
                  <div
                    className={
                      styles.txtPrimary + " text-black dark:text-white"
                    }
                  >
                    {t9n.landArea}
                  </div>
                  <div className={styles.inputBox3}>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      132
                    </div>
                    <div className={styles.inputBox2}>
                      <div
                        className={
                          styles.txtPrimary + " text-black dark:text-white"
                        }
                      >
                        متر مربع
                      </div>
                      <ArrowDown2></ArrowDown2>
                    </div>
                  </div>
                </div>

                <div className={styles.metrBox1}>
                  <div
                    className={
                      styles.txtPrimary + " text-black dark:text-white"
                    }
                  >
                    {t9n.buildingSize}
                  </div>
                  <div className={styles.inputBox3}>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      100
                    </div>
                    <div className={styles.inputBox2}>
                      <div
                        className={
                          styles.txtPrimary + " text-black dark:text-white"
                        }
                      >
                        متر مربع
                      </div>
                      <ArrowDown2></ArrowDown2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.possibleBox}>
              <div className={styles.txt + " text-black dark:text-white"}>
                {t9n.facilities}
              </div>
              <div className={styles.specialBox}>
                <div className={styles.specialPossibleBox}>
                  <div className={styles.topPossibleBox}>
                    <TickSquare color="#008FFF"></TickSquare>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      پارکینگ
                    </div>
                  </div>
                  <div className={styles.buttonBoxPossible}>
                    <TickSquare color="#008FFF"></TickSquare>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      بالکن
                    </div>
                  </div>
                </div>

                <div className={styles.specialPossibleBox}>
                  <div className={styles.topPossibleBox}>
                    <div className={styles.lightBox}></div>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      انباری
                    </div>
                  </div>
                  <div className={styles.btnPossible}>
                    <Add color="#008FFF"></Add>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      اضافه کردن امکانات
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.detailBox}>
              <div className={styles.txt + " text-black dark:text-white"}>
                {t9n.propertyDetails}
              </div>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <div
                    className={
                      styles.txtPrimary + " text-black dark:text-white"
                    }
                  >
                    تعداد اتاق
                  </div>
                  <div className={styles.boxDet}>
                    <div className={styles.add}>
                      <Add></Add>
                    </div>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      3
                    </div>
                    <div className={styles.minus}>
                      <Minus></Minus>
                    </div>
                  </div>
                </div>
                <div className={styles.detail}>
                  <div
                    className={
                      styles.txtPrimary + " text-black dark:text-white"
                    }
                  >
                    تعداد مستر
                  </div>
                  <div className={styles.boxDet}>
                    <div className={styles.add}>
                      <Add></Add>
                    </div>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      3
                    </div>
                    <div className={styles.minus}>
                      <Minus></Minus>
                    </div>
                  </div>
                </div>
                <div className={styles.detail}>
                  <div
                    className={
                      styles.txtPrimary + " text-black dark:text-white"
                    }
                  >
                    تعداد حمام
                  </div>
                  <div className={styles.boxDet}>
                    <div className={styles.add}>
                      <Add></Add>
                    </div>
                    <div
                      className={
                        styles.txtPrimary + " text-black dark:text-white"
                      }
                    >
                      5
                    </div>
                    <div className={styles.minus}>
                      <Minus></Minus>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.ageBox}>
              <div
                className={styles.txtPrimary + " text-black dark:text-white"}
              >
                {t9n.age}
              </div>
              <div className={styles.ageBox2}>
                <div className={styles.boxDet}>
                  <div className={styles.add}>
                    <Add></Add>
                  </div>
                  <div
                    className={
                      styles.txtPrimary + " text-black dark:text-white"
                    }
                  >
                    3
                  </div>
                  <div className={styles.minus}>
                    <Minus></Minus>
                  </div>
                </div>
                <div
                  className={styles.txtPrimary + " text-black dark:text-white"}
                >
                  سال
                </div>
              </div>
            </div>

            <div className={styles.endBox}>
              <div
                className={styles.txtPrimary + " text-black dark:text-white"}
              >
                {t9n.documentStatus}
              </div>
              <div className={styles.end}>
                <div
                  className={styles.txtPrimary + " text-black dark:text-white"}
                >
                  وضعیت سند
                </div>
                <ArrowDown2></ArrowDown2>
              </div>
            </div>

            <div className={styles.baseBtn}>
              <div className={styles.btnRight}>
                <BaseButton
                  color="secondary"
                  size="lg"
                  title={t9n.previousPage}
                />
              </div>
              <div className={styles.btnLeft}>
                <BaseButton
                  color="primary"
                  size="lg"
                  title={t9n.continue}
                  hasBlock={false}
                />
              </div>
            </div>
          </div>

          <div
            className={styles.leftArticle + " bg-Withe-45 dark:bg-Semi-Black"}
          >
            <div className={styles.headL}>
              <div className={styles.txt + " text-black dark:text-white"}>
                {t9n.adPreview}
              </div>
              <InfoCircle></InfoCircle>
            </div>

            <div className={styles.main + " bg-Withe-45 dark:bg-Shadow-Black"}>
              <div className={styles.card}>
                <div className={styles.imgArticle}></div>
                <div className={styles.heart}>
                  <Heart color="white"></Heart>
                </div>
                <div className={styles.imgBoxArt}>
                  <div
                    className={styles.txtBoxArt + " text-black dark:text-white"}
                  >
                    تهران ، فردوس غرب
                  </div>
                  <Location color="white"></Location>
                </div>
              </div>

              <div className={styles.endArt}>
                <div className={styles.txt + " text-black dark:text-white"}>
                  ویلا دوبلکس استخردار
                </div>
                <div className={styles.txtBox}>
                  <div
                    className={styles.txtEnd + " text-black dark:text-white"}
                  >
                    35,800,000,000
                  </div>
                  <div
                    className={styles.txtEnd + " text-black dark:text-white"}
                  >
                    تومان
                  </div>
                </div>
                <div className={styles.buttom}>
                  <div className={styles.buttomBox}>
                    <TableLamp></TableLamp>
                    <div
                      className={
                        styles.txtButtom + " text-black dark:text-white"
                      }
                    >
                      3 خوابه
                    </div>
                  </div>
                  <div className={styles.buttomBox}>
                    <Ruler></Ruler>
                    <div
                      className={
                        styles.txtButtom + " text-black dark:text-white"
                      }
                    >
                      400 متر
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
};

export default newAd;
