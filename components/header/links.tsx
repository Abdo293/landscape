import { useTranslations } from "next-intl";

export const Links = () => {
  const t = useTranslations("Navbar");

  return (
    <>
      <li>
        <a href="#about">{t("about")}</a>
      </li>
      <li>
        <a href="#services">{t("services")}</a>
      </li>
      <li>
        <a href="#gallery">{t("gallery")}</a>
      </li>
      <li>
        <a href="#contact">{t("contact")}</a>
      </li>
    </>
  );
};
