import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { icons } from "../../assets/icons";
import { images } from "../../assets/images";

const SettingsBar = ({
  selectedKey,
  setSelectedKey,
}: {
  selectedKey: string;
  setSelectedKey: Dispatch<SetStateAction<string>>;
}) => {
  const navigate = useNavigate();

  const settingsItems = [
    {
      key: "how-you-use-instagram",
      label: "How you use Instagram",
      subItems: [
        {
          key: "edit-profile",
          label: "Edit Profile",
          path: "settings",
          icon: (
            <img
              className="ml-1 w-[20px]"
              src={icons.profile}
              alt="edit profile"
            />
          ),
        },
        {
          key: "notifications",
          label: "notifications",
          path: "settings/notifications",
          icon: (
            <img className="w-[26px]" src={icons.bell} alt="notifications" />
          ),
        },
      ],
    },
    {
      key: "what-you-see",
      label: "What you see",
      subItems: [
        {
          key: "muted-accounts",
          label: "Muted accounts",
          path: "settings/mutedaccounts",
          icon: <img className="w-[28px]" src={icons.bell2} alt="bell2" />,
        },
        {
          key: "like-and-share-ounts",
          label: "Like and share counts",
          path: "share",
          icon: <img className="w-[28px]" src={icons.icHeart} alt="icHeart" />,
        },
        {
          key: "subscriptions",
          label: "Subscriptions",
          path: "subcription",
          icon: <img className="w-[28px]" src={icons.crown} alt="crown" />,
        },
      ],
    },
    {
      key: "who-can-see-your-content",
      label: "Who can see your content",
      subItems: [
        {
          key: "account-privacy",
          label: "Account privacy",
          path: "privacy",
          icon: <img className="w-[28px]" src={icons.lock} alt="lock" />,
        },
        {
          key: "close-friends",
          label: "Close Friends",
          path: "close-friends",
          icon: <img className="w-[28px]" src={icons.star} alt="start" />,
        },
        {
          key: "blocked",
          label: "Blocked",
          path: "setting/blocked",
          icon: <img className="w-[28px]" src={icons.hollow} alt="hollow" />,
        },
        {
          key: "hide-story-and-live",
          label: "Hide story and live",
          path: "setting/hide-story",
          icon: <img className="w-[28px]" src={icons.hollow2} alt="hollow2" />,
        },
      ],
    },
    {
      key: "how-others-can-interact-with-you",
      label: "How others can interact with you",
      subItems: [
        {
          key: "messages-and-story-replies",
          label: "Messages and story replies",
          path: "messages-and-story",
          icon: (
            <img
              className="w-[24px] ml-1"
              src={icons.messages}
              alt="messages"
            />
          ),
        },
        {
          key: "close-friends",
          label: "Tags and mentions",
          path: "close-friends",
          icon: <img className="w-[28px]" src={icons.a} alt="a" />,
        },
        {
          key: "blocked",
          label: "Comment",
          path: "setting/blocked",
          icon: (
            <img
              className="w-[30px] mr-1"
              src={icons.icMessage}
              alt="icMessage"
            />
          ),
        },
        {
          key: "hide-story-and-live",
          label: "Sharing and remixes",
          path: "setting/hide-story",
          icon: <img className="w-[28px]" src={icons.arorown} alt="arorown" />,
        },
        {
          key: "blocked",
          label: "Restricted accounts",
          path: "setting/blocked",
          icon: <img className="w-[28px]" src={icons.user2} alt="user2" />,
        },
        {
          key: "hide-story-and-live",
          label: "Restricted accounts",
          path: "setting/hide-story",
          icon: <img className="w-[28px]" src={icons.Aa} alt="Aa" />,
        },
      ],
    },
    {
      key: "how-others-can-interact-with-you",
      label: "How others can interact with you",
      subItems: [
        {
          key: "messages-and-story-replies",
          label: "Messages and story replies",
          path: "messages-and-story",
          icon: (
            <img
              className="w-[24px] ml-1"
              src={icons.messages}
              alt="messages"
            />
          ),
        },
        {
          key: "tags-and-mentions",
          label: "Tags and mentions",
          path: "tags-and-mentions",
          icon: <img className="w-[28px]" src={icons.a} alt="a" />,
        },
        {
          key: "comment",
          label: "Comment",
          path: "comment",
          icon: (
            <img
              className="w-[30px] mr-1"
              src={icons.icMessage}
              alt="icMessage"
            />
          ),
        },
        {
          key: "sharing-and-remixes",
          label: "Sharing and remixes",
          path: "sharing-and-remixes",
          icon: <img className="w-[28px]" src={icons.arorown} alt="arorown" />,
        },
        {
          key: "restricted-accounts-1",
          label: "Restricted accounts",
          path: "restricted-accounts-1",
          icon: <img className="w-[28px]" src={icons.user2} alt="user2" />,
        },
        {
          key: "restricted-accounts-2",
          label: "Restricted accounts",
          path: "restricted-accounts-2",
          icon: <img className="w-[28px]" src={icons.Aa} alt="Aa" />,
        },
      ],
    },
    {
      key: "your-app-and-media",
      label: "Your app and media",
      subItems: [
        {
          key: "archiving-and-downloading",
          label: "Archiving and downloading",
          path: "archiving-and-downloading",
          icon: (
            <img className="w-[26px]" src={icons.download} alt="download" />
          ),
        },
        {
          key: "language",
          label: "Language",
          path: "language",
          icon: (
            <img className="w-[28px]" src={icons.language} alt="language" />
          ),
        },
        {
          key: "website-permissions",
          label: "Website permissions",
          path: "website-permissions",
          icon: <img className="w-[28px]" src={icons.scan} alt="scan" />,
        },
      ],
    },
    {
      key: "for-families",
      label: "For families",
      subItems: [
        {
          key: "supervision",
          label: "Supervision",
          path: "supervision",
          icon: (
            <img
              className="w-[28px]"
              src={icons.Supervision}
              alt="Supervision"
            />
          ),
        },
      ],
    },
    {
      key: "for-professionals",
      label: "For professionals",
      subItems: [
        {
          key: "account-type-and-tools",
          label: "Account type and tools",
          path: "account-type-and-tools",
          icon: <img className="w-[26px]" src={icons.tools} alt="tools" />,
        },
      ],
    },
    {
      key: "more-info-and-support",
      label: "More info and support",
      subItems: [
        {
          key: "account-status",
          label: "Account Status",
          path: "account-status",
          icon: <img className="w-[26px]" src={icons.account} alt="account" />,
        },
      ],
    },
  ];
  console.log(settingsItems);

  const handleMenuClick = (key: string, path?: string) => {
    setSelectedKey(key);

    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="w-[315px] border-r my-11 h-[calc(95vh)] overflow-y-auto ">
      <div className="w-full">
        <span className="text-xl font-bold text-[#000000] ml-[45px]">
          Settings
        </span>
        <div className="w-[267px] p-5 rounded-[20px] mt-5 m-auto shadow-lg">
          <div>
            <img src={images.meta} alt="meta" className="w-[70px]" />
            <span className="text-[16px] font-bold">Accounts Center</span>
            <p className="text-[12px] text-[#737373] mt-2">
              Manage your connected experiences and account settings across Meta
              technologies.
            </p>
            <div className="flex text-[12px] text-[#737373] mt-2">
              <img
                src={icons.tags}
                alt="tags"
                className="w-[20px] h-[20px] mr-2"
              />
              Personal details
            </div>
            <div className="flex text-[12px] text-[#737373] mt-2">
              <img
                src={icons.security}
                alt="security"
                className="w-[20px] h-[20px] mr-2"
              />
              Password and security
            </div>
            <div className="flex text-[12px] text-[#737373] mt-2">
              <img
                src={icons.preferency}
                alt="preferences"
                className="w-[20px] h-[20px] mr-2"
              />
              Ad preferences
            </div>
            <p className="text-[12px] font-semibold text-[#31A0F8] mt-3">
              See more in Accounts Center
            </p>
          </div>
        </div>
      </div>

      <div className="w-[267px] m-auto flex flex-col gap-3">
        {settingsItems.map((item) => (
          <div key={item.key}>
            <div
              className={clsx(
                "flex items-center gap-1 p-2 cursor-pointer border-t border-transparent text-[12px] px-4 font-semibold text-[#737373]",
                selectedKey === item.key && "border-t-gray-950 font-semibold"
              )}
              onClick={() => handleMenuClick(item.key)}
            >
              {item.label}
            </div>
            {item.subItems.length > 0 && (
              <div className="pl-4">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.key}
                    className={clsx(
                      "flex items-center text-[14px] gap-3 p-2 cursor-pointer ",
                      selectedKey === subItem.key &&
                        "border-t-gray-950 font-semibold"
                    )}
                    onClick={() => handleMenuClick(subItem.key, subItem.path)}
                  >
                    {subItem.icon}
                    {subItem.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsBar;
