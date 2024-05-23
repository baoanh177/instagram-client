// Icons
import { IoSearch } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import clsx from "clsx";

const SearchInput = () => {
  const [isSearchFocus, setIsSearchFocus] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (isSearchFocus) {
        console.log("Call API");
      }
    }, 750);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchValue]);

  return (
    <>
      <div className="mt-6 p-3">
        <div className="relative flex justify-center border-2 h-10 rounded-lg overflow-hidden">
          {!isSearchFocus && (
            <div
              className="flex items-center justify-center shrink-0 w-9 cursor-pointer"
              onClick={() => setIsSearchFocus(true)}
            >
              <IoSearch className="text-2xl" />
            </div>
          )}
          <input
            type="text"
            className={clsx("w-full outline-none", isSearchFocus && "pl-5")}
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsSearchFocus(true)}
            onBlur={() => setIsSearchFocus(false)}
          />
          <div
            className={clsx(
              "absolute top-1/2 right-1 -translate-y-1/2 flex items-center justify-center shrink-0 w-9 cursor-pointer",
              !isSearchFocus && "opacity-0"
            )}
            onClick={() => {
              setSearchValue("")
            }}
          >
            <IoIosCloseCircle className="text-2xl hover:text-gray-700" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
