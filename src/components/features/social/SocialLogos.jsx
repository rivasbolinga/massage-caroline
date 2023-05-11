import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs';
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const SocialLogos = ({ color }) => {
  const { t } = useTranslation();
  return (
    <Wrapper title={t('tooltips.social')} className="social-logos-container">
      <BsFacebook title="Facebook" className="logo" color={color} />
      <BsWhatsapp title="Whatsapp" className="logo" color={color} />
      <BsInstagram title="Instagram" className="logo" color={color} />
      <AiOutlineMail title="Mail" className="logo mail" color={color} />
    </Wrapper>
  );
};

SocialLogos.propTypes = {
  color: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  .logo {
    curser: pointer;
    color: #d25c33 !important;
    font-size: 30px;
    transition: All 1s;
    &:hover {
      color: red !important;
      transform: translateY(-0.5rem)
    }
  }
  .mail {
    font-size: 35px;
  }
`;

export default SocialLogos;
