import { useTranslation } from "react-i18next";
import DocSlider from "../../../components/client/DoctorComponents/Slider";
import {Wrapper} from "./styled-index"

function Docs() {
  const {t , i18n} = useTranslation()
  return (
    <Wrapper>
      <DocSlider />
      <a href="tel: 97 277 03 03">{t("Doctors.0")}</a>
    </Wrapper>
  );
}

export default Docs;
