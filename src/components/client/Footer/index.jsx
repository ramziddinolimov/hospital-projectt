import Facebook from "../../../assets/client/facebook.json";
import Instagram from "../../../assets/client/instagram.json";
import telegram from "../../../assets/client/telegram.json";
import {
  Links,
  Wrapper,
  CallDiv,
  AddressDiv,
  LocationDiv,
} from "./styled-index";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <Wrapper>
      <CallDiv>
        <h2>{t("Footer.0")}</h2>
        <h3>{t("Footer.1")}</h3>
        <p>
          {t("Footer.2")}:{" "}
          <a href="tel :+998 97 277 03 03">+998 97 277 03 03</a>
        </p>
        <p>
          {t("Footer.3")}:{" "}
          <a href="tel :+998 95 511 03 03">+998 95 511 03 03</a>
        </p>
      </CallDiv>
      <AddressDiv>
        <h2>{t("Footer.4")}</h2>
        <p>{t("Footer.5")}</p>
        <h3>{t("Footer.6")}</h3>
        <Links>
          <p>
            <Lottie animationData={Facebook} />
          </p>
          <p>
            <Lottie animationData={Instagram} />
          </p>
          <p>
            <Lottie animationData={telegram} />
          </p>
        </Links>
      </AddressDiv>
      <LocationDiv>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          width="550"
          height="400"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </LocationDiv>
    </Wrapper>
  );
}

export default Footer;
