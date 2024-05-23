import clsx from "clsx";
import { ReactNode } from "react";

const MenuDetail = ({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) => {
  return (
    <>
      <div
        className={clsx(
          `hidden md:block absolute top-0 right-0 bottom-0 pt-3 w-96 rounded-e-2xl border 
          bg-white dark:bg-black transition-all shadow-lg dark:border-gray-700 border-l-0`,
          title
            ? "opacity-100 translate-x-full visible"
            : "opacity-0 translate-x-0 invisible"
        )}
      >
        {title && (
          <div className="text-2xl font-bold px-6">
            {title.replace(title[0], title[0].toUpperCase())}
          </div>
        )}
        {content}
      </div>
    </>
  );
};

export default MenuDetail;
