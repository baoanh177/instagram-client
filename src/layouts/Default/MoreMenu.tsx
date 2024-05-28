import { Link } from "react-router-dom";
import { MenuItem } from "../../models/shared/menu.model";

// Icons
import { CiSettings } from "react-icons/ci";
import { BsActivity } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { GoReport } from "react-icons/go";
import { CiDark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../stores/slices/app.slice";
import { logout } from "../../stores/thunks/auth.thunk";
import { AppDispatch } from "../../stores/stores";

const MoreMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useSelector((state: any) => state.app);
  const menuItems: MenuItem[] = [
    {
      key: "settings",
      label: "Settings",
      icon: <CiSettings className="text-2xl" />,
      path: "/settings",
    },
    {
      key: "activity",
      label: "Your activity",
      icon: <BsActivity className="text-2xl" />,
      path: "/activity",
    },
    {
      key: "saved",
      label: "Saved",
      icon: <CiBookmark className="text-2xl" />,
      path: "/saved",
    },
    {
      key: "appearance",
      label: "Switch appearance",
      onClick: () => {
        dispatch(setTheme(theme == "dark" ? "light" : "dark"));
      },
      icon:
        theme == "dark" ? (
          <CiDark className="text-2xl" />
        ) : (
          <IoSunnyOutline className="text-2xl" />
        ),
    },
    {
      key: "report",
      label: "Report a problem",
      icon: <GoReport className="text-2xl" />,
      path: "/report",
    },
  ];

  return (
    <>
      <div className="absolute -top-3 left-0 -translate-y-full bg-gray-50 dark:bg-black min-w-72 overflow-hidden rounded-lg shadow">
        <ul className="p-2 flex flex-col gap-2 dark:bg-zinc-800 bg-gray-50 rounded-lg shadow border border-gray-100 dark:border-black">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={item.onClick}
              className="flex items-center gap-2 p-4 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-opacity-5 transition-colors"
            >
              {item.icon}
              {item.path ? (
                <Link to={item.path}>{item.label}</Link>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 p-2 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow border border-gray-100 dark:border-black mt-2">
          <div className="flex items-center gap-2 p-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-opacity-5 transition-colors">
            Switch accounts
          </div>
          <div onClick={() => dispatch(logout())} className="flex items-center gap-2 p-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-opacity-5 transition-colors">
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreMenu;
