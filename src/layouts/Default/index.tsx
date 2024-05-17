import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useState } from "react";
import clsx from "clsx";

const DefaultLayout = () => {
  const [menuDetail, setMenuDetail] = useState<string>("");
  return <>
    <div className="flex">
      <Sidebar menuDetail={menuDetail} setMenuDetail={setMenuDetail} />
      <div className={clsx("transition-size", menuDetail ? "ml-20" : "ml-[244px]")}>
        <Outlet />
      </div>
    </div>
  </>
}

export default DefaultLayout