import { useTranslations } from "next-intl";
import Image from "next/image";

export const Services = () => {
  const t = useTranslations("Services");
  return (
    <div className="bg-[#6AAF08] py-[80px]" id="services">
      <div className="container mx-auto max-lg:px-[15px]">
        <h2 className="text-center text-[36px] font-semibold text-white">
          {t("title")}
        </h2>
        <p className="text-white text-center pt-5">{t("description")}</p>

        <div className="pt-10 grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/service-1.jpg"}
              width={250}
              height={250}
              alt="srvices img"
              className="rounded-full border-[10px] border-[rgba(255,255,255,0.1)]"
            />
            <div className="pt-5 text-[rgba(255,255,255,0.9)]">
              <h3 className="text-center text-[24px] pb-3">{t("serv1")}</h3>
              <p className="text-center">{t("serv1Desc")}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/service-2.jpg"}
              width={250}
              height={250}
              alt="srvices img"
              className="rounded-full border-[10px] border-[rgba(255,255,255,0.1)]"
            />
            <div className="pt-5 text-[rgba(255,255,255,0.9)]">
              <h3 className="text-center text-[24px] pb-3">{t("serv2")}</h3>
              <p className="text-center">{t("serv2Desc")}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/service-3.jpg"}
              width={250}
              height={250}
              alt="srvices img"
              className="rounded-full border-[10px] border-[rgba(255,255,255,0.1)]"
            />
            <div className="pt-5 text-[rgba(255,255,255,0.9)]">
              <h3 className="text-center text-[24px] pb-3">{t("serv3")}</h3>
              <p className="text-center">{t("serv3Desc")}</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/service-4.jpg"}
              width={250}
              height={250}
              alt="srvices img"
              className="rounded-full border-[10px] border-[rgba(255,255,255,0.1)]"
            />
            <div className="pt-5 text-[rgba(255,255,255,0.9)]">
              <h3 className="text-center text-[24px] pb-3">{t("serv4")}</h3>
              <p className="text-center">{t("serv4Desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
