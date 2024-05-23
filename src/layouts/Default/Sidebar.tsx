import { Link, useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import { Dispatch, SetStateAction, useState } from "react";

// Icons
import { icons } from "../../assets/icons";
import clsx from "clsx";
import { Tooltip } from "antd";
import MenuDetail from "./MenuDetail";
import SearchInput from "../../components/common/SearchInput";
import MoreMenu from "./MoreMenu";
import { MenuItem } from "../../models/shared/menu.model";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../stores/stores";
import { setMoreMenu } from "../../stores/slices/app.slice";

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
  const { moreMenu: moreMenuState } = useSelector((state: any) => state.app);
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <div
        className={clsx(
          `more-menu fixed flex items-center h-12 border-t select-none transition-size bottom-0 right-0 left-0 
          md:items-stretch md:relative md:flex-col md:h-full md:px-3 md:pt-10 md:pb-5 border-r dark:border-gray-700`,
          menuDetail ? "md:w-20" : "md:w-[244px]"
        )}
      >
        <MenuDetail title={menuDetail} content={<SearchInput />} />
        <div
          className={clsx(
            "flex transition-size md:h-7",
            menuDetail ? "md:justify-center" : "md:pl-6"
          )}
        >
          <Link to="/">
            <img
              src={menuDetail ? images.logoShort : images.logo}
              alt="Instagram"
              className="hidden md:block"
            />
          </Link>
        </div>
        <div className="flex-1 md:mt-8">
          <nav className="flex justify-evenly h-full md:flex-col">
            <ul className="flex justify-evenly w-full md:flex-col gap-1">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={clsx(
                    "flex gap-4 p-3 cursor-pointer rounded-lg md:hover:bg-gray-100 transition-colors",
                    menuDetail && "justify-center",
                    menuDetail == item.key && "md:border-2 md:border-gray-500",
                    activeMenu == item.key && !menuDetail && "md:bg-gray-100",
                    !item.path && "hidden md:flex"
                  )}
                  onClick={() => {
                    setActiveMenu(item.key);
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
                        menuDetail
                          ? "w-0 overflow-hidden invisible transition-size"
                          : "hidden md:block"
                      )}
                    >
                      {item.label}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden md:block relative mt-auto">
              <div
                className={clsx(
                  "more-menu-toggle flex gap-4 p-3 cursor-pointer rounded hover:bg-gray-100 transition-colors",
                  menuDetail && "justify-center"
                )}
                onClick={() => dispatch(setMoreMenu(null))}
              >
                <img src={icons.bar} alt="" />
                {!menuDetail && <div>More</div>}
              </div>
              {moreMenuState && <MoreMenu />}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
