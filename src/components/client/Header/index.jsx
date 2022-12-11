import Logo from "../../../assets/client/hos.jpg";
import { Wrapper, Infors, Nav } from "./styled-index";
import percentage from "../../../assets/client/percentage.json";
import address from "../../../assets/client/address.json";
import writing from "../../../assets/client/writing.json";
import call from "../../../assets/client/call.json";
import Lottie from "lottie-react";
import Buttons from "./buttons";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const HendelChange = (e) => {
    let LangVal = e.target.value;
    window.location.reload();
    window.localStorage.setItem("i18nextLng", LangVal);
  };
  const HendelChange2 = (e) => {
    window.location.reload();
    let LangVal = e.target.value;
    window.localStorage.setItem("i18nextLng", LangVal);
  };
  const ValLang = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
      <Infors>
        <Nav>
          <ul>
            <li>
              <a href="#">
                <p>
                  <Lottie animationData={percentage} />
                </p>
                {t("Header.0")}
              </a>
            </li>
            <li>
              <a href="#">
                <p>
                  <Lottie animationData={address} />
                </p>
                {t("Header.1")}
              </a>
            </li>
            <li>
              <a href="#">
                <p>
                  <Lottie animationData={writing} />
                </p>
                {t("Header.2")}
              </a>
            </li>
            <li>
              <a href="tel:+998972770303 ">
                <p>
                  <Lottie animationData={call} />
                </p>
                +998 (97) 277 0303
              </a>
            </li>
            <li>
              {ValLang() === "uz" ? (
                <>
                  <button
                    className="buttonRu"
                    value="ru"
                    onClick={HendelChange}
                  >
                    RU
                  </button>
                </>
              ) : (
                <button className="buttonUz" value="uz" onClick={HendelChange2}>
                  UZ
                </button>
              )}
            </li>
          </ul>
        </Nav>
        <Buttons />
      </Infors>
    </Wrapper>
  );
}

export default Header;
