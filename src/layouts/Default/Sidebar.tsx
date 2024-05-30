import { Link, useNavigate } from "react-router-dom";
import { images } from "../../assets/images";
import { Dispatch, SetStateAction, useState } from "react";
import clsx from "clsx";
import { Tooltip } from "antd";
import MenuDetail from "./MenuDetail";
import SearchInput from "../../components/common/SearchInput";
import MoreMenu from "./MoreMenu";
import { MenuItem } from "../../models/shared/menu.model";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../stores/stores";
import { setMoreMenu } from "../../stores/slices/app.slice";

// Icons
import { icons } from "../../assets/icons";
import { FaRegUserCircle } from "react-icons/fa";

const Sidebar = ({
  menuDetail,
  setMenuDetail,
}: {
  menuDetail: string;
  setMenuDetail: Dispatch<SetStateAction<string>>;
}) => {
  const { moreMenu: moreMenuState, theme } = useSelector(
    (state: any) => state.app
  );
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const menuItems: MenuItem[] = [
    {
      key: "home",
      label: "Home",
      path: "/",
      icon: (
        <img src={theme == "dark" ? icons.homeLight : icons.home} alt="home" />
      ),
    },
    {
      key: "search",
      label: "Search",
      icon: (
        <img
          src={theme == "dark" ? icons.searchLight : icons.search}
          alt="search"
        />
      ),
    },
    {
      key: "explore",
      label: "Explore",
      path: "/explore",
      icon: (
        <img
          src={theme == "dark" ? icons.exploreLight : icons.explore}
          alt="explore"
        />
      ),
    },
    {
      key: "reels",
      label: "Reels",
      path: "/reels",
      icon: (
        <img
          src={theme == "dark" ? icons.reelsLight : icons.reels}
          alt="reels"
        />
      ),
    },
    {
      key: "messages",
      label: "Messages",
      path: "/messages",
      icon: (
        <img
          src={theme == "dark" ? icons.messagesLight : icons.messages}
          alt="messages"
        />
      ),
    },
    {
      key: "notifications",
      label: "Notifications",
      icon: (
        <img
          src={theme == "dark" ? icons.heartLight : icons.heart}
          alt="notifications"
        />
      ),
    },
    {
      key: "create",
      label: "Create",
      icon: (
        <img
          src={theme == "dark" ? icons.createLight : icons.create}
          alt="create"
        />
      ),
    },
    {
      key: "profile",
      label: "Profile",
      path: "/profile",
      icon: <FaRegUserCircle className="dark:text-white text-2xl" />,
    },
  ];
  return (
    <>
      <div
        className={clsx(
          `more-menu fixed flex items-center h-12 border-t select-none transition-size bottom-0 right-0 left-0 
          lg:items-stretch md:relative md:flex-col md:h-full md:px-3 md:pt-10 md:pb-5 border-r dark:border-gray-700`,
          menuDetail ? "md:w-20" : "md:w-20 lg:w-[244px]"
        )}
      >
        <MenuDetail title={menuDetail} content={<SearchInput />} />
        <div
          className={clsx(
            "transition-size md:h-7 hidden md:flex",
            menuDetail
              ? "md:justify-center"
              : "md:justify-center lg:justify-normal lg:pl-6"
          )}
        >
          <Link to="/">
            <img
              src={theme == "dark" ? images.logoShortLight : images.logoShort}
              alt="Instagram"
              className={clsx(menuDetail ? "block" : "block lg:hidden")}
              onClick={() => setActiveMenu("home")}
            />
            {!menuDetail && (
              <img
                src={theme == "dark" ? images.logoLight : images.logo}
                alt="Instagram"
                className="hidden lg:block"
                onClick={() => setActiveMenu("home")}
              />
            )}
          </Link>
        </div>
        <div className="flex-1 md:mt-8">
          <nav className="flex justify-evenly h-full md:flex-col">
            <ul className="flex justify-evenly w-full md:flex-col gap-1">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={clsx(
                    "flex gap-4 p-3 cursor-pointer rounded-lg md:hover:bg-gray-100 dark:hover:bg-opacity-10 transition-colors",
                    menuDetail
                      ? "justify-center"
                      : "justify-center lg:justify-start",
                    menuDetail == item.key &&
                      "md:border-2 md:border-gray-500 dark:border-gray-700",
                    activeMenu == item.key &&
                      !menuDetail &&
                      "md:bg-gray-100 dark:bg-opacity-15",
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
                          : "hidden lg:block"
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
                  "more-menu-toggle flex gap-4 p-3 cursor-pointer rounded hover:bg-gray-100 dark:bg-opacity-10 transition-colors",
                  menuDetail && "justify-center"
                )}
                onClick={() => dispatch(setMoreMenu(null))}
              >
                <img
                  src={theme == "dark" ? icons.barLight : icons.bar}
                  alt=""
                />
                {!menuDetail && <div className="hidden lg:block">More</div>}
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
