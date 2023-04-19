import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs';
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import PropTypes from 'prop-types';

const SocialLogos = ({ color }) => (
  <Wrapper className="social-logos-container">
    <BsFacebook className="logo" color={color} />
    <BsWhatsapp className="logo" color={color} />
    <BsInstagram className="logo" color={color} />
    <AiOutlineMail className="logo mail" color={color} />
  </Wrapper>
);

SocialLogos.propTypes = {
  color: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  .logo {
    font-size: 30px;
  }
  .mail {
    font-size: 35px;
  }
`;

export default SocialLogos;
