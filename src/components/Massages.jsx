import { useTranslation } from 'react-i18next';
import './styles/Massages.scss';

const Massages = () => {
  const { t } = useTranslation();

  const bookMassage = (e, massageType) => {
    const timeMassage = e.target.value;
    if (timeMassage !== '') {
      const link = `https://calendly.com/rivaspalaciosandrea17/massage-${massageType}-${timeMassage}min`;
      window.open(link, '_blank');
    }
  };

  return (
    <section className="massage-section">
      <div className="massage-p-title-container">
        <h1 className="massage-p-title-text" title={t('navigation.massages')}>
          {t('navigation.massages')}
        </h1>
      </div>
      <div className="massages-p-container">
        <div className="massage-p-container wellness">
          <div
            className="image-desktop-wellness"
            title={t('tooltips.massage.image')}
          />
          <div className="massage-p-text">
            <h3
              className="massage-p-text-title"
              title={t('tooltips.massage.title')}
            >
              {t('massages.wellness-massage')}
            </h3>
            <p className="massage-p-text-description">
              {t('massages.back-legs')}
            </p>
            <p
              className="massage-p-text-time"
              title={t('tooltips.massage.time')}
            >
              30 min
            </p>
            <p
              className="massage-p-text-description"
              title={t('tooltips.massage.description')}
            >
              {t('massages.entire-body')}
            </p>
            <p className="time-text" title={t('tooltips.massage.time')}>
              60 min - 90min
              {' '}
            </p>
            <select
              type="button"
              className="book-now-btn book-massage"
              title={t('tooltips.button')}
              onChange={(e) => bookMassage(e, 'bien-etre')}
            >
              <option value="">
                {' '}
                {t('massages.book')}
              </option>
              <option value="30">30 min</option>
              <option value="60">60 min</option>
              <option value="90">90 min</option>
            </select>
          </div>
        </div>
        <div
          className="massage-p-container customized"
          title={t('tooltips.massage.image')}
        >
          <div className="massage-p-text">
            <h3
              className="massage-p-text-title"
              title={t('tooltips.massage.title')}
            >
              {t('massages.customized')}
            </h3>
            <p
              className="massage-p-text-description"
              title={t('tooltips.massage.description')}
            >
              {t('massages.bespoke')}
            </p>
            <div className="times-container">
              <div className="time-container">
                <p className="time-text" title={t('tooltips.massage.time')}>
                  30 min - 60min - 90min
                </p>
                <select
                  type="button"
                  onChange={(e) => bookMassage(e, 'intuitif')}
                  className="book-now-btn book-massage"
                  title={t('tooltips.button')}
                >
                  <option value="">{t('massages.book')}</option>
                  <option value="30">30 min</option>
                  <option value="60">60 min</option>
                  <option value="90">90 min</option>
                </select>
              </div>
            </div>
          </div>
          <div className="image-desktop-customized" />
        </div>
        <div
          className="massage-p-container ayurvedic"
          title={t('tooltips.massage.image')}
        >
          <div className="image-desktop-ayurvedic" />
          <div className="massage-p-text">
            <h3
              className="massage-p-text-title"
              title={t('tooltips.massage.title')}
            >
              {t('massages.ayurvedic')}
            </h3>
            <p
              className="massage-p-text-description"
              title={t('tooltips.massage.description')}
            >
              {t('massages.ayurvedic-technique')}
            </p>
            <div className="times-container">
              <p className="time-text" title={t('tooltips.massage.time')}>
                60 min - 90 min
              </p>
              <select
                onChange={(e) => bookMassage(e, 'ayurvedique')}
                type="button"
                className="book-now-btn book-massage"
                title={t('tooltips.button')}
              >
                <option value="">
                  {' '}
                  {t('massages.book')}
                </option>
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
