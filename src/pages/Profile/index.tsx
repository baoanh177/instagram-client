import { useState } from "react";
import { icons } from "../../assets/icons";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";

const Profile = () => {
  const [menuDetail, setMenuDetail] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="max-w-screen-md mx-auto py-10">
      <div className="flex gap-20">
        <div>
          <img
            className="w-[150px] h-[150px]"
            src={icons.defaultAvatar}
            alt="default avatar"
            onClick={toggleModal}
          />
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="bg-white p-4 rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-[400px] p-6 rounded-lg  flex flex-col items-center">
                <img
                  className="w-[56px] h-[56px] rounded-full"
                  src={icons.defaultAvatar}
                  alt="default avatar"
                />
                <div className="mt-4 text-[20px] font-medium">Synced profile photo</div>
                <div className="text-[14px] border-b pb-4 w-full text-center text-[#737373]">Instagram, Facebook</div>
                <div className="w-full">
                  <label
                    htmlFor="file-upload"
                    className="block border-b pb-4 w-full text-center lis cursor-pointer py-4 text-blue-500 font-medium"
                  >
                    Upload Photo
                  </label>
                  <input id="file-upload" type="file" className="hidden" />
                </div>
                <div className="w-full">
                  <button
                    className="w-full text-center border-b pb-4 py-4 text-red-500 font-medium"
                    onClick={() => console.log('Remove current photo')}
                  >
                    Remove current photo
                  </button>
                </div>

                <div className="w-full">
                  <button
                    className="w-full text-center py-4 text-black font-medium"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <div className="text-[18px]">gwenkalong</div>
            <button className="bg-[#EFEFEF] font-semibold text-[14px] px-2 py-1 rounded-lg">Edit Profile</button>
            <button className="bg-[#EFEFEF] font-semibold text-[14px] px-2 py-1 rounded-lg">View archive</button>
            <button><img src={icons.setting} alt="" /></button>
          </div>
          <div className="flex gap-12 ">
            <div><span className="font-semibold">10</span> post</div>
            <div><span className="font-semibold">17</span> followers</div>
            <div><span className="font-semibold">100</span> following</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Nguyễn Duy Long</div>
            <div className="text-sm">Hello 500 bro</div>
            <div className="flex items-center gap-2"><img className="w-4 h-4" src={icons.iconLink}/><a className="text-[12px] text-blue-400" href="">facebook.com/GwenKaLong</a></div>
          </div>
        </div>
      </div>
      <div className=" w-[87px] mt-20 h-[118px] flex flex-col text-center gap-2">
        <svg aria-label="Biểu tượng dấu cộng" className="p-5 w-full border rounded-[50%] bg-[#FAFAFA]" fill="#ccc" role="img" viewBox="0 0 24 24"><title>Biểu tượng dấu cộng</title><path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path></svg>
        <div className="text-[12px] font-semibold">New</div>
      </div>
      <div className="pt-12">
        <div className="border-t "></div>
        <Menu menuDetail={menuDetail} setMenuDetail={setMenuDetail} />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
