import React from 'react'
import "./HeaderTop.scss"
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import DarkLightMode from '../../DarkLightMode/DarkLightMode';
import LanguageSelect from '../../LanguageSelect/LanguageSelect';

const HeaderTop = () => {
    return (
        <>
            <section className='headerTop'>
                <div className="container">
                    <div className="headerTop__wrapper">
                        <Link className="headerTop__loc">
                            <FaLocationDot />
                            <p>Адрес не выбран</p>
                        </Link>
                        <div className="headerTop__nav">
                            <div className="headerTop__btn-dark">
                                <DarkLightMode />
                            </div>
                            <Link>
                                Регистрация/Авторизация
                            </Link>
                            <LanguageSelect />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeaderTop
