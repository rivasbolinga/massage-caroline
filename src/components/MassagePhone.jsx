import { useTranslation } from 'react-i18next'
import './styles/MassagePhone.scss'

const MassagePhone = () => {
  const { t } = useTranslation()

  const massageWellness = (e) => {
    const timeMassage = e.target.value
    if (timeMassage !== '') {
      const link = `https://calendly.com/carolineaime7/massage-bien-etre-${timeMassage}min`
      window.open(link, '_blank')
    }
  }
  const massageCustom = (e) => {
    const timeMassage = e.target.value
    if (timeMassage !== '') {
      const link = `https://calendly.com/carolineaime7/massage-intuitif-${timeMassage}min`
      window.open(link, '_blank')
    }
  }

  const massageAyurvedic = (e) => {
    const timeMassage = e.target.value
    if (timeMassage !== '') {
      const link = `https://calendly.com/carolineaime7/massage-ayurvedique-${timeMassage}min`
      window.open(link, '_blank')
    }
  }

  return (
    <section className="massage-section">
      <div className="massage-p-title-container">
        <h1 className="massage-p-title-text">{t('navigation.massages')}</h1>
      </div>
      <div className="massages-p-container">
        <div className="massage-p-container wellness">
          <div className="massage-p-text">
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
              className="book-now-btn book-massage"
              onChange={massageWellness}
            >
              <option value=""> {t('massages.book')}</option>
              <option value="30">30 min</option>
              <option value="60">60 min</option>
              <option value="90">90 min</option>
            </select>
          </div>
        </div>
        <div className="massage-p-container customized">
          <div className="massage-p-text">
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
                  className="book-now-btn book-massage"
                >
                  <option value="">{t('massages.book')}</option>
                  <option value="30">30 min</option>
                  <option value="60">60 min</option>
                  <option value="90">90 min</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="massage-p-container ayurvedic">
          <div className="massage-p-text">
            <h3 className="massage-p-text-title">{t('massages.ayurvedic')}</h3>
            <p className="massage-p-text-description">
              {t('massages.ayurvedic-technique')}
            </p>
            <div className="times-container">
              <p className="time-text">60 min - 90 min</p>
              <select
                onChange={massageAyurvedic}
                type="button"
                className="book-now-btn book-massage"
              >
                <option value=""> {t('massages.book')}</option>
                <option value="60">60 min</option>
                <option value="90">90 min</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MassagePhone