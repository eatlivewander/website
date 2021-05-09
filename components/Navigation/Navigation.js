import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';

import theme from '../../themes/default';
import NewsletterPopup from '../NewsletterPopup';

const NavContainer = styled.nav`
    display: flex;
    width: 100vw;
    height: 60px;
    position: sticky;
    background-color: white;
    align-items: center;
    justify-content: center;
    top: 0;
    border-bottom: 0.5px ${theme.lightGray} solid;

    @media ${theme.tablet} {
        height: 90px;
    }
`;

const Logo = styled.img`
    cursor: pointer;
    width: 175px;
    height: auto;

    @media ${theme.tablet} {
        width: 250px;
    }
`;

const Email = styled.div`
    display: none;
    cursor: pointer;
    position: absolute;
    right: 20px;
    margin-top: auto;
    margin-bottom: auto;
    width: 30px;
    height: 30px;

    @media only screen and (max-width: 359px) {
        display: none;
    }

    @media ${theme.tablet} {
        width: 30px;
        height: 30px;
    }

    img {
        width: 25px;
        height: auto;

        @media ${theme.tablet} {
            width: 30px;
        }
    }
`;

const TooltipInfo = styled(Tooltip)`
    background-color: black;
    color: white;
    font-family: ${theme.fontMontserrat};
`;

const PopupContainer = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-width: 360px;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    z-index: 3;
    display: ${props => (props.show ? `flex` : `none`)};
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Navigation = () => {
    const [newsletterOpen, setNewsletterOpen] = useState(false);

    useEffect(() => {
        if (newsletterOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [newsletterOpen]);

    return (
        <NavContainer>
            <Link href="https://eatlivewander.com">
                <a>
                    <Logo src="https://wndr.click/wp-content/uploads/2021/05/logo-horizontal-black-eatlivewander-3000x350-1.png" />
                </a>
            </Link>
            <Email onClick={() => setNewsletterOpen(!newsletterOpen)}>
                <TooltipInfo label="Newsletter">
                    <img
                        src="https://wndr.click/wp-content/uploads/2021/05/icon-email-128.png"
                        alt="Sign Up For Newsletter"
                    />
                </TooltipInfo>
            </Email>
            <PopupContainer show={newsletterOpen}>
                <NewsletterPopup setNewsletterOpen={setNewsletterOpen} />
            </PopupContainer>
        </NavContainer>
    );
};

export default Navigation;
