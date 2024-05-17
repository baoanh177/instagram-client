import { Link, useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import { Dispatch, ReactNode, SetStateAction } from "react";

// Icons
import { icons } from "../../assets/icons";
import clsx from "clsx";
import { Tooltip } from "antd";
import MenuDetail from "./MenuDetail";

type MenuItem = {
  key: string;
  label: string;
  path?: string;
  icon?: ReactNode;
};

const menuItems: MenuItem[] = [
  {
    key: "home",
    label: "Home",
    path: "/",
    icon: <img src={icons.home} alt="home" />,
  },
  {
    key: "search",
    label: "Search",
    icon: <img src={icons.search} alt="search" />,
  },
  {
    key: "explore",
    label: "Explore",
    path: "/explore",
    icon: <img src={icons.explore} alt="explore" />,
  },
  {
    key: "reels",
    label: "Reels",
    path: "/reels",
    icon: <img src={icons.reels} alt="reels" />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <img src={icons.messages} alt="messages" />,
  },
  {
    key: "notifications",
    label: "Notifications",
    icon: <img src={icons.heart} alt="notifications" />,
  },
  {
    key: "create",
    label: "Create",
    icon: <img src={icons.create} alt="create" />,
  },
  {
    key: "profile",
    label: "Profile",
    path: "/profile",
    icon: <img src={icons.profile} alt="profile" />,
  },
];

const Sidebar = ({
  menuDetail,
  setMenuDetail,
}: {
  menuDetail: string;
  setMenuDetail: Dispatch<SetStateAction<string>>;
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 bottom-0 px-3 pt-10 border-r-2 select-none transition-size",
          menuDetail ? "w-20" : "w-[244px]"
        )}
      >
        <MenuDetail title={menuDetail} content={<div>Content</div>}/>
        <div
          className={clsx(
            "flex transition-size h-7",
            menuDetail ? " justify-center" : "pl-6"
          )}
        >
          <Link to="/">
            <img
              src={menuDetail ? images.logoShort : images.logo}
              alt="Instagram logo"
            />
          </Link>
        </div>
        <div className="mt-8">
          <nav>
            <ul className="flex flex-col gap-1">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={clsx(
                    "flex gap-4 p-3 cursor-pointer rounded-lg hover:bg-gray-100 transition-colors",
                    menuDetail && "justify-center", menuDetail == item.key && "border-2 border-gray-500"
                  )}
                  onClick={() => {
                    if (item.path) {
                      navigate(item.path);
                      setMenuDetail("");
                    } else {
                      setMenuDetail(item.key);
                    }
                  }}
                >
                  {menuDetail ? (
                    <Tooltip placement="right" title={item.label}>
                      {item.icon}
                    </Tooltip>
                  ) : (
                    item.icon
                  )}
                  {!menuDetail && (
                    <div
                      className={clsx(
                        menuDetail &&
                          "w-0 overflow-hidden invisible transition-size"
                      )}
                    >
                      {item.label}
                    </div>
                  )}
                </li>
              ))}
              <li
                className={clsx(
                  "flex gap-4 p-3 cursor-pointer rounded hover:bg-gray-100 transition-colors",
                  menuDetail && "justify-center"
                )}
              >
                <img src={icons.bar} alt="" />
                {!menuDetail && <div>More</div>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
