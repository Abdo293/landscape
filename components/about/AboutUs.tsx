import { useTranslations } from "next-intl";
import Image from "next/image";

export const AboutUs = () => {
  const t = useTranslations("About");
  return (
    <div className="container mx-auto py-[80px]" id="about">
      <h2 className="text-center text-[36px] font-semibold text-[#333]">
        {t("whoWeAre")}
      </h2>
      <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-10 pt-6 max-lg:px-[15px]">
        <div>
          <h3 className="text-[22px] font-semibold text-[#333]">
            {t("firstSecTitle")}
          </h3>
          <p className="pt-2 text-[#666]">{t("firstSec")}</p>

          <h3 className="pt-6 text-[22px] font-semibold text-[#333]">
            {t("secondSecTitle")}
          </h3>
          <p className="pt-2 text-[#666]">{t("secondSec")}</p>

          <h3 className="pt-6 text-[22px] font-semibold text-[#333]">
            {t("thirdSecTitle")}
          </h3>
          <p className="pt-2 text-[#666]">{t("thirdSec")}</p>
          <h3 className="pt-6 text-[22px] font-semibold text-[#333]">
            {t("listSecTitle")}
          </h3>
          <ul className="pt-2">
            <li className="text-[#666]">- {t("listSec1")}</li>
            <li className="text-[#666] py-2">- {t("listSec2")}</li>
            <li className="text-[#666]">- {t("listSec3")}</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-5">
          <div>
            <Image
              src={"/about-1.jpg"}
              width={250}
              height={250}
              alt="about us img"
              className="w-full"
            />
            <h3 className="pt-5 text-[22px] font-semibold text-[#333]">
              {t("imgTitle1")}
            </h3>
            <p className="pt-2 text-[#666] leading-[1.7]">{t("fourthSec")}</p>
          </div>
          <div>
            <Image
              src={"/about-2.jpg"}
              width={250}
              height={250}
              alt="about us img"
              className="w-full"
            />
            <h3 className="pt-5 text-[22px] font-semibold text-[#333]">
              {t("imgTitle2")}
            </h3>
            <p className="pt-2 text-[#666] leading-[1.7]">{t("fifthSec")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
