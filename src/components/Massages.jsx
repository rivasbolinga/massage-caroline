import { useTranslation } from 'react-i18next';
import './styles/Massages.scss';
import massage1 from '../assets/images/massage1.jpeg';
import massage2 from '../assets/images/massage2.jpeg';
import massage3 from '../assets/images/massage3.jpeg';

const Massages = () => {
  const { t } = useTranslation();
  const massageWellness = (e) => {
    const timeMassage = e.target.value;
    if (timeMassage !== '') {
      const link = `https://calendly.com/carolineaime7/massage-bien-etre-${timeMassage}min`;
      window.open(link, '_blank');
    }
  };
  const massageCustom = (e) => {
    const timeMassage = e.target.value;
    if (timeMassage !== '') {
      const link = `https://calendly.com/carolineaime7/massage-intuitif-${timeMassage}min`;
      window.open(link, '_blank');
    }
  };

  const massageAyurvedic = (e) => {
    const timeMassage = e.target.value;
    if (timeMassage !== '') {
      const link = `https://calendly.com/carolineaime7/massage-ayurvedique-${timeMassage}min`;
      window.open(link, '_blank');
    }
  };
  return (
    <section className="massage-d-section">
      <div className="massage-p-title-container">
        <h1 className="massage-title-text">{t('navigation.massages')}</h1>
      </div>
      <div className="massages-container">
        <div className="massage-container">
          <img alt="massage" src={massage1} className="massage-image" />
          <div className="massage-p-text desktop">
            <h3 className="massage-p-text-title">
              {t('massages.wellness-massage')}
            </h3>
            <p className="massage-p-text-description">
              {t('massages.back-legs')}
            </p>
            <p className="massage-p-text-time">30 min</p>
            <p className="massage-p-text-description">
              {t('massages.entire-body')}
            </p>
            <p className="time-text">60 min - 90min </p>
            <select
              type="button"
              className="book-d-massage-button"
              onChange={massageWellness}
            >
              <option value="">{t('massages.book')}</option>
              <option value="30">30 min</option>
              <option value="60">60 min</option>
              <option value="90">90 min</option>
            </select>
          </div>
        </div>
        <div className="massage-container">
          <div className="massage-p-text desktop">
            <h3 className="massage-p-text-title">{t('massages.customized')}</h3>
            <p className="massage-p-text-description">
              {t('massages.bespoke')}
            </p>
            <div className="times-container">
              <div className="time-container">
                <p className="time-text">30 min - 60min - 90min</p>
                <select
                  type="button"
                  onChange={massageCustom}
                  className="book-d-massage-button"
                >
                  <option value="">{t('massages.book')}</option>
                  <option value="30">30 min</option>
                  <option value="60">60 min</option>
                  <option value="90">90 min</option>
                </select>
              </div>
            </div>
          </div>
          <img alt="massage" src={massage2} className="massage-image" />
        </div>
        <div className="massage-container">
          <img alt="massage" src={massage3} className="massage-image" />
          <div className="massage-p-text desktop">
            <h3 className="massage-p-text-title">{t('massages.ayurvedic')}</h3>
            <p className="massage-p-text-description">
              {t('massages.ayurvedic-technique')}
            </p>
            <div className="times-container">
              <p className="time-text">60 min - 90 min</p>
              <select
                onChange={massageAyurvedic}
                type="button"
                className="book-d-massage-button"
              >
                <option value="">{t('massages.book')}</option>
                <option value="60">60 min</option>
                <option value="90">90 min</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Massages;
