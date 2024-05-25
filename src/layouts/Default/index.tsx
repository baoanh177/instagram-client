import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const DefaultLayout = () => {
  const [menuDetail, setMenuDetail] = useState<string>("");
  return (
    <>
      <div className="flex h-full">
        <div className="lg:w-[244px]">
          <Sidebar menuDetail={menuDetail} setMenuDetail={setMenuDetail} />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
