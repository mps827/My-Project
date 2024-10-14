import React, { useState } from "react";
import { TickCircle } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { advertisementActions } from "@/store/advertisement-slice";

const AdvertisementFormStepper = () => {
  const steps = ["جزئیات آگهی", "مشخصات مالک", "مشخصات ملک", "ثبت آگهی"];

  const dispatch = useDispatch();
  const advertisement = useSelector((state: RootState) => state.advertisement);

  let currentStep = advertisement.newAddStep;
  let complete = advertisement.completed;

  return (
    <div className="flex justify-between flex-row-reverse">
      {steps.map((step, i) => {
        const isActive = currentStep === i + 1;
        const isComplete = currentStep > i + 1 || complete == true;

        return (
          <div
            key={i}
            className={`relative flex flex-col justify-center items-center w-52 gap-2 ${
              isActive ? "active" : ""
            } ${isComplete ? "complete" : ""}`}
          >
            <div
              className={`w-10 h-10 bg-white dark:bg-Dove-Gray flex items-center justify-center z-10 relative text-Black border-2 dark:text-White farsiNum rounded-full text-base ${
                isActive
                  ? "border-Blue-Primary text-Blue-Primary dark:text-Blue-Primary"
                  : isComplete
                  ? "border-Blue-Primary"
                  : "text-Light-Gray"
              }`}
            >
              {isComplete ? (
                <TickCircle
                  variant={"Bold"}
                  className="text-Blue-Primary w-full h-full"
                />
              ) : (
                i + 1
              )}
            </div>
            <div className="text-base">{step}</div>
            {i !== 0 && (
              <div
                className={`content-[''] absolute w-full h-[3px] right-2/4 top-1/3 -translate-y-2/4 ${
                  isActive || isComplete ? "bg-Blue-Primary" : "bg-Light-Gray"
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AdvertisementFormStepper;
