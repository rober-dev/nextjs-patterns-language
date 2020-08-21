// Vendor libs
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation, Link } from '../lib/i18n';

// Custom libs
const { allLanguages } = require('next/config').default().publicRuntimeConfig;

// Component definition
const Header = ({ t, i18n }) => {
  // Event handlers
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
        <span>{i18n.language.toUpperCase()} - &nbsp;</span>
        {allLanguages &&
          allLanguages.map(l => {
            return (
              <button
                key={l}
                type='button'
                onClick={e => changeLangageHandler(e, l)}
              >
                {l.toUpperCase()}
              </button>
            );
          })}
      </div>
    </>
  );
};

// PropTypes
Header.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    language: PropTypes.string,
    changeLanguage: PropTypes.func.isRequired
  })
};

// Exportation
export default withTranslation('common')(Header);
