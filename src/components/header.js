// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation, Link } from '../lib/i18n';

// Component definition
const Header = ({ t }) => {
  const changeLangageHandler = (e, l) => {
    e.preventDefault();
    i18n.changeLanguage(l.toLowerCase());
  };

  return (
    <>
      <div>
        <h4>{t('header:title')}</h4>
        <Link href='/'>
          <a>{t('header:home')}</a>
        </Link>
        <span>&nbsp;</span>
        <Link href='/about'>
          <a>{t('header:about_us')}</a>
        </Link>
      </div>
      <div>
        <span>{i18n.language} - &nbsp;</span>
        <button type='button' onClick={e => changeLangageHandler(e, 'ES')}>
          ES
        </button>
        <button type='button' onClick={e => changeLangageHandler(e, 'EN')}>
          EN
        </button>
      </div>
    </>
  );
};

// PropTypes
Header.propTypes = {
  t: PropTypes.func.isRequired
};

// Exportation
export default withTranslation('common')(Header);
