import { ReactNode, useState } from "react";
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
const Menu = () => {
    const navigate = useNavigate();
    const [selectedKey, setSelectedKey] = useState('status');
    return (
        <>
            <div className="border-t border-b sm:border-b-0">
                <nav>
                    <ul className="flex justify-around">
                        {profileItems.map((item, index) => (
                            <li
                                key={index}
                                className={clsx(
                                    "flex flex-1 sm:flex-none justify-center items-center text-[14px] gap-2 py-3 cursor-pointer border-t border-transparent",
                                    selectedKey === item.key && "border-t-gray-950 font-semibold"
                                )}
                                onClick={() => {
                                    if (item.path) {
                                        setSelectedKey(item.key);
                                        navigate(item.path);
                                    }
                                }}
                            >
                                <Tooltip placement="right" title={item.label} className="sm:hidden">
                                    <div className="shrink-0 flex items-center">{item.icon}</div>
                                </Tooltip>
                                <div className="hidden sm:flex items-center">
                                    {item.icon}
                                </div>
                                <div className="hidden sm:block">{item.label}</div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>



        </>
    );
}

export default Menu;