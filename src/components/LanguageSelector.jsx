const languages = [
  { code: "en", lang: "English" },
  { code: "he", lang: "Hebrew" },
];
const changeLanguage =()=>{

}
const LanguageSelector = () => {
  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return <button key={lng.code} onClick={changeLanguage}>{lng?.lang}</button>;
      })}
    </div>
  );
};

export default LanguageSelector;
