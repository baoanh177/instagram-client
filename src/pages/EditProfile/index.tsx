import { useState } from "react";
import { Outlet } from "react-router-dom";
import SettingsBar from "./SettingsBar";

const Settings = () => {
  const [selectedKey, setSelectedKey] = useState("edit-profile");

  return (
    <div className="flex h-screen">
      <SettingsBar selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};
export default Settings;
