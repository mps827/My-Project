// pages/newAd/NewAdCard.tsx
import { StaticImageData } from "next/image";
import Image from "next/image";
import style from "./styles/NewAdCard.module.scss";
import { GalleryAdd } from "iconsax-react";
import { useState } from "react";

interface myComponentProps {
  image?: string | StaticImageData;
  title?: string;
  icon?: JSX.Element | JSX.Element[];
  id?: number;
}

const NewAdCard = (props: myComponentProps) => {
  const [image, setImage] = useState<string | StaticImageData | undefined>(
    props.image
  );
  const [icon, setIcon] = useState<JSX.Element | JSX.Element[] | undefined>(
    props.icon
  );

  const handleDelete = () => {
    setImage(undefined);
    setIcon(undefined);
  };

  return (
    <div className={style.container}>
      {image && icon ? (
        <div>
          <div className={style.icon} onClick={handleDelete}>
            {icon}
          </div>
          <div>
            <div className={style.imageBox}>
              <div>
                <Image
                  src={image}
                  alt="advertisement image"
                  className={style.image}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.titleBox}>
          <div className={style.box}>
            <div className={style.galleryIcon}>
              <GalleryAdd></GalleryAdd>
            </div>
            <div className={style.txt}>
              <div>اضافه کردن تصویر جدید</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewAdCard;

// return (
//   <div className={style.container}>
//     <div className={style.icon} onClick={handleDelete}>
//       {icon}
//     </div>

//     <div>
//       {image && (
//         <div className={style.imageBox}>
//           <div>
//             <Image
//               src={image}
//               alt="advertisement image"
//               className={style.image}
//             />
//           </div>
//         </div>
//       )}
//     </div>

//     <div className={style.box}>
//       {props.title && (
//         <div className={style.titleBox}>
//           <div
//             className={style.galleryIcon + " text-#AEAEAE dark:text-White"}
//           >
//             <GalleryAdd></GalleryAdd>
//           </div>
//           <div className={style.title + " text-#AEAEAE dark:text-White"}>
//             {props.title}
//           </div>
//         </div>
//       )}
//     </div>
//   </div>
// );
