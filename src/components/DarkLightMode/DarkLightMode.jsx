import React, { useEffect } from 'react'
import { useDarkMode } from "@rbnd/react-dark-mode"
import { CiDark, CiLight } from 'react-icons/ci'

const DarkLightMode = () => {

  const { mode, setMode } = useDarkMode()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
  }, [mode])

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <button
      onClick={toggleMode}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px',
        color: mode === 'dark' ? '#fff' : '#1d2530',
      }}
    >
      {mode === 'dark' ? <CiLight /> : <CiDark />}
    </button>
    </>
  )
}

export default DarkLightMode
