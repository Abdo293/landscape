import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("Header");
  return (
    <div className="header h-full flex items-center justify-center flex-col max-lg:px-[15px]">
      <h1 className="text-white font-bold text-[64px] text-center max-md:text-[34px]">
        {t("mainTitle")}
      </h1>
      <p className="text-white text-[22px] font-medium text-center py-5 leading-[1.7] max-md:text-[18px]">
        {t("descripeService")}
      </p>
      <a
        className="bg-[#6aaf08] text-white py-4 px-8 font-normal rounded"
        href="#services"
      >
        {t("srvicesBtn")}
      </a>
    </div>
  );
};
