import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import '../styles/AboutPhone.scss';
import AboutImages from "../features/aboutImages/AboutImages";

const AboutPhone = () => {
const { t } = useTranslation();

return (
  <main>
    <div className="about-container">
      <h1 className="about-title">{t('about.about-me')}</h1>
      <h3 className="about-name">{t('about.name')}</h3>
      <div className="about-text">
        <p>{t('about.my-work')}</p>
        <p>{t('about.techniques')}</p>
        <button className="read-more-btn">
          {t('about.read-more')}
          <BsArrowRight className="arrow" />
        </button>
      </div>
    </div>
    <AboutImages />
    <div className="button-container">
      <button type="button">
        <Link to="/massages#top" className="massages-btn">
          {t('about.go-massages')}
          <BsArrowRight className="arrow" />
        </Link>
      </button>
    </div>
  </main>
)
}

export default AboutPhone;