import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const TranslatedTitle = ({ title }) => {
  const { t } = useTranslation();
  return <span title={t('tooltips.massage.title')}>{t(`massages.${title}`)}</span>;
};

TranslatedTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TranslatedTitle;
