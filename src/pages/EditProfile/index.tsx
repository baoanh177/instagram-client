import React, { useState } from "react";
import SettingsBar from "./SettingsBar";
import { Outlet } from "react-router-dom";

const Parent = () => {
  const [selectedKey, setSelectedKey] = useState("edit-profile");

  return (
    <div className="flex gap-3 ">
      <SettingsBar selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <div className="flex-grow relative">
        <Outlet />
      </div>
    </div>
  );
};

export default Parent;
