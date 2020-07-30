import { elements } from './base';

export const renderHeader = (page) => {
    const markup = `
        <header class="header header--${page}">
            <div class="header__content">
                <div class="header__logo-wrapper">
                    <img class="header__logo" src="#" alt="Logo" />
                </div>
                <div class="header__nav">
                    <div class="header__nav-content">
                        <div class="header__nav-link"><a href="./${page}.html class="header__nav-a">About</a></div>
                        <div class="header__nav-link"><a href="./${page}.html class="header__nav-a">Find a Job</a></div>
                        <div class="header__nav-link"><a href="./${page}.html class="header__nav-a">Contact Us</a></div>
                    </div>
                </div>
            </div>
        </header>`;
    
    elements.body.insertAdjacentHTML('afterbegin', markup);
    };
