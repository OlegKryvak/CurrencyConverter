import styles from "./Footer.module.css";
import instagram from "../../assets/icons/instagram.png";
import telegram from "../../assets/icons/telegram.png";
import linkedin from "../../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <a target="_blank" href="https://www.instagram.com/drago_blanco/">
        <img src={instagram} className={styles.instagram} alt="instagram" />
      </a>
      <a target="_blank" href="https://t.me/Aliezhka_12">
        <img src={telegram} className={styles.instagram} alt="telegram" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/oleg-kryvak-520118218/">
        <img src={linkedin} className={styles.instagram} alt="linkedin" />
      </a>
    </div>
  );
};

export default Footer;
