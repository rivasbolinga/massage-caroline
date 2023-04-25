import { useTranslation } from 'react-i18next';
import imageCaroline from '../../../assets/images/image5.jpeg';
import imageHands from '../../../assets/images/image0 (1).jpeg';

const AboutImages = () => {
  const { t } = useTranslation();
  return (
    <div title={t('tooltips.about.image')} className="images-container">
      <img className="image image2" alt="myself" src={imageCaroline} />
      <img className="image image1" alt="giving a massage" src={imageHands} />
    </div>
  );
};

export default AboutImages;
