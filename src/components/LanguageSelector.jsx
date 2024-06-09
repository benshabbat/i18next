const languages = [
  { code: "en", lang: "English" },
  { code: "he", lang: "Hebrew" },
];
const LanguageSelector = () => {
  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return <button key={lng.code}>{lng?.lang}</button>;
      })}
    </div>
  );
};

export default LanguageSelector;
