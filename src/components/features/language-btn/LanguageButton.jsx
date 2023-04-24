import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const LanguageButton = () => {
  const { i18n, t } = useTranslation();

  const handleClick = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <ToggleButton title={t('tooltips.navigation.lang-change')} onClick={handleClick}>
      <i className="fa-sharp fa-solid fa-globe" />
      <ToggleText>{i18n.language.toUpperCase()}</ToggleText>
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px inset #D25C33;

  &:hover {
    background-color: #dfbc8b;
    color: #30221E;
  }
`;

const ToggleText = styled.span`
  font-weight: bold;
  margin-left: 10px;
  text-transform: uppercase;
`;

export default LanguageButton;
