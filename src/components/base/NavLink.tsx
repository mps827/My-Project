import { ArrowDown2 } from "iconsax-react";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  name: string;
  path?: string;
}
const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <Link href={props.path ?? ""}>
      <div
        className={
          " flex flex-row gap-1 items-center cursor-pointer text-nowrap transition-colors hover:bg-slate-100 dark:hover:bg-Approx-Nero px-1 py-2 rounded-md "
        }
      >
        <span
          className={"text-sm cursor-pointer text-Dove_Grey dark:text-White "}
        >
          {props.name}
        </span>
        <ArrowDown2
          className={
            " w-6 h-6 items-center justify-center text-Dove_Grey dark:text-White"
          }
        />
      </div>
    </Link>
  );
};

export default NavLink;
