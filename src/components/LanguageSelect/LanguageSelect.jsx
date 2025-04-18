import React, { useState } from 'react';
import i18n from '../../i18n';
import { FaChevronDown } from 'react-icons/fa';

const languages = {
  ru: { label: 'Русский', flag: "/flags/russia.png" },
  en: { label: 'English', flag: "/flags/english.png" },
}

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const currentLang = Object.keys(languages).includes(i18n.language) ? i18n.language : 'ru'

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={toggleDropdown}
        style={{
          background: 'transparent',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        <img src={languages[currentLang].flag} alt="flag" width="20" />
        <FaChevronDown />
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '5px',
            backgroundColor: 'red',
            padding: '8px 12px',
            borderRadius: '8px',
            zIndex: 100,
            color: 'white',
            whiteSpace: 'nowrap',
          }}
        >
          {Object.keys(languages).map((lang) => (
            <div
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>{languages[lang].label}</span>
              <img src={languages[lang].flag} alt={`${lang} flag`} width="20" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
