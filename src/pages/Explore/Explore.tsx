import { images } from "../../assets/images";
import { GoHeartFill } from "react-icons/go";
import { BiSolidMessageRounded } from "react-icons/bi";

const Explore = () => {
  const likes = 150;
  const views = 350;

  return (
    <div className="mt-6 h-full overflow-y-auto">
      <div className="max-w-screen-lg px-8  mx-auto flex gap-1">
        <div className="w-full md:w-2/3 grid py-1 grid-cols-2 grid-rows-2 gap-1">
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.palmExplore}
              className="w-full h-full object-cover"
              alt="palmExplore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.palm2Explore}
              className="w-full h-full object-cover"
              alt="palm2Explore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.palm3Explore}
              className="w-full h-full object-cover"
              alt="palm3Explore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.dogcute}
              className="w-full h-full object-cover"
              alt="dogcute"
            />
            <Overlay likes={likes} views={views} />
          </div>
        </div>
        <div className="relative w-full md:w-1/3 overflow-hidden md:h-[614px] group">
          <img
            src={images.catExplore}
            className="w-full h-full py-1 object-cover"
            alt="catExplore"
          />
          <Overlay likes={likes} views={views} />
        </div>
      </div>
      {/*  */}
      <div className="max-w-screen-lg px-8 mt-[-4px] mx-auto flex gap-1">
        <div className="relative w-full md:w-1/3 overflow-hidden md:h-[614px] group">
          <img
            src={images.imgCemento}
            className="w-full h-full py-1 object-cover"
            alt="catExplore"
          />
          <Overlay likes={likes} views={views} />
        </div>
        <div className="w-full md:w-2/3 grid py-1 grid-cols-2 grid-rows-2 gap-1">
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.imgGirl}
              className="w-full h-full object-cover"
              alt="palmExplore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.imgMeme}
              className="w-full h-full object-cover"
              alt="palm2Explore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.imgGirl1}
              className="w-full h-full object-cover"
              alt="palm3Explore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.imgRafah}
              className="w-full h-full object-cover"
              alt="dogcute"
            />
            <Overlay likes={likes} views={views} />
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg px-8 mt-[-4px] mx-auto flex gap-1">
        <div className="w-full md:w-2/3 grid py-1 grid-cols-2 grid-rows-2 gap-1">
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.palmExplore}
              className="w-full h-full object-cover"
              alt="palmExplore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.palm2Explore}
              className="w-full h-full object-cover"
              alt="palm2Explore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.palm3Explore}
              className="w-full h-full object-cover"
              alt="palm3Explore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.dogcute}
              className="w-full h-full object-cover"
              alt="dogcute"
            />
            <Overlay likes={likes} views={views} />
          </div>
        </div>
        <div className="relative w-full md:w-1/3 overflow-hidden  md:h-[614px] group">
          <img
            src={images.catExplore}
            className="w-full h-full py-1 object-cover"
            alt="catExplore"
          />
          <Overlay likes={likes} views={views} />
        </div>
      </div>
      <div className="max-w-screen-lg px-8 mt-[-4px] mx-auto flex gap-1">
        <div className="relative w-full md:w-1/3 overflow-hidden md:h-[614px] group">
          <img
            src={images.imgCemento}
            className="w-full h-full py-1 object-cover"
            alt="catExplore"
          />
          <Overlay likes={likes} views={views} />
        </div>
        <div className="w-full md:w-2/3 grid py-1 grid-cols-2 grid-rows-2 gap-1">
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.imgGirl}
              className="w-full h-full object-cover"
              alt="palmExplore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.imgMeme}
              className="w-full h-full object-cover"
              alt="palm2Explore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.imgGirl1}
              className="w-full h-full object-cover"
              alt="palm3Explore"
            />
            <Overlay likes={likes} views={views} />
          </div>
          <div className="relative overflow-hidden md:h-[300px] group">
            <img
              src={images.imgRafah}
              className="w-full h-full object-cover"
              alt="dogcute"
            />
            <Overlay likes={likes} views={views} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Overlay = ({ likes, views }) => (
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    <div className="text-white flex sm:gap-2 gap-8  text-lg font-semibold max-w-full">
      <div className="flex gap-1 items-center truncate">
        <GoHeartFill />
        {likes}
      </div>
      <div className="flex gap-1 items-center truncate">
        <BiSolidMessageRounded />
        {views}
      </div>
    </div>
  </div>
);

export default Explore;
