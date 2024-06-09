import { useTranslation } from "react-i18next"
import LanguageSelector from "./components/LanguageSelector";

const App = () => {
  const {t}= useTranslation();
  return (
    <div className="container">
      <LanguageSelector/>
      <h1>{t("greeting")}</h1>
    </div>
  )
}

export default App