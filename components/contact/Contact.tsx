import { useTranslations } from "next-intl";
import React from "react";

export const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <div>
      <div
        className="container mx-auto max-lg:px-[15px] py-[80px]"
        id="contact"
      >
        <h2 className="text-center text-[36px] font-semibold text-[#333]">
          {t("title")}
        </h2>
        <p className="text-center pt-5 text-[#555]">{t("description")}</p>

        <div className="pt-10 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[18px] font-semibold text-[#333] pb-5">
              {t("addressTitle")}
            </h3>
            <p className="text-[#666] text-[15px]">{t("address")}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[18px] font-semibold text-[#333] pb-5">
              {t("workHoursTitle")}
            </h3>
            <p className="text-[#666] text-[15px]">{t("workHours")}</p>
            <p className="text-[#666] text-[15px]">{t("holiday")}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[18px] font-semibold text-[#333] pb-5">
              {t("contactInfoTitle")}
            </h3>
            <p className="text-[#666] text-[15px]">{t("contactPhone")}</p>
            <p className="text-[#666] text-[15px]">{t("contactEmail")}</p>
          </div>
        </div>

        <h3 className="text-center pt-16 text-[18px] font-semibold text-[#333]">
          {t("letMessage")}
        </h3>

        <form className="flex flex-col justify-center items-center pt-10">
          <div className="flex w-full gap-5">
            <input
              type="text"
              placeholder={t("name")}
              className="w-1/2 border border-[#ddd] py-3 px-5 outline-none transition-all duration-300 focus:shadow-xl"
            />
            <input
              type="text"
              placeholder={t("email")}
              className="w-1/2 border border-[#ddd] py-3 px-5 outline-none transition-all duration-300 focus:shadow-xl"
            />
          </div>
          <textarea
            placeholder={t("message")}
            className="w-full outline-none border border-[#ddd] mt-5 h-[300px] px-5 pt-3 transition-all duration-300 focus:shadow-xl"
          ></textarea>
        </form>

        <div className="flex items-center justify-center pt-5">
          <button className="bg-[#6aaf08] text-white py-3 px-10 font-normal rounded">
            {t("sendMsg")}
          </button>
        </div>
      </div>
    </div>
  );
};
