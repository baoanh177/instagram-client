import clsx from "clsx";
import { ReactNode } from "react";

const MenuDetail = ({ title, content }: { title: string, content: ReactNode }) => {
  return (
    <>
      <div
        className={clsx(
          "hidden md:block absolute top-0 right-0 bottom-0 pt-3 w-96 rounded-e-2xl border-2 bg-white transition-all shadow-lg",
          title ? "opacity-100 translate-x-full visible" : "opacity-0 translate-x-0 invisible"
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
