import { useTranslation } from "react-i18next"
import LanguageSelector from "./components/LanguageSelector";

const App = () => {
  const {t}= useTranslation();
  const {line1,line2}=t("description",{
    example:"test"
  });
  return (
    <div className="container">
      <LanguageSelector/>
      <h1>{t("greeting")}</h1>
      <p>{line1}</p>
      <p>{line2}</p>
    </div>
  )
}

export default App