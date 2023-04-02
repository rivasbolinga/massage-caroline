import { BsFacebook, BsWhatsapp, BsMailbox, BsInstagram } from 'react-icons/bs'
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';

const SocialLogos = () => {
  return (
    <Wrapper className="social-logos-container">
      <BsFacebook className="logo" />
      <BsWhatsapp className="logo" />
      <BsInstagram className="logo" />
      <AiOutlineMail className="logo mail" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  .logo {
    font-size: 30px
  }
  .mail {
    font-size: 35px;
  }
`

export default SocialLogos
