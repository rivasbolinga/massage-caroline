import { GrLanguage } from 'react-icons/gr'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'

const LanguageButton = () => {
 const { i18n } = useTranslation()

   const handleClick = (lang) => {

    i18n.changeLanguage(lang)
   }
  return (
    <Wrapper>
      <GrLanguage />
      <div className="languages">
        <button onClick={() => handleClick('fr')} className="fr language">
          fr
        </button>
        <div className="grey-line"></div>
        <button onClick={() => handleClick('en')} className="en language">
          en
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #F6EEEA;
   .languages {
    display: flex;
  }
  .language {
    background: none;
    border: none;
  }

  .grey-line {
    width: 1px;
    background-color: grey;
    height: 20px;
  }
`

export default LanguageButton