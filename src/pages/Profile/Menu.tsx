import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { icons } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Tooltip } from "antd";

type ProfileItem = {
    key: string;
    label: string;
    path: string;
    icon: ReactNode;
};

const profileItems: ProfileItem[] = [
    {
        key: 'status',
        label: 'Status',
        path: 'profile/',
        icon: <img src={icons.status} alt="status" />
    },
    {
        key: 'saved',
        label: 'Saved',
        path: 'profile/saved',
        icon: <img src={icons.saved} alt="saved" />
    },
    {
        key: 'tagged',
        label: 'Tagged',
        path: 'profile/tagged',
        icon: <img src={icons.tagged} alt="tagged" />
    }
];
const Menu = ({
    menuDetail,
    setMenuDetail,
}: {
    menuDetail: string;
    setMenuDetail: Dispatch<SetStateAction<string>>;
}) => {
    const navigate = useNavigate();
    const [selectedKey, setSelectedKey] = useState('status');

    return (
        <>
            <div className="">
                <nav>
                    <ul className="flex justify-center mx-auto gap-1 ">
                        {profileItems.map((item, index) => (
                            <li
                                key={index}
                                className={clsx(
                                    "flex items-center text-[14px] gap-2 p-6 mx-10 cursor-pointer border-t border-transparent ", selectedKey === item.key && "border-t-gray-950 font-semibold"

                                )}
                                onClick={() => {
                                    if (item.path) {
                                        setSelectedKey(item.key);
                                        navigate(item.path);
                                        setMenuDetail("");
                                    } else {
                                        setMenuDetail(item.key);
                                    }
                                }}
                            >
                                {menuDetail ? (
                                    <Tooltip title={item.label}>
                                        {item.icon}
                                    </Tooltip>
                                ) : (
                                    <div className="w-4 ">{item.icon}</div>
                                )}
                                {!menuDetail && (
                                    <div>{item.label}</div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Menu;