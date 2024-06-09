import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "he", lang: "Hebrew" },
];
const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button
            className={i18n.language === lng.code ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng?.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
